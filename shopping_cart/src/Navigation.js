import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <ul class="flex place-content-end gap-10 py-4 pr-8">
            <li class="text-xl text-slate-50 hover:text-orange-400 text-center font-sans ">
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
               <ShoppingCartIcon />
            </li>
        </ul>
     );
}
 
export default Navigation;