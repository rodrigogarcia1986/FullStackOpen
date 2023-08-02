import { vote } from '../reducers/anecdoteReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Filter from "./Filter"
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    console.log("query at anecdote component:", filter)
    console.log("state at Anecdote component:",)

    console.log(anecdotes)

    let sortedAnecdotes = [...anecdotes]

    sortedAnecdotes.sort((a, b) => b.votes - a.votes)

    console.log("SortedAnecdotes:", sortedAnecdotes)

    let filteredArray = sortedAnecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filter)
    )

    return (
        <>
            <h2>Anecdotes</h2>
            <br />
            <Filter />
            <br />
            {filteredArray.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {
                            dispatch(vote(anecdote.id))
                            dispatch(setNotification(`You voted for "${anecdote.content}"`, 3))
                        }
                        }>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList