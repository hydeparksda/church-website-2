import React from 'react';
import './MissionTab.css'
import YouthImage from '../../../Banners/youthpic.jpg';

const MissionTab = () => {
  return (
    <div className="MissionTab">
      <div class="mission-container" >
        <div class="row">
          <div class="column-33">
            <img src={YouthImage} alt="App" height="auto" width="auto" />
          </div>
          <div class="column-66 mission-words-container">
            <h1 class="xlarge-font MissionTitle">Mission</h1>
            <p className="MStatement">The Hyde Park Seventh-day Adventist Church (formerly Mattapan Seventh-day Adventist Church) is a community of faith drawn together by our love for God. We reach out to share the Good News of His love and salvation with all mankind This we do with compassion and with a firm commitment to our Lord and Savior, Jesus Christ, being empowered by the Holy Spirit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MissionTab;