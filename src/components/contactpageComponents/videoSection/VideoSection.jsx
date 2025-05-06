import React from "react";
import { VideoBox } from "./videoSectionStyles";
import video from "assets/cleaning_video.mp4";

function VideoSection(customVideo) {
  return (
    <VideoBox>
      <div>
        <div>
          <video src={video} autoPlay loop></video>
        </div>
      </div>
    </VideoBox>
  );
}

export default VideoSection;
