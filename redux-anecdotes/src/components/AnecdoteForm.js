import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { creationNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const newAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(anecdote))
    dispatch(creationNotification(anecdote))
    setTimeout(() => {dispatch(removeNotification())}, 5000)
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