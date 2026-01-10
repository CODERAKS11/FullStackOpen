import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    if(!name) {
      setCountry(null)
      return
    }

    const fetchCountry = async () => {
      const res = await fetch(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`);
      if(!res.ok) {
        setCountry({ found: false });
        return;
      }
      const data = await res.json();
      setCountry({ found: true, data });
    }
      fetchCountry();
  },
  [name])

  return country
}

const Country = ({ country }) => {
  if (!country) return null

  if (!country.found) {
    return <div>not found...</div>
  }

  const data = country.data
  return (
    <div>
      <h3>{data.name.common}</h3>
      <div>capital {data.capital?.[0]}</div>
      <div>population {data.population}</div>
      <img src={data.flags.png} height='100' alt={`flag of ${data.name.common}`} />  
    </div>
  )
}


const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetchData = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    console.log(country);
  }

  return (
    <div>
      <form onSubmit={fetchData}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App