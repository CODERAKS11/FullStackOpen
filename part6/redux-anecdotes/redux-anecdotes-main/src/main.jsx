import ReactDOM from 'react-dom/client'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import reducer from './reducers/anecdoteSlice'

// const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
