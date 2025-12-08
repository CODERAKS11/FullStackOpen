import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, addAnecdote, votesUpdater } from '../reducers/anecdoteSlice';
import { setNotification, clearNotification, setNotificationFunction } from '../reducers/notificationSilce';

const AnecdoteList = ({updateAnecdoteMutation, anecdotes}) => {
    // const dispatch = useDispatch();
    // const anecdotes = useSelector((state) =>{ 
    //     const filter = state.filter.toLowerCase();
    //     return state.anecdote
    //     .filter(a => a.content.toLowerCase().includes(filter))
    //     .sort((a, b) => b.votes - a.votes)
    // }); 
    const vote = anecdote => {
        // dispatch(votesUpdater(anecdote.id))
        // dispatch(setNotificationFunction(anecdote.content, 10))
        updateAnecdoteMutation.mutate({...anecdote, votes : anecdote.votes + 1})
        
    };
  
  return (
    <>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
