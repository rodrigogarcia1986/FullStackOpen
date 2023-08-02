import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const addAnecdote = async (content) => {

    const newAnecdote = { content, votes: 0 }
    const response = await axios.post(baseURL, newAnecdote)
    return response.data
}

const vote = async (id) => {

    const foundAnecdote = await axios.get(`${baseURL}/${id}`)
    console.log("foundAnecdote by id on anecdoteService", foundAnecdote)

    const votedAnecdote = { ...foundAnecdote.data, votes: foundAnecdote.data.votes + 1 }

    const response = await axios.put(`${baseURL}/${id}`, votedAnecdote)

    return response.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll,
    addAnecdote,
    vote
}