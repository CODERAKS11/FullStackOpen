import React from 'react'

const Persons = ({ persons, filterResults, filterValue }) => {
  return (
    <div>
        {
        filterValue.set ? 
          filterResults.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
         : 
        persons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)
      }
      
    </div>
  )
}

export default Persons
