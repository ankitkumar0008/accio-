import { useState } from "react";

function Task4(){
    let[counter,setcounter] = useState(0);
    return(
    <>
    <p>{counter}</p>
    <button onClick={()=>setcounter(counter+1)}>Count</button>
    </>
    )
}
export default Task4;

