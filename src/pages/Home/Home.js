import React from 'react';
import About from '../About/About';
import Advertisement from '../Advertise/Advertisement';
import Bannar from '../Bannar/Bannar';
import Categories from '../Category/Categories';

const Home = () => {
    return (
        <div>

            <Bannar></Bannar>
            <Advertisement></Advertisement>
            <About></About>
            <Categories></Categories>

        </div>
    );
};

export default Home;