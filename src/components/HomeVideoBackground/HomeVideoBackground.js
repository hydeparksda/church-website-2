import React from "react";
import "./HomeVideoBackground.css";
import Video from "react-responsive-video";
import vid from "../../Videos/hydeparkvideo.mp4";

const HomeVideoBackground = () => {
  return (
    <div className="video-container">
      <Video className="background_video" mp4={vid} />
    </div>
  );
};

export default HomeVideoBackground;
