import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo.png"
import '../styles/NavBar.css';


const NavBar = () => {
  return (
    <div className='navbar'>
            <ul className="navbar-links">
                <img className='navImage' src={Logo} alt="test"></img>
                <Link className="navbar-links-item" to="/">View Properties</Link>
                <Link className="navbar-links-item" to="/AddProperty">Add a Property</Link>
            </ul>
    </div>  
  )
}

export default NavBar;