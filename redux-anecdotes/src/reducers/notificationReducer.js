import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notificate(state, action) {

            const message = action.payload

            return message
        },
        removeNotification(state, action) {
            console.log("Remove notification invoked!")

            const message = action.payload

            return message
        }

    }
})

export const { notificate, removeNotification } = notificationSlice.actions

export const setNotification = (message, time) => {
    return dispatch => {
        console.log("message and time at setNotification:", message, time)

        dispatch(notificate(message))

        setTimeout(() => {
            console.log("enteredSetTimeout")
            dispatch(removeNotification(""))
        }, time * 1000)
    }
}


export default notificationSlice.reducer