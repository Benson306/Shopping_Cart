import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cartReducer/cart'

export const store = configureStore({
  reducer: {
      counter: CartReducer
  }
})