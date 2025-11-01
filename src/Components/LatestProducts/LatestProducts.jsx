import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({ latestProductsPromise }) => {
    
    const products = use(latestProductsPromise)

    console.log(products);
    

    return (
        <div>
            <h2 className='text-5xl font-bold text-center' >Recent <span className='text-purple-700' >Products</span></h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6 
    justify-items-center "
        >
          {products.map((product) => (
              <Product key={product._id} product={product}></Product>
              
          ))}
            </div>
            
      </div>
    );
};

export default LatestProducts;

