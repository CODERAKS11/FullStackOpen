import ReactDOM from 'react-dom/client'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import reducer from './reducers/anecdoteSlice'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
// const store = createStore(reducer)
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  // <QueryClientProvider client= {queryClient} store={store}>
  <QueryClientProvider client= {queryClient}>
    <App />
  </QueryClientProvider>
)
