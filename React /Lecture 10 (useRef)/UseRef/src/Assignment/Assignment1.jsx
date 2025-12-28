import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const Assignment1 = () => {
    const inpRef = useRef(null);
    // function handleFocus(){
    //     inpRef.current.focus();
    // }
    useEffect(()=>{
        inpRef.current.focus();
    },[])
  return (
    <div>
      <input ref = {inpRef} type = "text" placeholder='Type something ..........' />
      {/* <button onClick={handleFocus}>Focus Input</button> */}
    </div>
  )
}

export default Assignment1
