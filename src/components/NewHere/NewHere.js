import React from 'react';
import TMOLBanner from '../../Banners/TMOL.png';
import { Button } from 'react-bootstrap';
import WelcomingImage from '../../Banners/worship.jpg'
import ContactUsForm from './MyForm/MyForm'
import laughingMan from '../../Banners/laughing.jpg'
import { Link } from 'react-router-dom';
import '../Give/Give.css'

const NewHere = () => (
  <div className="outer">
        <div className="give-container">
      <h3 className="online-giving">Welcome</h3>
      <p className="online-giving-p">

Welcome to the Hyde Park Seventh-day Adventist Church. We are glad that you have taken the time to visit our website and learn more about us.

Whether you are searching for a church to visit, are a seeker, have not been to church in a while, or are just interested in spending time with a community of faith, you are more than welcome to join us.

We have programs designed for children and youth to young adults and adults, so regardless of your age or stage in life, you’re invited to join us anytime—online or in person.</p>
      <Button className="new-here-button give-button">
        <a href={'#'}>Contact Us</a>
      </Button>
    </div>
    <ContactUsForm></ContactUsForm>
    <img className="tmol-banner" src={laughingMan}></img>
  </div>
)

export default NewHere; 