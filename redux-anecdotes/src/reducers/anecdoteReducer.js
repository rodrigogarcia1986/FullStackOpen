import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
import { setNotification } from './notificationReducer'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    // createAnecdote(state = initialState, action) {
    //   state.push(action.payload)
    //   // for now backend returns an object with content, id and votes
    //   //   {
    //   //   content: action.payload,
    //   //   id: getId(),
    //   //   votes: 0
    //   // })
    // },
    // vote(state = initialState, action) {
    //   console.log("action received at reducer:", action)
    //   const id = action.payload
    //   console.log("trying to find id:", id)
    //   const anecdoteToVote = state.find(anecdote => anecdote.id === id)
    //   const votedAnecdote = {
    //     ...anecdoteToVote,
    //     votes: anecdoteToVote.votes + 1
    //   }
    //   return state.map(anecdote => anecdote.id === id ? votedAnecdote : anecdote)
    // },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      return state.concat(action.payload)
    },
    setVote(state, action) {
      return state.map(anecdote => anecdote.id !== action.payload.id ? anecdote : action.payload)
    }

  }
})


export const { setVote, addAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
    dispatch(setNotification("Welcome to anecdotes website!", 5))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    console.log("content received at createAnecdote:", content)
    const newAnecdote = await anecdoteService.addAnecdote(content)
    console.log("response received from server after adding new anecdote:", newAnecdote)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const vote = id => {
  return async dispatch => {
    console.log("id received at vote function in anecdote reducer:", id)
    const votedAnecdote = await anecdoteService.vote(id)
    console.log("votedAnecdote returned from server:", votedAnecdote)
    dispatch(setVote(votedAnecdote))
  }

}



export default anecdoteSlice.reducer