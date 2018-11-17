
import React from 'react'
import './Logo.css'
import Logo from './logo-header.png'


export default function App() {

    return (
      <div className="logoContainer">
        <img src={Logo} className="logo"/>
      </div>
    )
}