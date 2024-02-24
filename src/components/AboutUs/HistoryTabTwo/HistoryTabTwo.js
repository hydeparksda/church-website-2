import React from 'react';
import pathfinderFieldDay from '../../../Banners/Amanda.jpg'
import signing from '../../../Banners/signing.jpg'
import nature from '../../../Banners/nature.jpg'
import Camp from '../../../Banners/winnekeag.jpg'
import cuteKids from '../../../Banners/cutekids.jpg'
import TheBoys from '../../../Banners/boysAdventurer.jpg'
import DrumCorp from '../../../Banners/drumcorp.jpg'
import TwoGenerations from'../../../Banners/churchladiesandbaby.jpg'
import sisters from '../../../Banners/sisters.jpg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const HistoryTabTwo = () => {
  return (

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
        <img src={sisters} height="300px" width="auto" />
        <p>After the congregation was officially organized as a church, Elder Convelle Morton continued in the role of spiritual leader of Mattapan church under Pastor Horatius Gittens, who pastored the Berea and Mattapan churches. Elder Morton used his pastoral training to steady the ship.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
         <img src={nature} height="300px" width="auto" />
        <p>In May 1997 there was a change in leadership and Dr. Ives Roberts was appointed to serve as the first full-time pastor of the Mattapan church.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
        <img src={Camp} height="300px" width="auto" />
        <p>In the summer of 1998, Mattapan church continued on its theme “Onward and Upward” by engaging in three weeks of evangelistic meetings, conducted by Ainsworth Joseph, a pastor from New York City. As a result of these meetings 31 people were baptized.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
        <img src={TwoGenerations} height="300px" width="auto" />
        <p>In 1999, Mattapan teamed up with its mother church, Berea, to erect a big tent in the Dorchester/Roxbury area of Boston to proclaim the gospel message with Pator Conklin Gentry as the evangelist. At the conclusion of these meetings, more than 100 individuals were baptized. A new congregation, Roxbury Mission, was raised up in the Roxbury area of Boston and is now an organized church in the Northeastern Conference.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
        <img src={signing} height="300px" width="auto" />
        <p>In October 2003, Pastor Cornelius Wesley was appointed to succeed Dr. Roberts as pastor of Mattapan church. Pastor Wesley’s three-year tenure at Mattapan was marked by intentional evangelism and significant growth.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
        <img src={cuteKids} height="300px" width="auto" />
        <p>Mattapan church went without pastoral leadership for approximately six months following the end of Pastor Wesley’s tenure in mid-2005. Elder Carveth DeLeon, the head elder, along with the board of elders and departmental leaders, provided the spiritual leadership at Mattapan during this transition, and seven individuals where baptized and welcomed into the church family.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
        <img src={pathfinderFieldDay} height="300px" width="auto" />
        <p>Pastor George Bulgin was appointed as pastor of Mattapan in January 2006. Dr. Sylvan Lashley was appointed associate pastor that same year. After a brief stay, he was appointed pastor of the Gethsemane church in Brockton, Massachusetts.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
         <img src={TheBoys} height="300px" width="auto" />
        <p>As the church continued on its mission, the Men's Ministries, Women's Ministries, and Children's Ministries departments were instituted and remain vibrant and active departments in the church.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#aa3148', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #aa3148' }}
        iconStyle={{ background: '#aa3148', color: '#fff' }}
      >
        <img src={DrumCorp} height="300px" width="auto" />
        <p>Under the leadership of Pastor George Bulgin, on the weekend of December 14-15, 2007, the church relocated from worshiping in the Berea Academy's school auditorium on Norfolk Street in Mattapan, Massachusetts to its  new facilities at 6 Webster Street, Hyde Park, Massachusetts. This will ever be a reminder that we serve a pray-answering, miracle-working God, who sometimes says “no” and “wait,” but in His time blesses beyond our wildest imaginations! The theme for the weekend of celebration was “Forward Together . . . Completing the Mission." The church records put the membership on the day of the church dedication, December 15, 2007, at 304, and the church’s name was changed to Hyde Park Seventh-day Adventist Church. Pastor Bulgin continued to serve as the pastor of the Hyde Park church until 2010.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )

}
export default HistoryTabTwo;