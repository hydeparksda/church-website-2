import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './JoinUsBanner.css';

const JoinUsBanner = () => {
  return (
    <div className="JoinUsBanner">
      <h2>Join Us Every Sabbath!</h2>
      <h1>Hyde Park Seventh-day Adventist Church</h1>
      <section className="ServicesTime">
        <h3>Sabbath School: 9:30am <span>|</span> Worship Service: 11:00am</h3>
      </section>
      <Button className="new-here-button">
        <Link className="new-here-link" to={'/newhere'}>New Here?</Link>
       </Button>
    </div>
  )
}

export default JoinUsBanner;