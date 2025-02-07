import { useState } from 'react'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    {  name: 'Arto Hellas',
       number: '040-1234567'
     }
  ]) 

  const addPerson = (newName, newNumber) => {
    if (persons.some(person => person.name === newName)) {
      window.alert(`The name "${newName}" is already in the list.`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber}]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson}/>

      <h3>Numbers</h3>

      <Persons persons={persons} />
    </div>
  )

  }

export default App