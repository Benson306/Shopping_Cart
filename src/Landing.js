import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Landing = () => {
    return ( <div class="sm:block md:flex">
        <br />
        <div className="md:hidden sm:basis-2/3 pl-10 pr-4">
            <img src={require('./images/samsung.jpg')} width='90%' />
        </div>
        <br />
        <div className="text-slate-100 text-left sm:pt-15 md:pt-56 pl-16  basis-1/3">
            <p class='font-extrabold text-5xl'>Utulivu</p> 
            <p class='font-bold text-3xl'>Electronics and Accessories</p>
            <br />
            <p>
            All the best for a whole lot less.
            Absolutely. Positively. Perfect.
            </p>
            <br />
            <Link to='/products' class="bg-blue-700 hover:bg-blue-500 text-white text-lg text-center align-middle font-bold py-2 px-4 rounded-full">
                Shop Now <ArrowForwardIosIcon fontSize='small'/>
            </Link>
        </div>
        <br />
        <div className="collapse md:visible basis-2/3 pl-10 pr-4 ">
            <img src={require('./images/samsung.jpg')} width='90%' />
        </div>
    </div> );
}
 
export default Landing;