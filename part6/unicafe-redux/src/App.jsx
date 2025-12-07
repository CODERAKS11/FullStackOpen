import React from 'react'
import store from './store/store'
import { useDispatch, useSelector } from 'react-redux'
import { good,bad,ok,reset } from './store/counterSlice'
const App = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
  return (
    <div>
      <button onClick={() => store.dispatch(good())}>good</button>
      <button onClick={() => store.dispatch(ok())}>ok</button>
      <button onClick={() => store.dispatch(bad())}>bad</button>
      <button onClick={() => store.dispatch(reset())}>reset</button>
      
      <div>good {state.good}</div>
      <div>ok {state.ok}</div>
      <div>bad {state.bad}</div>
    </div>
  )
}

export default App
