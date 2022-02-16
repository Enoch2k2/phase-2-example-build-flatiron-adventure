import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl, headers } from '../../Globals';

const CharacterCard = ({ character, deleteCharacter }) => {
  const handleDelete = () => {
    // fetch request to backend in order to delete the character
    // what request are we making? DELETE

    fetch(baseUrl + '/characters/' + character.id, {
      method: "DELETE",
      headers
    })
      .then(resp => resp.json())
      .then(data => deleteCharacter(character))
  }

  return (
    <li>
      <Link to="#">
        { character.name } - Lv. { character.level } { character.race } { character.klass }
      </Link>
      <button onClick={ handleDelete }>Delete</button>
    </li>
  )
}

export default CharacterCard


/*
  handle delete should:
  * delete from the db.json
  * delete from the DOM
  * remove from characters state
  * 
  handle delete process:
    fetch to db.json
    where should our handleDelete live?
*/