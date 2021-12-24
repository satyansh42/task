import React from 'react'
import Button from './Button'
import './Nav.css'
// import img from './logo.jpg'
const Nav = () => {
    return (
        <div className="Nav">
            <header>
      <div className="navbar">
        <div className="title">
          <div className="logo"><img src='./logo.png' alt="logo" /></div>
          <div className="name"><a href="./index.html">Insignia</a></div>
        </div>
        <div className="navlinks">
          <ul className="links">
            <li><a href="index.html">About</a></li>
            <li> <a href="index.html">Help</a> </li>
            <li><a href="index.html">Features</a></li>
            <li><a href="index.html">Signup</a></li>
            <li className='bb'><a href="index.html"><Button colr='#9C69E2' text='Request Demo ->'  /></a></li>
          </ul>
        </div>
      </div>
    </header>
      
        </div>
    )
}

export default Nav
