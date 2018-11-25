import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Menu.css'
import { withRouter } from 'react-router-dom'

class MobileMenu extends Component {
  updatePage = route => {
    this.props.history.push(route)
  }

  render() {
    return (
      <Menu>
        <a id="about" className="menu-item" onClick={() => this.updatePage('/group')}>
          Group ›
        </a>
        <a id="contact" className="menu-item" onClick={() => this.updatePage('/bar')}>
          Current Bar ›
        </a>
        <a id="bars" className="menu-item" onClick={() => this.updatePage('/bars')}>
          Bars ›
        </a>
      </Menu>
    )
  }
}

export default withRouter(MobileMenu)
