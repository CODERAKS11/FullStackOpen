import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, addAnecdote, appendAnecdotes } from '../reducers/anecdoteSlice';
import anecdoteService from "../services/anecdotes"
const AnecdoteForm = ({newAnecdoteMutation}) => {
    // const dispatch = useDispatch();
    const add = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        // const newAnecdote = await anecdoteService.createNew(content)
        // dispatch(addAnecdote(newAnecdote));
        // dispatch(appendAnecdotes(content));
        newAnecdoteMutation.mutate({content, votes : 0})
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
