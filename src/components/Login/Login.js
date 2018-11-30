import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from '../Home/crawl-logo.png'
import Button from '@material-ui/core/Button'
import './Login.css'
import { connect } from 'react-redux'
import { storeCurrentBar, addAllBars, storeUserId, storeUserName } from '../../actions'
import * as authorization from '../../firebase/auth'
import { withRouter } from 'react-router-dom'
import * as firebase from 'firebase'
import 'firebase/database'

class Login extends Component {
  constructor(props) {
    super()

    this.state = {
      emailInput: '',
      nameInput: '',
      userId: '',
      password: '',
      passwordError: false,
      weakPassword: false
    }
  }

  onChangeHandler = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  emailSubmitHandler = async event => {
    const { nameInput, password } = this.state
    const nameConcat = nameInput.replace(/\s/g, '')
    const email = nameConcat + '@gmail.com'

    try {
      const result = await authorization.emailPasswordSignup(email, password)
      const { uid } = result.user

      this.setState({ userId: uid })
      this.storeUserRedirect(uid)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        try {
          const result = await authorization.emailPasswordSignin(email, password)

          const { uid } = result.user

          this.setState({ userId: uid })
          this.storeUserRedirect(uid)
        } catch (error) {
          this.setState({ passwordError: true })
          setTimeout(() => this.setState({ passwordError: false }), 3000)
        }
      } else if (error.code === 'auth/weak-password') {
        this.setState({ weakPassword: true })
        setTimeout(() => this.setState({ weakPassword: false }), 3000)
      }
    }

    this.props.storeCurrentBar(this.props.allBars[0])
  }

  storeUserRedirect = uid => {
    const { userId, nameInput } = this.state
    const objectToStore = { userId: uid, name: nameInput }
    const stringifiedObject = JSON.stringify(objectToStore)
    localStorage.setItem('user', stringifiedObject)

    let firebaseLocation
    const firebaseRef = firebase.database().ref()

    firebaseLocation = firebaseRef.child('users').child(userId)
    firebaseLocation.update({ name: nameInput })

    this.props.storeUserId(userId)
    this.props.storeUserName(nameInput)
    this.props.history.push('/bar')
  }

  nameError = () => {
    return !this.state.nameInput ? alert('You must enter a name') : null
  }

  render() {
    return (
      <Grid container className="homeContainer" justify="center">
        <Grid item xs={8}>
          <img src={Logo} className="homeLogo" />
          <Grid container className="homeButtonContainer">
            <form className="emailSignup" onSubmit={this.emailSubmitHandler}>
              <input name="nameInput" value={this.state.nameInput} onChange={this.onChangeHandler} placeholder="Name" />
              {this.state.passwordError ? <p className="errorPopup"><b>Wrong password, try again.</b></p> : null}
              {this.state.weakPassword ? <p className="errorPopup"><b>Weak password.<br /> Enter a longer password.</b></p> : null}
              <input
                name="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
                placeholder="Password"
              />
              <Button
                variant="contained"
                color="primary"
                className="signinButton"
                onClick={() => this.emailSubmitHandler()}>
                Sign In
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: name => {
      dispatch(storeCurrentBar(name))
    },
    storeBars: bars => {
      dispatch(addAllBars(bars))
    },
    storeUserId: userId => {
      dispatch(storeUserId(userId))
    },
    storeUserName: userName => {
      dispatch(storeUserName(userName))
    },
    storeCurrentBar: bar => {
      dispatch(storeCurrentBar(bar))
    }
  }
}

const mapStateToProps = state => {
  return { currentBar: state.currentBar, allBars: state.allBars }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
