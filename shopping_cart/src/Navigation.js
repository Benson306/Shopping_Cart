import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const cart = useSelector(state => state.cart);
    const count = cart.cartItems.length;

    let clicked = false;
    const handleDropDown = () =>{
        if(clicked){

            document.querySelector('.dropDown').setAttribute("class","dropDown invisible md:invisible transition duration-700 ease-in-out bg-slate-300 ");
            clicked=false;

        }else if(!clicked){
        
            document.querySelector('.dropDown').setAttribute("class","dropDown visible md:invisible transition duration-700 ease-in-out bg-slate-300 ");

            clicked = true;
        }
    }

        const handleClick = () =>{      
                document.querySelector('.dropDown').setAttribute("class","dropDown invisible md:invisible transition duration-700 ease-in-out bg-slate-300 ");
        }

    return ( 
        <div>
        <ul class="flex py-2 pr-8 border-b-2 md:border-b-0">
            <div class="flex w-full md:basis-1/4 items-center">
                <li class="flex basis-1/2 justify-start px-5">
                    <Link to="/">
                        <img class="align-middle" src={require('./images/samsung.png')} />
                    </Link>
                    
                </li>
                <div class="flex basis-1/2 place-content-end justify-end md:collapse">
                    <MenuOutlinedIcon color='info' fontSize='large' onClick={ handleDropDown } />
                </div>
                
            </div>
            <div className="hidden md:flex basis-3/4 items-center place-content-end gap-8">
                <li class="text-xl text-slate-50 hover:text-orange-400 align-text-top font-sans ">
                    <Link to="/">Home</Link>
                </li>
                <li class="text-xl text-slate-50 hover:text-orange-400 text-center font-sans ">
                    Brands
                </li>
                <li class="text-xl text-slate-50 hover:text-orange-400 text-center font-sans ">
                    <Link to="/products">Products</Link>
                </li>
                <li class="text-xl text-slate-50 hover:text-orange-400 text-center font-sans ">
                    What's New
                </li>
                <li class="text-xl text-slate-50 hover:text-orange-400 text-center font-sans ">
                    About Us
                </li>
                <li class="text-xl text-slate-50 hover:text-orange-400 text-center font-sans ">
                    Contact
                </li>
                <li class="text-xl text-slate-50 hover:text-orange-400 text-center font-sans ">
                    <Link to="/cart"><ShoppingCartIcon /><sup class="text-black rounded-full bg-orange-300 p-1 text- font-mono font-features sups">{ count }</sup></Link>
                </li>

            </div>
        </ul>
        <div class='dropDown invisible md:invisible transition duration-700 ease-in-out bg-slate-300 '>
            <ul class='flex justify-center items-center p-2'>
                <li class='items-center border-black border-r-2 px-5'><Link to='/products' onClick={handleClick}>Products</Link></li>
                <li class='items-center border-black border-r-2 px-5' onClick={handleClick}>Contacts</li>
                <li class="px-5 text-xl text-slate-50 hover:text-orange-400 text-center font-sans " onClick={handleClick}>
                    <Link to="/cart"><ShoppingCartIcon color='primary' /><sup class="text-black rounded-full bg-orange-300 p-1 text- font-mono font-features sups">{ count }</sup></Link>
                </li>
            </ul>
        </div>
        </div>
     );
}
 
export default Navigation;