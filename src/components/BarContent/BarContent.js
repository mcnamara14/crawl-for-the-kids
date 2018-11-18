import React, { Component } from 'react'
import './BarContent.css'
import 'firebase/database'
import {connect} from 'react-redux'
import { storeCurrentBar } from '../../actions'

class BarContent extends Component {
  nextBarClick = () => {
    const currentBar = this.props.currentBar.barNum
    console.log(currentBar)
    this.props.storeCurrentBar(this.props.allBars[currentBar])
  }

  render() {
    const { name, barNum, barSubtitle, special, time } = this.props.currentBar

    return (
      <div className="barContentContainer">
        <h4>THE NEXT VENUE IS:</h4>
        <div className="barSubtitle">
          <div className="barNum">{barNum}</div>
          <p>{barSubtitle}</p>
        </div>
        <h1>{name}</h1>
        <h2>{time}</h2>
        <p className="goBack">Here on accident? <a href="#">Want to go back?</a></p>
        <button onClick={() => this.nextBarClick()}>Next Bar</button>
        <h4>SPECIALS:</h4>
        {special}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeCurrentBar: bar => {
      dispatch(storeCurrentBar(bar))
    },
  }
}

const mapStateToProps = state => {
  return { currentBar: state.currentBar, allBars: state.allBars}
}

export default connect(mapStateToProps, mapDispatchToProps)(BarContent)
