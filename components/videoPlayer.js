"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
  let videosrc = "/videos/auction_website.mp4";

  return (
    <div>
      
      <ReactPlayer
        width="100%"
        height="100%"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;