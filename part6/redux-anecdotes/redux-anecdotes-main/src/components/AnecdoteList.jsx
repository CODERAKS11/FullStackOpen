import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, addAnecdote } from '../reducers/anecdoteSlice';


const AnecdoteList = () => {
    const anecdotes = useSelector((state) =>{ 
        const filter = state.filter.toLowerCase();
        return state.anecdote
        .filter(a => a.content.toLowerCase().includes(filter))
        .sort((a, b) => b.votes - a.votes)
    }); 
    const vote = id => {
        dispatch(increaseVote(id));
    };
  const dispatch = useDispatch();
  return (
    <>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
