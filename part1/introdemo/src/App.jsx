import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState({
    set: false,
    content: ''
  })
  

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
  const filterResults = 
     persons.filter((person) => person.name.toLowerCase().includes(filterValue.content.toLowerCase()))
  


 

  return (
    <div>
      <div>
       <h2>Phonebook</h2>
       filter shown with <input type='text' value={filterValue.content} onChange={(e)=>{
        e.preventDefault(),
        setFilterValue(()=>{return {set: true, content: e.target.value}})
       }} />
      </div>
      <h2>add a new</h2>
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
        filterValue.set ? 
          filterResults.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
         : 
        persons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
      }
    </div>
  )
}

export default App