import { Component, useState } from 'react'

// import viteLogo from '/vite.svg'

// import Header  from "./components/Header.jsx"
// import Content from './components/Content.jsx'
// import Total from './components/Total.jsx'
// import Statistics from './components/Statistics.jsx'
// import Button from './components/Button.jsx'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0})
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function findIndexOfLargest(votesArray) {
    let largest = votesArray[0];
    let indexOfLargest = 0;
    
    votesArray.forEach((value, index) => {
      if (value > largest) {
        largest = value;
        indexOfLargest = index;
      }
    });
    
    return indexOfLargest;
  }
  
  // Assuming you have anecdotes array and votes object
  const votesArray = Object.values(votes);
  const indexOfMostVotes = findIndexOfLargest(votesArray);
  
  // To display the anecdote with most votes:



  return (
    <div>
    <h1>Anecdote of the day</h1>
    {anecdotes[selected]} <br />
    <button onClick={() => setVotes({...votes, [selected]: votes[selected] + 1})} >vote</button>
    <button onClick={() => setSelected(getRandomIntInclusive(0,anecdotes.length))}>next anecdote</button><br />
    <br />
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[indexOfMostVotes]}</p>
    <p>has {votesArray[indexOfMostVotes]} votes</p>
  </div>
  )
}

export default App




