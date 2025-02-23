import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };
  //const mostVotedIndex = votes.indexOf(Math.max(...votes));
  // Finding the index of the anecdote with the most votes using reduce
  const mostVotedIndex = votes.reduce(
    (maxIndex, currentVotes, index, array) =>
      currentVotes > array[maxIndex] ? index : maxIndex,
    0
  );

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={() => setSelected(getRandomIntInclusive(0, anecdotes.length - 1))}>
        Next Anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      {votes[mostVotedIndex] > 0 ? (
        <>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>Has {votes[mostVotedIndex]} votes</p>
        </>
      ) : (
        <p>No votes yet.</p>
      )}
    </div>
  );
};

export default App;
