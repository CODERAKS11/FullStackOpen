import { useSelector, useDispatch } from 'react-redux'
import { setAnecdote, increaseVote, addAnecdote } from './reducers/anecdoteSlice';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import NotificationBar from './components/NotificationBar';
import { useEffect } from 'react';

import anecdoteService from './services/anecdotes'
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService.getAll().then((data) => dispatch(setAnecdote(data)))
  },[dispatch])
  return (
    <div>
      <h2>Notification</h2>
      <NotificationBar />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
