import React, { Component } from 'react'
import './Home.css'
import withRouter from 'react-router-dom/withRouter'
import Logo from '../Logo/Logo'
import HeaderImg from './crawl17.jpg'
import BarCheck from './circularBarCheck.png'
import GetStartedIcon from './getStartedIcon.png'
import FooterBg from './footer-bg.jpg'
import { connect } from 'react-redux'
import { addAllBars, storeCurrentBar } from '../../actions'

class Home extends Component {
  componentDidMount() {
    const bars = [
      {
        name: 'Three Kings',
        barNum: 1,
        barSubtitle: 'Drummers Drumming',
        special: '$5 Whiskey Shot & a Coors Light',
        time: '1:00PM - 1:30PM',
        googleName: 'three+kings',
        checkedIn: false
      },
      {
        name: 'The Pub',
        barNum: 2,
        barSubtitle: 'Birds a Squacking',
        special: '$3 Jamo Shot',
        time: '1:30PM - 2:00PM',
        googleName: 'coors+field',
        checkedIn: false
      }
    ]

    this.props.storeBars(bars)
    this.props.storeCurrentBar(bars[0])
  }

  getStartedClick() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="homeContainer">
        <div className="homeHeader" style={{ backgroundImage: `url(${HeaderImg})` }}>
          <Logo />
          <img src={BarCheck} className="barCheck" />
        </div>
        <div className="homeTitle">
          <h3>3rd Annual</h3>
          <h1>Crawl for the Kids</h1>
        </div>
        <button className="getStartedBtn" onClick={() => this.getStartedClick()}>
          <img src={GetStartedIcon} /> Get Started
        </button>
        <div className="homeBottom" style={{ backgroundImage: `url(${FooterBg})` }}>
          <h3>Help low-income kids have a great holiday</h3>
          <p>Celebrate a small act of kindness this holiday season by getting wasted on colfax with your friends</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeBars: bars => {
      dispatch(addAllBars(bars))
    },
    storeCurrentBar: bar => {
      dispatch(storeCurrentBar(bar))
    }
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Home))

