import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPersons = (event) => {
    event.preventDefault()
    const found = persons.find((person) => person.name === newName)
    if(found) {
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat({name: newName}))
      
    }  
    setNewName('')
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
          <button type="submit" onClick={addPersons}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person, index) => <p key={index}>{person.name}</p>)
      }
    </div>
  )
}

export default App