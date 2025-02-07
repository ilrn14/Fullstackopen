import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, 
      name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [nextId, setNextId] = useState(2);
  
  const addName = (event) => {
    event.preventDefault()
    setPersons([...persons, { id: nextId, name: newName }]);
    setNextId(nextId + 1);
    console.log("persons", persons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input value={newName} 
                 onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit"> add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={person.id}>{person.name} </div>
        ))}
      </div>
    </div>
  )
}

export default App