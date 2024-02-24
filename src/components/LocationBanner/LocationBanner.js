import React from 'react';
import './LocationBanner.css'
import LocationIcon from './mapImage4.png';

const LocationBanner = () => {
  return (
    <div className="LocationBanner">
          {/* <h1>Love | Serve | Transform</h1> */}
          <div className="locationIcon">
          <img className="locationImage" src={LocationIcon}/>
          </div>
          
          <h3>6 Webster St, Hyde Park, MA 02136</h3>
          <div className="coreServicesBtns">
          <button class="give"><span>Give</span></button>
          <button class="give"><span>Watch</span></button>
          <button class="give"><span>Serve</span></button>
          </div>
    </div>
  )
}

export default LocationBanner;