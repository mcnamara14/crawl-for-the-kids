import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
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
        <Grid container className="groupTitle" justify="center">
          <Grid item xs={10}>
            <h3>Crawler</h3>
            <h1>Leaderboard</h1>

            <div className="columnsHeader">
              <p className="columnName">Name</p>
              <p className="columnBar">Bar</p>
              <p className="columnCount">Challenges</p>
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
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Group
