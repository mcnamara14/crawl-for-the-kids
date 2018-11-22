import React, { Component } from 'react'
import './Header.css'
import 'firebase/database'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import Counter from '../Counter/Counter'

class Header extends Component {

  render() {
    return (
    <div className="headerContainer">
          <Menu right/>
          <Counter />
    </div>
    )
  }
}

export default (Header)
