import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Category = ({ category }) => {
    const { name, description, img } = category;
    return (
        <div className="card bg-base-100 shadow-xl border mt-20">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <div className=''>
                    <h2 className="card-title">{name} </h2>
                    <FaArrowRight className='ml-5'></FaArrowRight>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Category;