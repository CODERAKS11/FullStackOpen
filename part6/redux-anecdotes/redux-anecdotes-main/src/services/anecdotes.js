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
export default {getAll, createNew}