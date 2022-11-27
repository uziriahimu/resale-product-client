import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, description, img, category_id } = category;
    return (
        <div className="card bg-base-100 shadow-xl border mt-20">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex justify-center items-center'>
                    <h2 className="card-title">{name} </h2>
                    <Link to={`/category/${category_id}`}> <button>   <FaArrowRight className='ml-5'></FaArrowRight></button></Link>
                </div>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default Category;