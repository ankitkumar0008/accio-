import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import UserDetails from './pages/UserDetails'
import Post from './pages/Post'
import Assignment1 from './Assignment/Assignment1'
import Assignment2 from './Assignment/Assignment2'
import Assignment3 from './Assignment/Assignment3'
import Movie from './Assignment/movie'
import Assignment4 from './Assignment/Assignment4'
import { About,Team } from './Assignment/Assignment4'

function App() {
  

  return (
    
    <div className="app-shell">
      <div className="assignment-card">
        {/* <Navbar></Navbar> */}
        <Routes>
          {/* <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/user/:userid' element={<UserDetails/>}/>
          <Route path='/post/:postid' element={<Post/>}/> */}
          {/* <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/assignment3' element={<Assignment3/>}/> */}
          <Route path='/assignment4' element={<Assignment4/>}>
          <Route path='team' element={<Team/>}/>
          <Route path='about' element={<About/>}/>
          </Route>
          
        </Routes>
        {/* <Assignment2></Assignment2> */}
        {/* <Assignment1></Assignment1> */}
        {/* <Assignment3></Assignment3> */}
        
        

        </div>
      </div>
      
  )
}

export default App
