import React, { Component } from 'react'
import './Bar.css'
import withRouter from 'react-router-dom/withRouter'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import BarContent from '../BarContent/BarContent'

class Bar extends Component {
  render() {
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
