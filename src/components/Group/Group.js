import React, { Component } from 'react'
import './Group.css'
import Header from '../Header/Header'
import * as firebase from 'firebase'
import 'firebase/database'

class Group extends Component {
  constructor() {
    super()

    this.state = {
      crawlers: []
    }
  }

  componentDidMount() {
    const crawlers = []
    const firebaseRef = firebase.database().ref()
    const users = firebaseRef.child('users')

    users
      .once('value', snap => {
        snap.forEach(child => {
          crawlers.push({ name: child.val().name, currentBar: child.val().currentBar, count: child.val().count })
        })
      })
      .then(() => this.setState({ crawlers }))
  }

  render() {
    const { crawlers } = this.state
    crawlers.sort(function(a, b) {
      return b.count - a.count
    })

    return (
      <div>
        <Header />
        <div className="title">
          <h3>Crawler</h3>
          <h1>Leaderboard</h1>
        </div>
        <div className="columnsHeader">
          <p className="columnName">Name</p>
          <p className="columnBar">Bar</p>
          <p className="columnCount">Count</p>
        </div>
        <div className="groupContainer">
          {this.state.crawlers.map(crawler => {
            return (
              <div className="crawler">
                <p className="crawlerName">{crawler.name} </p>
                <p className="crawlerBar">{crawler.currentBar} </p>
                <p className="crawlerCount">{crawler.count} </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Group
