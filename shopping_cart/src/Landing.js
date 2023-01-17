import { Link } from 'react-router-dom';

const Landing = () => {
    return ( <div class="sm:block md:flex">
        <br />
        <div className="md:hidden sm:basis-2/3 pl-10 pr-4">
            <img src={require('./images/samsung.jpg')} width='90%' />
        </div>
        <br />
        <div className="text-slate-100 text-left sm:pt-15 md:pt-56 pl-16  basis-1/3">
            <p class='font-extrabold text-5xl'>Samsung</p> 
            <p class='font-bold text-3xl'>For Today and Tommorrow</p>
            <br />
            <p>Get a front row seat to the latest innovation by Samsung.</p>
            <br />
            <Link to='/products' class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                Buy now
            </Link>
        </div>
        <br />
        <div className="collapse md:visible basis-2/3 pl-10 pr-4 ">
            <img src={require('./images/samsung.jpg')} width='90%' />
        </div>
    </div> );
}
 
export default Landing;