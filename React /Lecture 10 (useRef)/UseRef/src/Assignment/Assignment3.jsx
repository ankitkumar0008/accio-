import React from 'react'
import { useRef } from 'react'

const Assignment3 = () => {
    const videoRef = useRef(null);
  return (
    <div>
      <video
          ref={videoRef}
          width="300"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <br />

        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
    </div>
  )
}

export default Assignment3
