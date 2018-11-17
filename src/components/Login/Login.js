import React, { Component } from 'react'
import logo from './logo.png'
import './Login.css'
import { connect } from 'react-redux'
import { addCurrentBar, addAllBars, storeUserId, storeUserName } from '../../actions'
import * as authorization from '../../firebase/auth'

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      city: '',
      state: '',
      emailInput: '',
      nameInput: '',
      password: ''
    }
  }

  componentDidMount() {
    const bars = ['Three Kings', 'The Pub', 'Scruffy Murphys']

    this.props.storeBars(bars)
  }

  onChangeHandler = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  emailSubmitHandler = async event => {
    event.preventDefault()
    const { emailInput, password, nameInput } = this.state

    const result = await authorization.emailPasswordSignup(emailInput, password)

    const { uid } = result.user

    this.props.storeUserId(uid)
    this.props.storeUserName(nameInput)
  }

  googleSignup = async () => {
    const result = await authorization.googleSignup()
    const { uid, email } = result.user
    console.log(uid, email)
    // this.props.loginUser(uid, email, this.state.city, this.state.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form className="emailSignup" onClick={this.emailSubmitHandler}>
            <input
              name="nameInput"
              value={this.state.nameInput}
              onChange={this.onChangeHandler}
              placeholder="tyler mcnamara"
            />
            <input
              name="emailInput"
              value={this.state.emailInput}
              onChange={this.onChangeHandler}
              placeholder="ex. tyler@kidscrawl.com"
            />
            {this.props.passwordError ? (
              <p className="passwordErrorPopup errorPopup">Wrong password, try again.</p>
            ) : null}
            <input
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
              placeholder="Enter a password"
            />
            <button onClick={this.emailSubmitHandler} className="signinButton">
              Sign In
            </button>
            <button onClick={this.googleSignup} className="googleButton">
              Google Signup
            </button>
          </form>
        </header>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: name => {
      dispatch(addCurrentBar(name))
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
  return { currentLocation: state.currentLocation }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
