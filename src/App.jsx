import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterForm from './components/characters/CharacterForm';
import CharacterList from './components/characters/CharacterList';
import Navbar from './components/navigation/Navbar';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import Home from './components/static/Home';
import { baseUrl } from './Globals';


const App = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

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

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if(userId && !loggedIn) {
      fetch(baseUrl + '/users/' + userId)
        .then(resp => resp.json())
        .then(data => loginUser(data))
    }
  }, [])

  return (
    <Router>
      <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup loginUser={ loginUser } />} />
        <Route path="/login" element={<Login />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/new" element={<CharacterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
