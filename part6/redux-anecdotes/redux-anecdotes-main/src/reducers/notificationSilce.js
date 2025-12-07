import { createSlice } from "@reduxjs/toolkit";
const notificationSlice = createSlice({
    name : "notification",
    initialState : "Welcome to the Anecdotes App!",
    reducers : {
        setNotification : (state, action) => action.payload,
        clearNotification : (state) => "Welcome to the Anecdotes App!"
    }
})
export const setNotificationFunction = (content, time) => {
    return (dispatch) => {
        dispatch(setNotification(`you voted '${content}'`))
        setTimeout(() => {
        dispatch(clearNotification())
        }, time*1000)
    }
}

export const {setNotification, clearNotification} = notificationSlice.actions
export default notificationSlice.reducer