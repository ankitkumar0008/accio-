import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const Practice1 = () => {
    let[count,setcount] = useState(0);
    let rendercount = useRef(0);
    let currentTime = useRef(null);
    function handleClick(){
        setcount(prev => prev + 1)
        const now = new Date();
        const Time = now.toLocaleTimeString();
        currentTime.current = Time;
        console.log("mouse clicked at",currentTime.current);
    }
        rendercount.current = rendercount.current + 1;
    console.log("component rerendering time" ,rendercount.current);
  return (
    <div>
        <p>{count}</p>
      <button onClick={handleClick}>Click count</button>
    </div>
  )
}

export default Practice1
