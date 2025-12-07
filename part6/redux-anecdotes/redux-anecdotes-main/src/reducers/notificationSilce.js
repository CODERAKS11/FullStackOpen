import { createSlice } from "@reduxjs/toolkit";
const notificationSlice = createSlice({
    name : "notification",
    initialState : "Welcome to the Anecdotes App!",
    reducers : {
        setNotification : (state, action) => action.payload
    }
})

export const {setNotification} = notificationSlice.actions
export default notificationSlice.reducer