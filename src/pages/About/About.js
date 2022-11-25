import React from 'react';


const About = () => {

    return (
        <div >
            <p className="text-4xl  text-orange-600 mt-32 text-center"><i>About Us</i></p>
            <div className="hero my-20">

                <div className="hero-content flex-col lg:flex-row ">
                    <div className='w-1/2 relative'>
                        <img src='https://images.unsplash.com/photo-1575220360526-be964710f279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="" className=" w-4/5 h-full rounded-lg shadow-2xl" />

                    </div>
                    <div className='w-1/2'>

                        <h1 className="my-5 text-5xl font-bold">
                            Books is the best <br />
                            choice for the<br />
                            learners</h1>
                        <p className="py-6">I believe in the magic of books. I believe that during certain periods in our lives we are drawn to particular books–whether it’s strolling down the aisles of a bookshop with no idea whatsoever of what it is that we want to read and suddenly finding the most perfect, most wonderfully suitable book staring us right in the face. Unblinking. Or a chance meeting with a stranger or friend who recommends a book we would never ordinarily reach for. Books have the ability to find their own way into our lives </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;