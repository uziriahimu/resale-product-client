import React from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Categories from '../Category/Categories';

const Home = () => {
    return (
        <div>

            <Bannar></Bannar>
            <About></About>
            <Categories></Categories>
        </div>
    );
};

export default Home;