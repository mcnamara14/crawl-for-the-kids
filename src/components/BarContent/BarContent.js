import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import './BarContent.css'
import 'firebase/database'
import { connect } from 'react-redux'
import { storeCurrentBar } from '../../actions'
import { withRouter } from 'react-router-dom'
import PreCheckin from '@material-ui/icons/CheckBoxOutlineBlank'
import PostCheckin from '@material-ui/icons/CheckBox'
import * as firebase from 'firebase'
import { updateCounter, checkIn } from '../../actions'
import NavIcon from './nav-icon.png'
import ThreeLionsImg from './three-lions.jpg'
import SquireLoungeImg from './squire-lounge.jpg'
import PetesSatireLoungeImg from './petes-satire-lounge.jpg'
import ProhibitionImg from './prohibition.jpg'
import SanchosImg from './sanchos.jpg'
import SatelliteBarImg from './satellite-bar.jpg'
import TooeysImg from './tooeys.jpg'
import IrishSnugImg from './irish-snug.jpg'
import KingasLoungeImg from './kingas-lounge.jpg'
import LondonPubImg from './london-pub.jpg'
import NobHillImg from './nob-hill.jpg'
import OneUpImg from './one-up.jpg'

class BarContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      challenges: []
    }
  }

  componentDidMount() {
    const challenges = []
    const location = window.navigator && window.navigator.geolocation
    const firebaseRef = firebase.database().ref()
    const retrievedObject = localStorage.getItem('user')
    const parsedObject = JSON.parse(retrievedObject)
    const users = firebaseRef.child('users').child(parsedObject.userId)

    if (location) {
      location.getCurrentPosition(position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
    }

    users
      .once('value', snap => {
        if (snap.val().challenges) {
          const keys = Object.keys(snap.val().challenges)
          keys.forEach(key => {
            challenges.push(key)
          })
        }
      })
      .then(() => this.setState({ challenges }))
  }

  changeToNextBar = () => {
    const currentBar = this.props.currentBar.barNum
    this.props.storeCurrentBar(this.props.allBars[currentBar])
  }

  checkIn = async barNum => {
    if (!this.props.currentBar.checkedIn) {
      await this.props.updateCounter()
      this.addCountToFirebase()
      this.props.checkIn(barNum)
    }
  }

  addCountToFirebase = () => {
    const { name } = this.props.currentBar
    let firebaseLocation
    const firebaseRef = firebase.database().ref()
    const retrievedObject = localStorage.getItem('user')
    const parsedObject = JSON.parse(retrievedObject)

    firebaseLocation = firebaseRef
      .child('users')
      .child(parsedObject.userId)
      .child('challenges')
      .child(name)
    firebaseLocation.update({ count: 1 })

    if (!this.state.challenges.includes(name)) this.setState({ challenges: [...this.state.challenges, name] })
  }

  render() {
    let nextBarGoogleName
    let nextStop
    let finalBar
    let checkedIn
    let backgroundImg

    const {
      name,
      barNum,
      barSubtitle,
      special,
      time,
      numTitle,
      googleName,
      image,
      address,
      fact,
      challenge
    } = this.props.currentBar

    switch (image) {
      case 'ThreeLionsImg':
        backgroundImg = ThreeLionsImg
        break
      case 'SquireLoungeImg':
        backgroundImg = SquireLoungeImg
        break
      case 'IrishSnugImg':
        backgroundImg = IrishSnugImg
        break
      case 'KingasLoungeImg':
        backgroundImg = KingasLoungeImg
        break
      case 'LondonPubImg':
        backgroundImg = LondonPubImg
        break
      case 'NobHillImg':
        backgroundImg = NobHillImg
        break
      case 'OneUpImg':
        backgroundImg = OneUpImg
        break
      case 'PetesSatireLoungeImg':
        backgroundImg = PetesSatireLoungeImg
        break
      case 'ProhibitionImg':
        backgroundImg = ProhibitionImg
        break
      case 'SanchosImg':
        backgroundImg = SanchosImg
        break
      case 'SatelliteBarImg':
        backgroundImg = SatelliteBarImg
        break
      case 'TooeysImg':
        backgroundImg = TooeysImg
        break
    }

    finalBar = this.props.allBars.length === barNum

    if (!finalBar) {
      nextBarGoogleName = this.props.allBars[barNum].googleName
      nextStop = this.props.allBars[barNum].name
    } else {
      nextBarGoogleName = this.props.allBars[barNum - 1].googleName
    }

    this.state.challenges.includes(name) ? (checkedIn = true) : (checkedIn = false)

    return (
      <React.Fragment>
        <Grid container className="barImageContainer" style={{ backgroundImage: `url(${backgroundImg})` }}>
          <div className="barFact">{fact}</div>
        </Grid>
        <Grid container className="barContentContainer" justify="center">
          <Grid item xs={10} align="left">
            <h3>{time}</h3>
            <Grid container className="barTitle" alignItems="center">
              <div className="barNum">{numTitle}</div>
              <h1>{name}</h1>
            </Grid>
            <Grid item className="address">
              {address}
            </Grid>
            <Grid item className="barSubtitle">
              {barSubtitle}
            </Grid>
            <Grid item className="hr" />
            <Grid container className="specials" alignItems="center">
              <Grid item>
                <Grid container alignContent="center" alignItems="center" className="specialTitle">
                  <h4>Special:</h4>
                  {special}
                </Grid>
                <Grid container alignContent="center" alignItems="center" className="specialTitle2">
                  <h4>Challenge:</h4>
                  {challenge}
                  <div className="challenge">
                    {checkedIn ? (
                      <PostCheckin onClick={() => this.checkIn(barNum)} style={{ fill: '#fe403f' }} />
                    ) : (
                      <PreCheckin onClick={() => this.checkIn(barNum)} style={{ fill: '#fe403f' }} />
                    )}{' '}
                    challenge completed
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="hr" />
            {!finalBar ? (
              <div>
                <h3 className="nextStop">Next Bar</h3>
                <h1>{nextStop}</h1>
                <Grid container class="nextBarButtons" alignItems="center" direction="row">
                  <Button
                    className="directionsButton"
                    href={`https://www.google.com/maps/dir/?api=1&origin=${this.state.latitude}, ${
                      this.state.longitude
                    }&destination=${nextBarGoogleName}+Denver+CO&travelmode=walking`}
                    target="_blank"
                    variant="contained">
                    DIRECTIONS
                  </Button>
                  <Button variant="contained" className="nextBarButton" onClick={() => this.changeToNextBar()}>
                    HEAD THERE
                  </Button>
                </Grid>
              </div>
            ) : null}
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeCurrentBar: bar => {
      dispatch(storeCurrentBar(bar))
    },
    updateCounter: () => {
      dispatch(updateCounter())
    },
    checkIn: barNum => {
      dispatch(checkIn(barNum))
    }
  }
}

const mapStateToProps = state => {
  return { currentBar: state.currentBar, allBars: state.allBars, counter: state.counter, userId: state.userId }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BarContent)
)
