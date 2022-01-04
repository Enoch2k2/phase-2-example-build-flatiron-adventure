import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharacterForm from './components/characters/CharacterForm';
import CharacterList from './components/characters/CharacterList';
import Navbar from './components/navigation/Navbar';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import Home from './components/static/Home';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/new" element={<CharacterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
