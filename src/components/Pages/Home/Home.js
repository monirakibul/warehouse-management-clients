import React from 'react';
import Carousel from '../../Carousel/Carousel';
import Features from '../../Features/Features';
import NewsLetter from '../../NewsLetter/NewsLetter';
import HomeInventories from '../HomeInventories/HomeInventories';

const Home = () => {
    return (
        <div className='flex-grow'>
            {/* mandatory  */}
            <Carousel></Carousel>
            {/* more section 1  */}
            <Features></Features>
            {/* mandatory  */}
            <HomeInventories></HomeInventories>
            {/* more section 2  */}
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;