import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <ul class="flex py-4 pr-8">
            <div class="flex basis-1/4 items-center place-content-center">
                <li class="">
                    <Link to="/">
                        <img class="align-middle" src={require('./images/samsung.png')} />
                    </Link>
                    
                </li>
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
                    <Link to="/cart"><ShoppingCartIcon /><sup class="text-black rounded-full bg-orange-300 p-1 text- font-mono font-features sups">1</sup></Link>
                </li>

            </div>
        </ul>
     );
}
 
export default Navigation;