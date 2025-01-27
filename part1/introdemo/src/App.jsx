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
      phonebook
      .create({name: newName, number: newNumber})
      .then(response => console.log(response))
    }  
    // axios
    // .post('http://localhost:3001/persons', {name: newName, number: newNumber})
    // .then(response => console.log(response))
    

    setNewName('')
    setNewNumber('')
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