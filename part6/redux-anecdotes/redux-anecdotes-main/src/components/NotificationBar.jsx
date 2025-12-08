import React from "react"
import { useSelector } from "react-redux"
const NotificationBar = () => {
  // const notification = useSelector(state => state.notification)
  const notification = "Welcome to redux-anecdotes"
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }

  return <div style={style}>{notification}</div>
}

export default NotificationBar
