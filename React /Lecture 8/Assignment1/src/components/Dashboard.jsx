import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {
  let{user}=useContext(AuthContext);

  return (
    <>
    {user ? (
            <div>
                <h3>Dashboard</h3>
                <span>You are successfully Logged In {user.name}</span>
            </div>
        ) : (
            <span>Please Login to view Dashboard</span>
        )}
    </>
  )
}

export default Dashboard
