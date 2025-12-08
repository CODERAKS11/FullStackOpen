import { createContext, useContext, useReducer } from "react";
const setNotificationFunction = (state,action)=>{
    switch(action.type){
        case 'SET' : return action.payload
        case 'CLEAR' : return ""
        default : return state
    }
}
const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification,notificationDispatch ] = useReducer(setNotificationFunction,"")
    return (
        <NotificationContext.Provider value = {{notification,notificationDispatch}}>
            {props.children}
        </NotificationContext.Provider>
    )
}
export default NotificationContext
export const useNotification = () => useContext(NotificationContext)
