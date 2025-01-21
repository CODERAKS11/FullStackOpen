import React from 'react'

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
        {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
      <h1>statistics</h1>
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>    
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad) / (good + neutral + bad)}</p>
      <p>positive {(good / (good + neutral + bad)) * 100} %</p>
      </div>)}
    </div>
  )
}

export default Statistics
