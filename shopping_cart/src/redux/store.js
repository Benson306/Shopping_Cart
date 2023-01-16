import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './cart'

export const store = configureStore({
  reducer: {
      counter: CounterReducer
  },
})