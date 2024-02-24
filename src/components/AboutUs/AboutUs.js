import React from 'react';
import './AboutUs.css'
import HistoryTabOne from './HistoryTabOne/HistoryTabOne';
import HistoryTabTwo from './HistoryTabTwo/HistoryTabTwo';
import HistoryTabThree from './HistoryTabThree/HistoryTabThree';
import MissionTab from './MissionTab/MissionTab';
import OurPastor from './OurPastor/OurPastor';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <MissionTab />
      <OurPastor />
      <div className="history-container">
        <h1 className="historyTitle">Our History</h1>
        <div className="History">
          <h2>From a Mission to a Church</h2>
          <h3>January 1987 - January 1996</h3>
        </div>
        <HistoryTabOne />
        <div className="History">
          <h2>Mattapan Church</h2>
          <h3>February 1996 - December 2010</h3>
        </div>
        <HistoryTabTwo />
        <div className="History">
          <h2>The Hyde Park SDA Church</h2>
          <h3>January 2011 - Present</h3>
        </div>
        <HistoryTabThree />
      </div>
    </div>
  )
}
export default AboutUs;