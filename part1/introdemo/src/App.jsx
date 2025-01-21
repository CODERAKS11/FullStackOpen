import { Component, useState } from 'react'

import viteLogo from '/vite.svg'

import Header  from "./components/Header.jsx"
import Content from './components/Content.jsx'
import Total from './components/Total.jsx'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      

    <div>
      <h1>give feedback</h1>
      <br /><br />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br /><br />
    </div>
    <div>
      <h1>statistics</h1>
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>    
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad) / (good + neutral + bad)}</p>
      <p>positive {(good / (good + neutral + bad)) * 100} %</p>
    </div>
    
  </> 
  )
}

export default App



//The code you provided is a React component for a simple feedback application. It sets up the initial state for "good," "neutral," and "bad" feedback using the `useState` hook. However, the component does not yet include the logic to handle button clicks or display the feedback data.

