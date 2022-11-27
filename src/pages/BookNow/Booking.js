import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BookNow from './BookNow';

const Booking = () => {
    const { data: products = [] } = useQuery({

        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/product')
            const data = await res.json()
            return data


        }
    })

    return (
        <div className='mt-36'>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto  '>
                {
                    products.map(product => <BookNow
                        key={product.id}
                        product={product}></BookNow>)
                }
            </div>

            <div>

            </div>
        </div>
    );
};

export default Booking;