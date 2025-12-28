import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { memo } from 'react'
import { useMatch } from 'react-router-dom'
let Usercard = memo(({data})=>{
    console.log("child render");
    return (
        <div>
            <h1>name :{data.name}</h1>
        </div>
    )
})
const Practice8 = () => {
    console.log("parent render");
    const[theme,settheme] = useState(false);

    const name = useMemo(()=>{
        return {name:"ankit"};
    },[])
  return (
    <div>
        <button onClick={()=>settheme(!theme)}>change theme</button>
        {theme&&<p>Light theme</p>}
      <Usercard data = {name}></Usercard>
    </div>
  )
}

export default Practice8
