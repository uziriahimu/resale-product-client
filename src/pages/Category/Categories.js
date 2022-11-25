import React from 'react';
import Category from './Category';

const Categories = () => {


    const servicesData = [
        {
            id: 1,
            name: 'Novel',
            img: "https://images.unsplash.com/photo-1655420968703-2b0a8f20d538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5vdmVsJTIwYm9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            name: 'Science Fiction ',
            img: "https://media.istockphoto.com/id/1308595699/photo/book-of-the-universe-opened-magic-book-with-planets-and-galaxies-elements-of-this-image.jpg?b=1&s=170667a&w=0&k=20&c=0cXMJOTsESNa1R_82WcSTKgqGxk2UUw6j0lNr-NELr4="
        },
        {
            id: 3,
            name: 'Fantasy books',
            img: "https://media.istockphoto.com/id/546022488/photo/magical-mushroom-house.jpg?b=1&s=170667a&w=0&k=20&c=LEXntUCnHEng46pELd0DILgqjX3GiflC5CjL6sv5JYE="
        },
    ]

    return (
        <div className='mt-36'>
            <div className='text-center'>
                <h2 className='text-3xl text-orange-600 '><i>Product Categories</i></h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto  '>
                {
                    servicesData.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;