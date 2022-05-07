import React from 'react';
import Carousel from '../../Carousel/Carousel';
import Features from '../../Features/Features';
import NewsLetter from '../../NewsLetter/NewsLetter';
import HomeInventories from '../HomeInventories/HomeInventories';

const Home = () => {
    return (
        <div className='flex-grow'>
            <Carousel></Carousel>
            <Features></Features>
            <HomeInventories></HomeInventories>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;