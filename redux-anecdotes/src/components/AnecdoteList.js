import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { votingNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(a => a.content.includes(filter))
  })
  const dispatch = useDispatch()
  console.log(anecdotes)
  const addVote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(vote(anecdote.id))
    dispatch(votingNotification(anecdote.content))
    setTimeout(() => {dispatch(removeNotification())}, 5000)
  }

  return (
    <div>
    {[...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes} votes
          <button onClick={() => addVote(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList