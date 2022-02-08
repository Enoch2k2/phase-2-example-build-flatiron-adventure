import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ character }) => {
  return (
    <li>
      <Link to="#">{ character.name }</Link>
    </li>
  )
}

export default CharacterCard
