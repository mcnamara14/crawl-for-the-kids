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
      password: ''
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
    const email = nameInput + '@gmail.com'

    const result = await authorization.emailPasswordSignup(email, password)
    const { uid } = result.user 

    this.setState({ userId: uid })
    this.storeUserRedirect(uid)
  }
  storeUserRedirect = (uid) => {
    const { userId, nameInput } = this.state
    const objectToStore = { userId: uid, name: nameInput };
    const stringifiedObject = JSON.stringify(objectToStore);
    localStorage.setItem('user', stringifiedObject);

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
            {this.props.passwordError ? (
              <p className="passwordErrorPopup errorPopup">Wrong password, try again.</p>
            ) : null}
            <input name="password" value={this.state.password} onChange={this.onChangeHandler} placeholder="Password" />
            <Button variant="contained" color="primary" className="signinButton" onClick={() => this.emailSubmitHandler()}>Sign In</Button>
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
    }
  }
}

const mapStateToProps = state => {
  return { currentBar: state.currentBar }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
