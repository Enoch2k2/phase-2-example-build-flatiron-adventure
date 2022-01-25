import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Globals';

const Login = ({ loggedIn, loginUser, addErrors, clearErrors }) => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleChange = e => {
    setUsername(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if(user) {
      loginUser(user);
      navigate("/characters")
    } else {
      addErrors(["Username did not match anything in the database"])
    }
  }

  useEffect(() => {
    if(loggedIn) {
      return navigate('/characters')
    }
    fetch(baseUrl + "/users")
      .then(resp => resp.json())
      .then(data => setUsers(data))

    return () => {
      clearErrors();
    }
  }, [loggedIn])

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" onChange={ handleChange } value={ username } />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
