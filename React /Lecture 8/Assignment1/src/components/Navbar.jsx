import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  let{user,logout}=useContext(AuthContext)
  return (
    <nav>
      <h2>My App</h2>
      {user?(<div>
        <h3>Welcome {user.name}</h3>
        <button onClick={logout}>Logout</button>
      </div>):(
        <span>NotLogged in!</span>
      )}
    </nav>
  )
}

export default Navbar
