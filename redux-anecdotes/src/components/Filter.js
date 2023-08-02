import { useDispatch } from 'react-redux'
import { filterState } from '../reducers/filterReducer'


const Filter = () => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        // input-field value is in variable event.target.value
        event.preventDefault()
        console.log(event.target.value)
        dispatch(filterState(event.target.value))
        console.log("Value dispatched:", event.target.value)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Filter