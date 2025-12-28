import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

function valid (user){
    let num = 0 ;
    for (let i = 0 ; i < 1_000_000_000;i++){
        num = num+i
    }
    if(user.length<5){
        return false;
    }else{
        return true;
    }
}
const Practice1 = () => {
    let[name,setname] = useState("");
    let [dark , setDark] = useState(false);

    let check = useMemo(()=>{
        return valid(name);
    },[name])
  return (
    <div>
        <input
        value={name}
        onChange={(e)=>setname(e.target.value)}
        placeholder='username'/>
        {check?<p>valid username</p>:<p>invalid username</p>}
      <button onClick={() => setDark(!dark)}>Toggle Help Text</button>
      {dark?<p>Light</p>:<p>Dark</p>}
    </div>
  )
}

export default Practice1
