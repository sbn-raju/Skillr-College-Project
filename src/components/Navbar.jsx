import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo .png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <nav className="navbar">
        <div className="leftSection">
            <img src={logo} alt="Logo Skillr" />
        </div>
        <div className="middleSection">
            <ul className="navbarList">
                <Link style={{textDecoration:'none'}} to='home'><li className="navbarItems">Home</li></Link>
                <Link style={{textDecoration:'none'}}to='about'><li className="navbarItems">About</li></Link>
                <Link style={{textDecoration:'none'}}to='student'><li className="navbarItems">Student</li></Link>
                <Link style={{textDecoration:'none'}} to='faculty'><li className="navbarItems">Faculty</li></Link>
            </ul>
        </div>
        <div className="rightSection">
            <button className="btn">Signup</button>
            <button className="btn">Login</button>
        </div>
       </nav>
    </>
  )
}

export default Navbar