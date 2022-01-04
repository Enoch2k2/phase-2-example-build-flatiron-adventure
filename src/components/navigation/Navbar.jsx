import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Create Account</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/characters/new">Create Character</Link></li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default Navbar
