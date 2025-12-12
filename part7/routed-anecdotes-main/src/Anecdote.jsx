import { useParams } from "react-router-dom";

function Anecdote({ anecdotes }) {
  const { id } = useParams();   // <-- extract the id here
  const anecdote = anecdotes.find(a => a.id === Number(id));

  return (
    <div>
      <h3>{anecdote.content}</h3>
      <p>has {anecdote.votes} votes</p>
    </div>
  );
}

export default Anecdote;
