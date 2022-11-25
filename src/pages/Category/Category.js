import React from 'react';

const Category = ({ category }) => {
    const { name, description, img } = category;
    return (
        <div className="card bg-base-100 shadow-xl border mt-20">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Category;