import React from 'react';
import Singer from '../../../Banners/elizabethA.jpg'
import presentDay from '../../../Banners/presentDay.jpg'
import './HistoryTabThree.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 
 const HistoryTabThree = () => {
     return (
         
<VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#aa3148', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  darkgrey' }}
      iconStyle={{ background: '#aa3148', color: '#fff' }}
    >
      <img src={presentDay} height="300px" width="auto"/>
     <p>In January 2011 Pastor Elgin Clement was assigned to pastor the Hyde Park church. He was also serving a the pastor of the Cambridge Seventh-day Adventist Church in Malden, Massachusetts, at the time.</p>       
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#aa3148', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  darkgrey' }}
      iconStyle={{ background: '#aa3148', color: '#fff' }}
    >
      <img src={Singer} height="300px" width="auto"/>
     <p>On January 26, 2019, James Yansen, Jr., was installed as the fifth pastor to serve the Hyde Park church congregation.</p>       
    </VerticalTimelineElement>
    
  </VerticalTimeline>
     )
    
 }
export default HistoryTabThree;