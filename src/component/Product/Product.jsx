/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Feature from '../Feature/Feature';

const Product = ({product}) => {
    return (
        <div className='bg-purple-100 rounded-md p-5 flex flex-col'>
            <h1 className='text-center text-5xl font-bold text-red-500 mb-2'>$ {product.price}<span className='text-2xl text-black'>/mon</span></h1> 
            <h3 className='text-center text-3xl font-bold text-indigo-900 mb-2'>{product.name}</h3>
            <p className='text-xl font-bold mb-2'>Features:</p>
            
            {
                
                product.features.map((feature,idx) =>  <Feature key={idx} feature={feature}></Feature>)
                
            }
            <button className='w-full bg-orange-300 py-2 rounded-md mt-auto'>
                Apply
            </button>
        </div>
    );
};

export default Product;