import React from 'react'
import { useRef } from 'react'

const Assignment2 = () => {
    const targetSection = useRef(null);
    function scrollToSection(){
        targetSection.current.scrollIntoView();
    }
  return (
    <div>
      <button onClick={scrollToSection}>Scroll to section</button>
      <div style={{height:"1000px"}}></div>
      <div  ref = {targetSection} style={{height:"300px",background:"green"}}>Target Section</div>
    </div>
  )
}

export default Assignment2
