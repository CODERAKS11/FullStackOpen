import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
<<<<<<< HEAD
const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}    
=======
>>>>>>> 2c806fdbbb3ae211361426539636c92064fea338

export default { 
  getAll: getAll, 
  create: create, 
<<<<<<< HEAD
  update: update,
  deletePerson: deletePerson
=======
  update: update 
>>>>>>> 2c806fdbbb3ae211361426539636c92064fea338
}