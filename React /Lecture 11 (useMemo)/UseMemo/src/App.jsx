import { useState } from "react";
import "./App.css";
import { useMemo } from "react";
import Assignment1 from "./Assignments/Assignment1";
import Practice1 from "./Assignments/Practice1";
import Practice3 from "./Assignments/Practice3";
import Practice4 from "./Assignments/Practice4";
import Problem from "./UseCallback/Problem";
import Solution from "./UseCallback/Solution";
import Practice5 from "./Assignments/Practice5";
import Practice6 from "./Assignments/Practice6";
import Debug1 from "./Assignments/Debug2";
import Debug3 from "./Assignments/Debug3";
import Practice7 from "./Assignments/Practice7";
import Practice8 from "./Assignments/Practice8";
import Practice9 from "./Assignments/Practice9";


// function calculate(num){
//   console.log("slow calculation running......");
//   let total = 0;
//   for(let i = 0 ; i <1_000_000_000;i++){
//     total += num;
//   }
//   return total;
// }


function App() {
//  const[count,setCount] = useState(0);
//  const[dark,setDark] = useState(false);
//  const themeStyles = {
//   background: dark?'#333':"#fff",
//   color : dark?"#fff":"#333"
//  }
//  let result = calculate(count);
//  let result = useMemo(()=>{
//    return calculate(count);
//  },[count])
  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <div style = {themeStyles}>
          <h1>{result}</h1>
          <button onClick={() => setCount(prev => prev + 1)}>increase count</button>
          <button onClick={() => setDark(prev => !prev)}>Toggle button </button>
        </div> */}
        {/* <Assignment1></Assignment1> */}
        {/* <Practice1></Practice1>
        <Practice3></Practice3>
        <Practice4></Practice4>
        <Problem></Problem>
        <Solution></Solution> */}
        {/* <Practice5></Practice5>
        <Practice6></Practice6>
        <Debug1></Debug1> */}
        {/* <Debug3></Debug3> */}
        {/* <Practice7></Practice7> */}
        <Practice8></Practice8>
        <Practice9></Practice9>
      </div>
    </div>
  )
}

export default App;