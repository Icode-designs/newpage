import React from "react";
import video from "assets/cleaning_video.mp4";

// styles
import { VideoBox, VideoContainer } from "./videoSectionStyles";

function VideoSection() {
  return (
    <VideoBox>
      <div>
        <VideoContainer>
          <video src={video} autoPlay loop></video>
        </VideoContainer>
      </div>
    </VideoBox>
  );
}

export default VideoSection;
