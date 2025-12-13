import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthProvider from './context/AuthProvider'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Login from './components/Login'



function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <AuthProvider>
          <Navbar></Navbar>
          <Login></Login>
          <Dashboard></Dashboard>
        </AuthProvider>
      </div>
    </div>
  )
}

export default App;