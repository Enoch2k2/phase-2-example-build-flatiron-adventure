import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterForm from './components/characters/CharacterForm';
import CharacterList from './components/characters/CharacterList';
import Navbar from './components/navigation/Navbar';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import Errors from './components/static/Errors';
import Home from './components/static/Home';
import { baseUrl } from './Globals';


const App = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
    localStorage.setItem('user_id', user.id);
  }

  const logoutUser = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('user_id');
  }

  const addErrors = errors => {
    setErrors(errors);
  }

  const clearErrors = () => {
    setErrors([]);
  }

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if(userId && !loggedIn) {
      fetch(baseUrl + '/users/' + userId)
        .then(resp => resp.json())
        .then(data => loginUser(data))
    }
  }, [loggedIn])


  return (
    <Router>
      <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } />
      <Errors errors={ errors } />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup loggedIn={ loggedIn } loginUser={ loginUser } addErrors={ addErrors } clearErrors={ clearErrors } />} />
        <Route path="/login" element={<Login loggedIn={ loggedIn } loginUser={ loginUser } addErrors={ addErrors } clearErrors={ clearErrors } />} />
        <Route path="/characters" element={<CharacterList loggedIn={ loggedIn } currentUser={ currentUser } />} />
        <Route path="/characters/new" element={<CharacterForm loggedIn={ loggedIn } currentUser={ currentUser } />} />
      </Routes>
    </Router>
  );
}

export default App;
