import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Dashboard, { Billing, Profile, Setting } from './component/Dasboard'
function App() {
return (
   <Routes>
    <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='profile' element={<Profile/>}/>
      <Route path='setting' element={<Setting/>}/>
      <Route path='billing' element={<Billing/>}/>
    </Route>
   </Routes>
  )
}

export default App
