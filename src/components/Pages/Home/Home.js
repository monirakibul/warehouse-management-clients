import React from 'react';
import Carousel from '../../Carousel/Carousel';
import HomeInventories from '../HomeInventories/HomeInventories';

const Home = () => {
    return (
        <div className='flex-grow'>
            <Carousel></Carousel>
            <HomeInventories></HomeInventories>
        </div>
    );
};

export default Home;