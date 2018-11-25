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

class BarContent extends Component {
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
    let firebaseLocation
    const firebaseRef = firebase.database().ref()
    const retrievedObject = localStorage.getItem('user')
    const parsedObject = JSON.parse(retrievedObject)

    firebaseLocation = firebaseRef.child('users').child(parsedObject.userId)
    firebaseLocation.update({ count: this.props.counter, currentBar: this.props.currentBar.name })
  }

  render() {
    let nextBarGoogleName
    let nextStop
    let finalBar
    const { name, barNum, barSubtitle, special, time, googleName, checkedIn, image, address, fact } = this.props.currentBar

    finalBar = this.props.allBars.length === barNum

    if (!finalBar) {
      nextBarGoogleName = this.props.allBars[barNum].googleName
      nextStop = this.props.allBars[barNum].name
    } else {
      nextBarGoogleName = this.props.allBars[barNum - 1].googleName
    }

    return (
      <React.Fragment>
        <Grid container className="barImageContainer" style={{ backgroundImage: `url(${ThreeLionsImg})` }}>
          <div className="barFact">Albinism fact: <br />{fact}</div>
        </Grid>
        <Grid container className="barContentContainer" justify="center">
          <Grid item xs={10} align="left">
            <h3>{time}</h3>
            <Grid container className="barTitle" alignItems="center">
              <div className="barNum">{barNum}</div>
              <h1>{name}</h1>
            </Grid>
            <Grid item className="address">
              {address}
            </Grid>
            <Grid item className="barSubtitle">
              {barSubtitle}
            </Grid>
            <Grid item className="hr" />
            {/* <img
              src={checkedIn ? PostCheckin : PreCheckin}
              className="checkinButton"
              onClick={() => this.checkIn(barNum)}
            /> */}
            <Grid container className="specials" alignItems="center">
              <Grid item>
                <Grid container alignContent="center" alignItems="center" className="specialTitle">
                  <h4>Special:</h4>
                  {special}
                </Grid>
                <Grid container alignContent="center" alignItems="center" className="specialTitle2">
                  <h4>Challenge:</h4>
                  {special}
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
                    href={`https://www.google.com/maps/dir/?api=1&origin=${googleName}+Denver+CO&destination=${nextBarGoogleName}+Denver+CO&travelmode=walking`}
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
