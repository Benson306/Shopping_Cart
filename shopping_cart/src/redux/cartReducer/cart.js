import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0 
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);

      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
      }else{
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct)
      }
      
    },
    removeFromCart: () => {

    },
    adjustQty: () =>{

    },
    viewItem: () => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer