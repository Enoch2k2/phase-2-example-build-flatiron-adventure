import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CharacterCard from './CharacterCard';

const CharacterList = ({ currentUser, loggedIn, characters, deleteCharacter }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn])

  const handleCreateCharacterButton = () => {
    navigate('/characters/new');
  }

  const characterCards = characters.map(character => <CharacterCard key={ character.id } character={ character } deleteCharacter={ deleteCharacter } />)

  return (
    <div>
      <h1>{ currentUser.username }'s Characters</h1>
      <button onClick={ handleCreateCharacterButton }>Create Character</button>
      <ul>
        { characterCards }
      </ul>
    </div>
  )
}

export default CharacterList
