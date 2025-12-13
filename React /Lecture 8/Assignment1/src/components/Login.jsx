import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  let{user,login}=useContext(AuthContext);
  let[username,setUsername]=useState("");
  function handleLogin(){
    if (username.trim()=="")return;
    login(username);
    setUsername("");
  }
  if(user){
    return;
  }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
