import React from 'react'
import './Header.css'
import logo from '../../assets/images/primary-logo.png'

const NavBar = () => {
  return (
    <header>
        <div className="logo">
            <a href="#"><img src={logo} alt="Class fit Kamal  Logo" /></a>
        </div>
        <div className="navbar">
            <ul className='navlink'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/features">Features</a>
                </li>
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
                <li>
                    <a href="/transformations">Transformations</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </div>
        <div class="button">
            <a href="" className='conatct-btn'><button>Contact Us</button></a>
        </div>
    </header>
  )
}

export default NavBar