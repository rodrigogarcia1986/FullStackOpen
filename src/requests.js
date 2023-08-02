import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => axios.get(baseURL).then(res => res.data)

export const addAnecdote = newAnecdote => axios.post(baseURL, newAnecdote).then(res => res.data)

export const voteAnecdote = anecdote => axios.put(`${baseURL}/${anecdote.id}`, anecdote).then(res => res.data)

