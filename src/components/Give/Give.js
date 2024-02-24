import React from 'react';
import TMOLBanner from '../../Banners/TMOL.png';
import laughingMan from '../../Banners/laughing.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Give.css'
const Give = () => (
  <div className="outer">
        <div className="give-container">
      <h3 className="online-giving">Online Giving</h3>
      <p className="online-giving-p">AdventistGiving allows members to return their tithes and give their offerings online. There are no fees associated with this service.</p>
      <Button className="new-here-button give-button">
        <a href={'https://adventistgiving.org/?fbclid=IwAR3hSoGrDM8loYTIfELt8FOfFXGqdEpCuaFL6_xsVAso25QjiSRaBntRvcE#/org/AN4FM7/envelope/start'}>Give</a>
      </Button>
    </div>
    <img className="tmol-banner" src={TMOLBanner}></img>
  </div>
)

export default Give; 