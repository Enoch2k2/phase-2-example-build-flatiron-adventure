import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, logoutUser }) => {

  const logout = e => {
    e.preventDefault();

    logoutUser();
  }

  const loggedInLinks = () => {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><a href="#" onClick={ logout }>Logout</a></li>
      </ul>
    )
  }

  const loggedOutLinks = () => {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Create Account</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    )
  }

  return (
    <div>
      <h3>Flatiron Adventure</h3>
      { loggedIn ? loggedInLinks() : loggedOutLinks() }
    </div>
  )
}

export default Navbar
