import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getAnecdotes, voteAnecdote } from './requests'
import { useState } from 'react'

const App = () => {

  const [notification, setNotification] = useState('')

  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation(voteAnecdote, { onSuccess: () => queryClient.invalidateQueries('anecdotes') })


  const handleVote = (anecdote) => {
    console.log('vote')
    const newAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    updateAnecdoteMutation.mutate(newAnecdote)
    setNotification(`One more vote to: "${newAnecdote.content}".\nTotal votes: ${newAnecdote.votes}`)
    setTimeout(() => setNotification(''), 5000)
  }

  const result = useQuery(['anecdotes'], getAnecdotes, { refetchOnWindowFocus: false })
  console.log(result)

  if (result.isLoading) {
    return <div>loading data...</div>
  }

  const anecdotes = result.data

  anecdotes.sort((a, b) => b.votes - a.votes)
  console.log("sorted ancedotes:", anecdotes)

  return (
    <div>
      <h3>Anecdote app</h3>

      {!notification ? null : <Notification message={notification} />}
      <AnecdoteForm setNotification={setNotification} />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
