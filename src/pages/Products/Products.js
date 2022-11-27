import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import BookNow from '../BookNow/BookNow';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
    console.log(products);





    // const { data: products = [] } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/product')
    //         const data = await res.json()
    //         return data

    //     }
    // })

    return (
        <div className='mt-36'>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto  '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }


            </div>



        </div>
    );
};

export default Products;