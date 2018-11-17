import React, { Component } from 'react'
import './Home.css'
import withRouter from 'react-router-dom/withRouter'
import Logo from '../Logo/Logo'
import HeaderImg from './crawl17.jpg'
import BarCheck from './circularBarCheck.png'
import GetStartedIcon from './getStartedIcon.png'
import FooterBg from './footer-bg.jpg'

class Home extends Component {

  getStartedClick() {
    console.log('clicked')
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="homeContainer">
        <div className="homeHeader" style={{ backgroundImage: `url(${HeaderImg})` }}>
          <Logo />
          <img src={BarCheck} className="barCheck" />
        </div>
        <div className="title">
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

export default withRouter(Home)
