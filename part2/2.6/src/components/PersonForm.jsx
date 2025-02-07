import { useState } from 'react'

const PersonForm = ({addPerson}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault(); 
        addPerson(newName, newNumber)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return(<form onSubmit={handleSubmit}>
        <div>
            name: <input value={newName} onChange={handleNameChange}></input>
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange}></input></div>
        <button type="submit"> add </button>
    </form>)

}
export default PersonForm