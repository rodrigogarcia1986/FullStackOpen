import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addAnecdote } from "../requests"

const AnecdoteForm = ({ setNotification }) => {

  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation(addAnecdote, {
    onSuccess: () => queryClient.invalidateQueries('anecdotes'),
    onError: (error) => {
      setNotification(`It was not possible to add the new anecdote.\nReason: ${error.message}`)
      setTimeout(() => setNotification(''), 5000)
    }
  })


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdoteMutation.mutate({ content, votes: 0 })

  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
