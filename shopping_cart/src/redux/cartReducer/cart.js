import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
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
        toast.info("Product is already in Cart. Its Quantity Has been Increased.",{
          position: "top-right"
        })
      }else{
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
        toast.success("Added Product to Cart",{
          position: "top-right"
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      
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