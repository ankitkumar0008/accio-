import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';
const users = Array.from({length:1000},(_,i)=>({
    id:i,
    name:`User ${i}`
}));

const Assignment1 = () => {
    const [search,setSearch]  = useState("");
    const [dark,setDark] = useState(false);
    const filteredUsers = useMemo(()=>{
        return users.filter(user=>
            user.name.toLowerCase().includes(search.toLowerCase())
        )
    },[search])
  return (
    <div>
      <input
      value={search}
      onChange={e=>setSearch(e.target.value)}
      placeholder='Search user'/>
      {dark?<p>Light</p>:<p>Dark</p>}
      <button onClick={()=>setDark(!dark)}>Toggle theme</button>
      <ul>
        {filteredUsers.map((user)=>{
            return <li key={user.id}>{user.name}</li>
        })}
      </ul>

    </div>
  )
}

export default Assignment1
