import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    creationNotification(state, action) {
      return `You added the anecdote "${action.payload}"`
    },
    votingNotification(state, action) {
      return `You voted the anecdote "${action.payload}"`
    },
    removeNotification(state, action) {
      return ''
    }
  }
})

export const { creationNotification, votingNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer