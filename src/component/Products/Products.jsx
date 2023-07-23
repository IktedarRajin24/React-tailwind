/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid md:grid-flow-col gap-20  mt-5 mx-auto w-9/12'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;