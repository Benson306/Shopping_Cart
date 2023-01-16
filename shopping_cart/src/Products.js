const Products = () => {
    return ( <div class='pl-6'>
        <br />
        <p class="text-3xl text-center text-orange-500 font-semibold">Products</p>
        <br />
        <div class='flex flex-wrap gap-10 justify-center'>
            <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                <img class="w-full" src={require('./images/samsung.jpg')} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Samsung s21 Ultra 5g</div>
                    <p class="text-gray-700 text-base">
                    $ 50
                    </p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Add to Cart
                    </button>
                    
                </div>
            </div>

            <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                <img class="w-full" src={require('./images/samsung.jpg')} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Samsung s21 Ultra 5g</div>
                    <p class="text-gray-700 text-base">
                    $ 50
                    </p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                <img class="w-full" src={require('./images/samsung.jpg')} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Samsung s21 Ultra 5g</div>
                    <p class="text-gray-700 text-base">
                    $ 50
                    </p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>

        <br />
        
        
    </div> );
}
 
export default Products;