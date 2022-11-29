import React from 'react';
import './Bannar.css'

const Bannar = () => {
    return (
        <div>
            <div className="hero min-h-screen  " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1543248939-4296e1fea89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Book Lovers </h1>
                        <p className="mb-5">Reading reduces stress. Reading about something you enjoy or losing yourself in a good novel is an excellent way to relax. It can ease tension in your muscles and heart while letting your brain wander to new ideas and live in someone else's shoes. Reading is a mini vacation for your brain!</p>
                        <button className="btn btn-primary bg-gradient-to-r from-orange-600 to-black text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;