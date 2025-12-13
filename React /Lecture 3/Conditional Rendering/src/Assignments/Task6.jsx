import { useState } from "react";

function Taks6(){
    let[count,setcounter] = useState(0);
    let[step,setStep] = useState(0);
    function increase(){
        return setcounter((prev)=>{
            prev = count+step;
        })
    }
    return(
        <>
        <input type="number"
        value={step}
        onChange={(e)=>setStep( e.target.value)}></input>
        <button onClick={increase}>Increase</button>
        <p>{count}</p>
        </>
        
        
    )
}
export default Taks6;