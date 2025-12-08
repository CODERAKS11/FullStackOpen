import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, addAnecdote, appendAnecdotes } from '../reducers/anecdoteSlice';
import anecdoteService from "../services/anecdotes"
import NotificationContext from '../context/NotificationContext';
const AnecdoteForm = ({newAnecdoteMutation}) => {
    // const dispatch = useDispatch();
    const {notificationDispatch} = useContext(NotificationContext)
    const add = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        // const newAnecdote = await anecdoteService.createNew(content)
        // dispatch(addAnecdote(newAnecdote));
        // dispatch(appendAnecdotes(content));
        newAnecdoteMutation.mutate({content, votes : 0})
        notificationDispatch({type:"SET",payload : "anecdote '" + content + "' added"})
        setTimeout(() => {
          notificationDispatch({ type: "CLEAR" })
        }, 5000)
    };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
