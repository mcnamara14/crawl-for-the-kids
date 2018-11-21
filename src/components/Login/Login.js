import React, { Component } from 'react'
import logo from './logo.png'
import './Login.css'
import { connect } from 'react-redux'
import { storeCurrentBar, addAllBars, storeUserId, storeUserName } from '../../actions'
import * as authorization from '../../firebase/auth'
import { withRouter } from 'react-router-dom'

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
    event.preventDefault()
    const { nameInput, password } = this.state
    const email = nameInput + '@gmail.com'

    const result = await authorization.emailPasswordSignup(email, password)
    const { uid } = result.user

    this.setState({ userId: uid })
    this.storeUserRedirect()
  }

  // googleSignup = async event => {
  //   event.preventDefault()
  //   console.log('google')
  //   if (this.nameError() === null) {
  //     const result = await authorization.googleSignup()
  //     const { uid } = result.user
  //     this.setState({ userId: uid })
  //   }
  //   this.storeUserRedirect()
  // }

  storeUserRedirect = () => {
    const { userId, nameInput } = this.state

    this.props.storeUserId(userId)
    this.props.storeUserName(nameInput)
    this.props.history.push('/bar')
  }

  nameError = () => {
    return !this.state.nameInput ? alert('You must enter a name') : null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form className="emailSignup" onSubmit={this.emailSubmitHandler}>
            <input name="nameInput" value={this.state.nameInput} onChange={this.onChangeHandler} placeholder="Name" />
            {this.props.passwordError ? (
              <p className="passwordErrorPopup errorPopup">Wrong password, try again.</p>
            ) : null}
            <input name="password" value={this.state.password} onChange={this.onChangeHandler} placeholder="Password" />
            <button className="signinButton">Sign In</button>
          </form>
          {/* <form onSubmit={this.googleSignup}>
            <button className="googleButton">
              Google Signup
            </button>
          </form> */}
        </header>
      </div>
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
