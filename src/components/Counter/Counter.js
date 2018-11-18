import React, { Component } from 'react'
import './Counter.css'
import withRouter from 'react-router-dom/withRouter'
import { connect } from 'react-redux'
import { updateCounter } from '../../actions'

class Counter extends Component {
  render() {
    return (
      <button className="counterContainer">
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
