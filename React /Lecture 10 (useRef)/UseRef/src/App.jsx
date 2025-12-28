import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import Assignment1 from "./Assignment/Assignment1";
import Assignment2 from "./Assignment/Assignment2";
import Assignment3 from "./Assignment/Assignment3";
import Practice1 from "./Assignment/Practice1";
import Practice2 from "./Assignment/Practice2";

function App() {

  const countRef = useRef(0);
  const [countstate,setCountState] = useState(0);
  // console.log("component rendered");
  // console.log(countRef);
  function handleClickRef(){
    countRef.current = countRef.current + 1;
    console.log("count Ref:",countRef.current);
  }
  function handleClickState(){
    setCountState(prev=>prev+1);
    console.log("count state :",countstate)
  }
  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <button onClick={handleClickRef}>Increment ref</button>
        <button onClick={handleClickState}>Increment state</button> */}
        {/* <Assignment1></Assignment1>
        <Assignment2></Assignment2>
        <Assignment3></Assignment3> */}
        {/* <Practice1></Practice1> */}
        <Practice2></Practice2>
      </div>
    </div>
  )
}

export default App;

// render 
// commit
// effect 
// return (next effect)
// 