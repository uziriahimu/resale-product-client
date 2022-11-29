import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/category')
            const data = await res.json()
            return data

        }
    })

    return (
        <div className='mt-36'>
            <div className='text-center'>
                <h2 className='text-3xl text-orange-600 '><i>Product Categories</i></h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto  '>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;