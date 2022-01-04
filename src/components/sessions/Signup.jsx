import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';
import { useNavigate } from 'react-router-dom';
const Signup = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    fetch(baseUrl + '/users', {
      method: "POST",
      headers,
      body: JSON.stringify({ username })
    })
      .then(resp => resp.json())
      .then(data => {
        loginUser(data);
        navigate('/characters');
      })
  }

  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={ username } onChange={ (e) => setUsername( e.target.value ) } />
        </div>

        <input type="submit" value="Create Account" />
      </form>
    </div>
  )
}

export default Signup
