import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteSlice"
import filterReducer from "./reducers/filterSlice"
import notiificationReducer from "./reducers/notificationSilce"
export const store = configureStore({
    reducer : {
        anecdote : anecdoteReducer,
        filter : filterReducer,
        notification : notiificationReducer
    }
})