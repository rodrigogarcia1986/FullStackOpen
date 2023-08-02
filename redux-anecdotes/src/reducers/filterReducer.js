import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterState(state, action) {

            const filter = action.payload
            console.log("query at filter reducer:", filter)
            return filter
        }
    }
})

export const { filterState } = filterSlice.actions
export default filterSlice.reducer


