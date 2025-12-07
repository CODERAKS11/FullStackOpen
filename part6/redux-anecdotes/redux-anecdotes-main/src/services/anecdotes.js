const baseURL = "http://localhost:3001/anecdotes"
const getAll = async () => {
    const response = await fetch(baseURL)
    if(!response.ok) throw new error('Failed to fetch anecdotes')
    return response.json()
}
const createNew = async (content) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, votes: 0 }),
  })
  
  if (!response.ok) {
    throw new Error('Failed to create note')
  }
  
  return await response.json()
}
const updateVote = async (id) => {
    const old = await fetch(`${baseURL}/${id}`).then(res => res.json());
    const updated = {
        ...old,
        votes: old.votes + 1
    };
    const response = await fetch(`${baseURL}/${id}`, {
        method : 'PUT',
        headers : { 'Content-Type': 'application/json' },
        body : JSON.stringify(updated)
    })
    if(!response.ok) throw new Error('Failed to update vote')
    return await response.json()
}

export default {getAll, createNew, updateVote}