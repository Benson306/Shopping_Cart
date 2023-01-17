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
        toast.success("Product Added to Cart",{
          position: "top-right"
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(item => 
        item._id !== action.payload._id 
      )
      state.cartItems = newCartItems;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Product has been removed from Cart",{
        position: "top-right"
      });
    },
    addQty: (state, action) =>{
      const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
      state.cartItems[itemIndex].cartQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    reduceQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
      if(state.cartItems[itemIndex].cartQuantity > 1){
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }

    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart Cleared",{
        position: "top-right"
      });
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce( 
        (cartTotal, cartItem)=>{
        const {price, cartQuantity} = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
        
        return cartTotal;

        }
        ,{ 
          //initial values
          total: 0,
          quantity: 0
        }
      )
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addQty, reduceQty, clearCart, getTotals } = cartSlice.actions

export default cartSlice.reducer