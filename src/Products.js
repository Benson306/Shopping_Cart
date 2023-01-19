import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartReducer/cart';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { Spinner } from 'loading-animations-react';

const Products = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    const history = useHistory();

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch('https://ecomm-api-test.onrender.com/products',{
            mode: 'no-cors',
            signal: abortCont.signal
        })
        .then((res)=>{
            console.log(res);
            return res.json();
        })
        .then((res)=>{
            setLoading(false);
            setProducts(res);
        })

        return () => abortCont.abort();
    },[])

    const handleAddToCart = (prod) =>{
        dispatch(addToCart(prod));
        history.push('/cart')
    }

    return ( <div class='pl-6 pr-6'>
        <br />
        <p class="text-3xl text-center text-orange-500 font-semibold">Products</p>
        <br />
        <div class='flex flex-wrap gap-10 justify-center'>
            <br />
        
        { loading && <Spinner color1="blue" color2="#fff" textColor="#fff" /> }
        {
            products.map((prod)=>(
                
                    <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                        <img class="object-contain h-48 w-full" src={require(`./images/${prod.preview1}`)} alt={`${prod.preview1}`} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{prod.prodName}</div>
                            <p class="text-gray-700 text-base">
                            ${prod.price}
                            </p>
                            <button onClick={()=>handleAddToCart(prod)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                Add to Cart
                            </button>
                            
                        </div>
                    </div>
            ))
        }
        

        </div>

        <br />
        
        
    </div> );
}
 
export default Products;