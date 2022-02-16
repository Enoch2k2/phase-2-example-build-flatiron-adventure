import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl, headers } from '../../Globals';

const CharacterForm = ({ loggedIn, currentUser, addErrors, clearErrors, addCharacter }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    user_id: 0,
    name: "",
    race: "elf",
    stats: {
      str: 0,
      int: 0,
      agi: 0,
      hp: 0,
      mp: 0,
      spd: 0
    },
      klass: "warrior",
      sex: "male",
      level: 1
  })

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login');
    }
    if(loggedIn) {
      setState({
        ...state,
        user_id: currentUser.id,
        stats: checkClass("warrior")
      })
    }

    return () => {
      clearErrors()
    }

  }, [currentUser, loggedIn])

  const checkClass = (klass) => {
    switch(klass) {
      case "warrior":
        return {
          str: 25,
          int: 7,
          agi: 12,
          hp: 250,
          mp: 5,
          spd: 10
        }
      case "bard":
        return {
          str: 12,
          int: 11,
          agi: 15,
          hp: 125,
          mp: 25,
          spd: 16
        }
      case "healer":
        return {
          str: 9,
          int: 20,
          agi: 9,
          hp: 100,
          mp: 220,
          spd: 14
        }
      case "mage":
        return {
          str: 7,
          int: 25,
          agi: 10,
          hp: 75,
          mp: 250,
          spd: 12
        }
      case "thief":
        return {
          str: 10,
          int: 7,
          agi: 25,
          hp: 130,
          mp: 15,
          spd: 15
        }
      }
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(state.name) {
      fetch(baseUrl + "/characters", {
        method: "POST",
        headers,
        body: JSON.stringify(state)
      })
        .then(resp => resp.json())
        .then(data => {
          addCharacter(data);
          navigate("/characters")
        })
    } else {
      addErrors(["Name must exist"])
    }

  }

  const handleChange = e => {
    if(e.target.name === "klass") {
      setState({
        ...state,
        klass: e.target.value,
        stats: checkClass(e.target.value)
      })
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <div>
      <h1>Create Character</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={ state.name} onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="race">Select your race: </label>
          <select name="race" id="race" onChange={ handleChange }>
            <option value="elf">Elf</option>
            <option value="human">Human</option>
            <option value="orc">Orc</option>
            <option value="dwarf">Dwarf</option>
          </select>
        </div>
        <div>
          <label htmlFor="klass">Select your Class: </label>
          <select name="klass" id="klass" onChange={ handleChange }>
            <option value="warrior">Warrior</option>
            <option value="bard">Bard</option>
            <option value="healer">Healer</option>
            <option value="mage">Mage</option>
            <option value="thief">Thief</option>
          </select>
        </div>
        <div>
          <label htmlFor="sex">Select your Sex: </label>
          <select name="sex" id="sex" onChange={ handleChange }>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <input type="submit" value="Create Character" />
      </form>
    </div>
  )
}

export default CharacterForm
