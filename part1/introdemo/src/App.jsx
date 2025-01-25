import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-123456' 
    },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPersons = (event) => {
    event.preventDefault()
    const found1 = persons.find((person) => person.name === newName )
    const found2 = persons.find((person) =>  person.number === newNumber)
    if(found1) {
      alert(`${newName} is already added to phonebook`)
    }
    else if(found2){
      alert(`${newNumber} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({name: newName, number: newNumber}))
      
    }  
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(e)=>{
            e.preventDefault(),
            setNewName(e.target.value)
            }} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e)=>{
            e.preventDefault(),
            setNewNumber(e.target.value)
            }} />
        </div>
        <div>
          <button type="submit" onClick={addPersons}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
      }
    </div>
  )
}

export default App