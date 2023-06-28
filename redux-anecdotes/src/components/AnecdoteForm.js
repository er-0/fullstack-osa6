import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const newAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(anecdote))
    dispatch(setNotification(`You added anecdote "${anecdote}"`, 5))
  }

  return (
  <div>
  <h2>create new</h2>
  <form onSubmit={newAnecdote}>
    <input name="anecdote"/>
    <button>create</button>
  </form>
  </div>
  )
}

export default AnecdoteForm