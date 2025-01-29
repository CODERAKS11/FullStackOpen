import { useEffect, useState } from 'react';
import country from './services/country.js';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('')
  const [filterResults, setFilterResults] = useState([])
  useEffect(() => {
    country
      .getAll()
      .then((response) => {
        
        setCountries(response); // Set the countries state with the response data
      })
      .catch((error) => {
        console.error("Error fetching countries:", error); // Handle errors
      });
  }, []); // Empty dependency array ensures this effect runs only once


  setFilterResults(countries.filter((country) => country.name.common.toLowerCase().includes(search.content.toLowerCase())))
     
  return (
    <>
      <div>
        <p>find countries</p>
        <input value={search} onChange={setSearch} />
        
        {search.length > 0 ? (
          filterResults.map((filterResult, index) => (
            <li key={index}>
              {/* Render country names, assuming 'common' is the name */}
              {filterResult?.name?.common || 'No name available'}
            </li>
          ))
        ) : (
          <p>Loading countries...</p>
        )}
        
      </div>
      <div>
      <ul>
        {countries.length > 0 ? (
          countries.map((country, index) => (
            <li key={index}>
              {/* Render country names, assuming 'common' is the name */}
              {country?.name?.common || 'No name available'}
            </li>
          ))
        ) : (
          <p>Loading countries...</p>
        )}
      </ul>
    </div>
    </>
    
  );
}

export default App;
