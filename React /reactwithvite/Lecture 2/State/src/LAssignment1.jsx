import { useState } from "react";

function LAssignment1(){
    let [count,setCount] = useState(0);
    let [step ,setStep] = useState(0);
    return(
        <>
        <input type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}></input>
        <p>{count}</p>
        <button onClick={()=> setCount(count = count+step)}>Counter</button>
        </>
    )
}
export default LAssignment1