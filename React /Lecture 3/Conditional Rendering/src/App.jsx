import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Rendering from './components/Rendering.jsx'
import Props from "./components/Props.jsx"
import Task1 from './Assignments/Task1.jsx'
import Task2 from './Assignments/Task2.jsx'
import Task3 from './Assignments/Task3.jsx'
import Task4 from './Assignments/Task4.jsx'
import Task5 from './Assignments/Task5.jsx'
import Task6 from './Assignments/Task6.jsx'
import Task7 from './Assignments/Task7.jsx'
import Task8 from './Assignments/Task8.jsx'


function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <Rendering></Rendering> */}
        {/* <Props></Props> */}
        <Task1></Task1>
        {/* <Task2></Task2> */}
        {/* <Task3></Task3> */}
        {/* <Task4></Task4> */}
        {/* <Task5></Task5> */}
        {/* <Task6></Task6> */}
        {/* <Task7></Task7> */}
        {/* <Task8></Task8> */}
      </div>
    </div>
  )
}

export default App
