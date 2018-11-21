import React, { Component } from 'react'
import './BarContent.css'
import 'firebase/database'
import { connect } from 'react-redux'
import { storeCurrentBar } from '../../actions'
import { withRouter } from 'react-router-dom'
import PreCheckin from './pre-checkin.png'
import PostCheckin from './post-checkin.png'
import * as firebase from 'firebase'
import { updateCounter, checkIn } from '../../actions'
import NavIcon from './nav-icon.png'

class BarContent extends Component {
  changeToNextBar = () => {
    const currentBar = this.props.currentBar.barNum
    this.props.storeCurrentBar(this.props.allBars[currentBar])
  }

  goBack = () => {
    const currentBar = this.props.currentBar.barNum
    this.props.storeCurrentBar(this.props.allBars[currentBar - 2])
  }

  checkIn = async (barNum) => {
    if (!this.props.currentBar.checkedIn) {
      await this.props.updateCounter()
      this.addCountToFirebase()
      this.props.checkIn(barNum)
    }
  }

  addCountToFirebase = () => {
    let firebaseLocation
    const firebaseRef = firebase.database().ref()

    firebaseLocation = firebaseRef.child('users').child(this.props.userId)

    firebaseLocation.update({ count: this.props.counter, currentBar: this.props.currentBar.name })
  }

  render() {
    let nextBarGoogleName
    let nextStop
    let finalBar
    const { name, barNum, barSubtitle, special, time, googleName, checkedIn } = this.props.currentBar

    finalBar = this.props.allBars.length === barNum

    if (!finalBar) {
      nextBarGoogleName = this.props.allBars[barNum].googleName
      nextStop = this.props.allBars[barNum].name
    } else {
      nextBarGoogleName = this.props.allBars[barNum - 1].googleName
    }

    return (
      <div className="barContentContainer">
        <h4>{finalBar ? 'YOU MADE IT!' : 'CURRENT STOP:'}</h4>
        <h1>{name}</h1>
        <div className="barSubtitle">
          <div className="barNum">{barNum}</div>
          <p>{barSubtitle}</p>
        </div>
        <h2>{time}</h2>
        <p className="goBack">
          Here on accident?{' '}
          <a href="#" onClick={() => this.goBack()}>
            Want to go back?
          </a>
        </p>
        <img src={checkedIn ? PostCheckin : PreCheckin} className="checkinButton" onClick={() => this.checkIn(barNum)} />
        <h4 className="specials">SPECIALS:</h4>
        <p>{special}</p>
        {!finalBar ? (
          <div>
            <h4 className="nextStop">
              NEXT STOP: <span>{nextStop}</span>
            </h4>
            <div class="nextBarButtons">
              <button onClick={() => this.changeToNextBar()}>HEAD THERE</button>
              <a
                className="directionsButton"
                href={`https://www.google.com/maps/dir/?api=1&origin=${googleName}+Denver+CO&destination=${nextBarGoogleName}+Denver+CO&travelmode=walking`}
                target="_blank">
                <img src={NavIcon} className="navigationIcon" />DIRECTIONS
              </a>
            </div>
          </div>
        ) : null}
      </div>
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