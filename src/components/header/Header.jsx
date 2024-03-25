import React from 'react'
import './header.scss'
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link className='link' to='/'><img src='./assets/logo.svg' alt="logo" /></Link>
        </div>
        <div className="header-right">
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About Us</Link>
          <Link className='link' to='/feature'>Feature</Link>
          <Link className='link' to='/feature'>FAQ</Link>
          <Link className='link' to='/blog'>Blog</Link>
          <button>Contact Us</button>
        </div>
      </div>
    </>

  )
}

export default Header