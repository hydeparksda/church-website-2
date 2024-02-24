import React from 'react';
import HomeVideoBackground from '../HomeVideoBackground/HomeVideoBackground';
import HomeButton from '../HomeButton/HomeButton'
import './Home.css'
import JoinUsBanner from '../JoinUsBanner/JoinUsBanner';
import LocationBanner from '../LocationBanner/LocationBanner';

import Footer from '../Footer/Footer';
import { Parallax } from 'react-scroll-parallax';
import { FaPrayingHands, FaYoutube, FaHandHoldingHeart } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="home">
            <HomeVideoBackground />
            <JoinUsBanner />
            <LocationBanner />
            {/* <HomeButton title="Love" color="#d5a93b">
                <FaPrayingHands />
            </HomeButton>
            <HomeButton title="Serve" position="middle" color="#aa3148">
                <FaYoutube />
            </HomeButton>
            <HomeButton title="Transform" color="#d5a93b">
                <FaHandHoldingHeart />
            </HomeButton> */}
            {/* <Footer /> */}
        </div>
    )
}
export default Home;