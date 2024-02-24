import React from 'react';
// import YoutubeLive from 'youtube-live-react';
 import CorinthiansBanner from '../Sermons/TMOL_banner_2_Corinthians_5_17_01.png';
 import KeyNoteBanner from '../Sermons/TMOL_banner_Romans_12_2_01.png'
 import fakeVideo from '../Sermons/fakeVideo.jpg';
 import OurLivesMatter from '../Sermons/our_lives_matter.jpg'
import './Sermons.css';

const Sermons= () => (
  <div>
    <div className="LiveHeader">
    <h1 className="blinking">Hyde Park Seventh-Day Adventist Church: Live!</h1>
    </div>
      
      <div className="LiveVideo">
      <img className="CorinthiansBanner" src={CorinthiansBanner}/>
      <img className="fakeVideo" src={fakeVideo} />
      <img className="KeyNoteBanner" src={KeyNoteBanner}/>
      </div>
      {/* <div>
      <YoutubeLive
                    iframeWidth={400}
                    iframeHeight={300}
                    maxResults={50}
          youtubeChannelId='UCMwdLFKV-qzDWi2kGrGiXOA'
          googleApiKey='{YOUR_GOOGLE_API_KEY}'/>
      </div> */}
  </div>
)

export default Sermons; 
