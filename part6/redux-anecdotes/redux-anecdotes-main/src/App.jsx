import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createAnecdotes, getAnecdotes, updateAnecdote } from './requests'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import NotificationBar from './components/NotificationBar'

const App = () => {
  // Redux commented code stays untouched
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(initializeAnecdotes())
  // }, [dispatch])

  const queryClient = useQueryClient()

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1
  })

  // IMPORTANT: define mutations BEFORE any conditional return
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdotes,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
    }
  })

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return <div>loading data...</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h2>Notification</h2>
      <NotificationBar />

      <h2>Anecdotes</h2>
      <Filter />

      <AnecdoteList updateAnecdoteMutation={updateAnecdoteMutation} anecdotes={anecdotes}/>
      <AnecdoteForm newAnecdoteMutation={newAnecdoteMutation} />
    </div>
  )
}

export default App
