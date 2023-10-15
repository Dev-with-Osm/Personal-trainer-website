import React from 'react'
import './Header.css'
import logo from '../../assets/images/primary-logo.png'

const NavBar = () => {
  return (
    <header>
        <div className="logo">
            <a href="#"><img src={logo} alt="Website Logo" /></a>
        </div>
        <div className="navbar">
            <ul className='navlink'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
                <li>
                    <a href="/transformations">Transformations</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
            </ul>
            <div class="button">
                <a> Hover me</a>
            </div>
        </div>
    </header>
  )
}

export default NavBar