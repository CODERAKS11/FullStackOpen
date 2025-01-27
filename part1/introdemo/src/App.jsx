import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState({
    set: false,
    content: ''
  })
  useEffect(() => {
    // const response = axios.get('http://localhost:3001/persons')
    phonebook
    .getAll()
    .then((persons) => {
      setPersons(persons)
    })
  },[])



  const addPersons = (event) => {
    event.preventDefault()
    const existingPerson = persons.find((person) => person.name === newName)
  
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        phonebook
          .update(existingPerson.id, { name: newName, number: newNumber })
          .then(response => {
            setPersons(persons.map(person => 
              person.id !== existingPerson.id ? person : { ...response }
            ))
          })
          .catch(error => {
            console.error('Error updating person:', error)
            alert(`Failed to update ${newName}'s number`)
          })
      }
    } else {
      phonebook
        .create({ name: newName, number: newNumber })
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.error('Error creating person:', error)
          alert(`Failed to add ${newName}`)
        })
    }
  }
  const filterResults = 
     persons.filter((person) => person.name.toLowerCase().includes(filterValue.content.toLowerCase()))
  


 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      {/* <div>
       filter shown with <input type='text' value={filterValue.content} onChange={(e)=>{
        e.preventDefault(),
        setFilterValue(()=>{return {set: true, content: e.target.value}})
       }} />
      </div> */}
      <h3>add a new</h3>
      <PersonForm  newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} addPersons={addPersons} />
      {/* <form>
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
      </form> */}
      <h2>Numbers</h2>
      <Persons setPersons={setPersons} filterValue={filterValue} filterResults={filterResults} persons={persons} />
      {/* {
        filterValue.set ? 
          filterResults.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
         : 
        persons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
      } */}
    </div>
  )
}

export default App