import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addQty, reduceQty, clearCart } from "./redux/cartReducer/cart";

const Cart = () => {

    const cart = useSelector(state => state.cart);

    const count = cart.cartItems.length;

    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item))
    }

    const handleAddQty = (item) => {
        dispatch(addQty(item))
    }

    const handleReduceQty = (item) => {
        dispatch(reduceQty(item))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        
  <div class="container mx-auto mt-5">

    <div class="md:flex shadow-md my-3 ">
      <div class="px-2 py-5 w-full md:w-3/4 bg-white md:px-10 md:py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{ count } Item(s)</h2>
        </div>
        <div class="flex mt-5 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibod text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {
            cart.cartItems.length === 0 ?
             <div class="text-red-600">Cart is Empty</div> 
             : 
             cart.cartItems?.map((item)=>(
                <div class="flex items-center hover:bg-gray-100 ml-0 px-5 py-5">
                <div class="flex w-2/5"> 
                  <div class="w-30">
                    <img class="object-contain h-20" src={require(`./images/${item.preview1}`)} alt="" />
                  </div>
                  <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{item.prodName}</span>
                    <span class="text-red-500 text-xs">{item.categ}</span>
                    <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => handleRemoveFromCart(item)}>Remove</a>
                  </div>
                </div>
                <div class="flex justify-center ml-2 w-1/5">
  
                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={()=> handleReduceQty(item)}>
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                    
                    <div class="mx-1 border text-center w-12">{item.cartQuantity}</div>
                        
                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => handleAddQty(item)}>
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>

                </div>
                <span class="text-center w-1/5 font-semibold text-sm">${item.price}</span>
                <span class="text-center w-1/5 font-semibold text-sm">${item.price*item.cartQuantity}</span>
              </div>
             ))
        }


        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          <Link to="/products">Continue Shopping</Link>
            
        </a>
        <br />
        {
            cart.cartItems.length !== 0 ? <button onClick={() => handleClearCart()} class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Clear Cart
            </button> : <div></div>
        }
      </div>

      <div id="summary" class="w-full md:w-1/4 bg-slate-300 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">{count} Items</span>
          <span class="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>

        <br />
    </div>);
}
 
export default Cart;