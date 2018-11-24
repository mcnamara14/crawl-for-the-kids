import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import './Home.css'
import withRouter from 'react-router-dom/withRouter'
import Logo from './crawl-logo.png'

class Home extends Component {
  getStartedClick() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <Grid container className="homeContainer" justify="center">
        <Grid item xs={8}>
          <img src={Logo} className="homeLogo" />
          <Grid container className="homeButtonContainer">
            <Button align="center" variant="outlined" color="secondary" onClick={() => this.getStartedClick()}>
              Sign Up
            </Button>
            <Button align="center" variant="outlined" color="secondary" onClick={() => this.getStartedClick()}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(Home)
