import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        console.log('add anecdote', event.target.anecdote.value)
        dispatch(createAnecdote(event.target.anecdote.value))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input type="text" name="anecdote" /></div>
                <button type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm