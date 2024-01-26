import React from 'react'
import video from '../../image/video.mp4'
const BgVideo = () => {
    return (
        <div className="relative w-full ">
          <video className=' w-full h-[400px] object-cover ' src={video} autoPlay loop muted></video>
          
        </div>
     )
    
}

export default BgVideo
