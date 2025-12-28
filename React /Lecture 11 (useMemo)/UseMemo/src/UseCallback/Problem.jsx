import React from 'react'
import { useState } from 'react'


function Child({click}){
    <h1>Hello</h1>
}
const Problem = () => {
    const [count,setCount] = useState(0);
    const handleClick = ()=>{
        console.log("hello");
    };
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <Child onClick={handleClick}/>
    </div>
  )
}

export default Problem
