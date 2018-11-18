import React, { Component } from 'react'
import './Counter.css'
import withRouter from 'react-router-dom/withRouter'
import { connect } from 'react-redux'
import { updateCounter } from '../../actions'
import * as authorization from '../../firebase/auth'
import * as firebase from 'firebase'

class Counter extends Component {
  addToCounter = async () => {
    await this.props.updateCounter()
    this.addCountToFirebase()
  }

  addCountToFirebase = () => {
    let firebaseLocation
    const firebaseRef = firebase.database().ref()

    firebaseLocation = firebaseRef.child('users').child(this.props.userId)

    firebaseLocation.update({ count: this.props.counter })
  }

  render() {
    return (
      <button className="counterContainer" onClick={() => this.addToCounter()}>
        {this.props.counter}
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCounter: () => {
      dispatch(updateCounter())
    }
  }
}

const mapStateToProps = state => {
  return { counter: state.counter, userId: state.userId }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter)
)
