import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CharacterList = ({ currentUser, loggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn])

  const handleCreateCharacterButton = () => {
    navigate('/characters/new');
  }

  return (
    <div>
      <h1>{ currentUser.username }'s Characters</h1>
      <button onClick={ handleCreateCharacterButton }>Create Character</button>
    </div>
  )
}

export default CharacterList
