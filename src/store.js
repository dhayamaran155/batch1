import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './stores/counter'
import userReducer from './stores/user'


export const store = configureStore({
  reducer: {
      counter: counterReducer,
      user: userReducer,
  },
})