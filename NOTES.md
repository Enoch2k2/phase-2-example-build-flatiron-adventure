# Overview
You will have a user that can signup / login. A user can have up to 10 characters. A character can be mage, warrior, or theif. A character can have many races, such as elf, dwarf, human. Once the character is created, you can then take a random adventure.


### MVP
- Signup / Login
- Creating a Character
- Listing characters


### STRETCH GOALS
- random adventures
- monster creator



### Requirements

* You must have 5 components:
  1. Home
  2. Navbar
  3. Signup
  4. Login
  5. CharacterList
  6. CharacterForm
  7. CharacterCard

* You must have 3 client side routes:
  1. / - Home Component
  2. /signup - Signup
  3. /login - Login
  4. /characters/new - CharacterForm
  5. /characters - CharacterList


### Data

{
  "users": [
    {
      "id": 1,
      "username": "Bob"
    }
  ],
  "characters": [
    {
      "id": 1,
      "user_id": 1,
      "name": "BobMaximus"
    }
  ]
}