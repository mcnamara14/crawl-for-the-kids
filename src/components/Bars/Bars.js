import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './Bars.css'
import Grid from '@material-ui/core/Grid'
import withRouter from 'react-router-dom/withRouter'
import { connect } from 'react-redux'
import { storeCurrentBar } from '../../actions'
import Header from '../Header/Header'

class Bars extends Component {
  changeToNextBar = (barNum) => {
    this.props.storeCurrentBar(this.props.allBars[barNum - 1])
    this.props.history.push('/bar')
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Grid container justify="center">
          <Grid item xs={11}>
            <div className="barsTitles">
              <h1>Bars</h1>
            </div>
            <div className="barsContainer">
              {this.props.allBars.map(bar => {
                return (
                  <Grid container className="bar" justify="space-between">
                    <Grid item xs={12}>
                      <Grid container className="barTitle" alignItems="center">
                        <div className="barNum">{bar.numTitle}</div>
                        <h1>{bar.name}</h1>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="barTime">{bar.time}</div>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12}>
                        <p className="barAddress">{bar.address}</p>
                        <p className="barSpecial">
                          <p><b>Special:</b> {bar.special}</p>
                        </p>
                        <p className="barSpecial">
                          <p><b>Challenge:</b> {bar.challenge}</p>
                        </p>
                        <Button
                          align="center"
                          variant="outlined"
                          color="secondary"
                          onClick={() => this.changeToNextBar(bar.barNum)}>
                          Go to bar  ›
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item className="hr" />
                  </Grid>
                )
              })}
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeCurrentBar: bar => {
      dispatch(storeCurrentBar(bar))
    }
  }
}

const mapStateToProps = state => {
  return { allBars: state.allBars, currentBar: state.currentBar }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bars)
)
