import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
    const internalSource = 'assets/video.mp4'
  return (
    <div>
      <ReactPlayer url={internalSource} 
      controls
      playing
      muted
    width="100%"
    height="100%"
    autoPlay
    loop


      />
    </div>
  )
}

export default Video
