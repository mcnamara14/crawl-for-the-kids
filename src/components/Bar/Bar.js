import React, { Component } from 'react'
import './Bar.css'
import withRouter from 'react-router-dom/withRouter'
import * as firebase from 'firebase'
import 'firebase/database'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import BarContent from '../BarContent/BarContent'

class Bar extends Component {
  getStartedClick() {
    this.props.history.push('/login')
  }

  render() {
    // let firebaseLocation
    // const firebaseRef = firebase.database().ref()

    // firebaseLocation = firebaseRef.child('users').child(this.props.userId)

    // firebaseLocation.update({ name: this.props.userName, count: 0 })

    return (
      <div className="barContainer">
        <Header />
        <BarContent />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.userId,
  userName: state.userName
})

export default withRouter(connect(mapStateToProps)(Bar))
