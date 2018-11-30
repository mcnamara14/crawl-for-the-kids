import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import ArrowIcon from '@material-ui/icons/ArrowBackIos'
import { connect } from 'react-redux'
import { storeCurrentBar } from '../../actions'
import 'firebase/database'
import Menu from '../Menu/Menu'
import './Header.css'

class Header extends Component {
  goBack = page => {
    if (page !== 'leaderboard') {
      const currentBar = this.props.currentBar.barNum
      if (this.props.allBars[currentBar - 2]) this.props.storeCurrentBar(this.props.allBars[currentBar - 2])
    } else {
      this.props.history.push('./bar')
    }
  }

  render() {
    const { page } = this.props

    return (
      <Grid container className="headerContainer" alignItems="center">
        <Menu right />
        <Grid item className="lastBar" align="center">
          <Grid container alignItems="center">
            <ArrowIcon onClick={() => this.goBack(page)} className="backArrow" />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return { currentBar: state.currentBar, allBars: state.allBars }
}

const mapDispatchToProps = dispatch => {
  return {
    storeCurrentBar: bar => {
      dispatch(storeCurrentBar(bar))
    }
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
