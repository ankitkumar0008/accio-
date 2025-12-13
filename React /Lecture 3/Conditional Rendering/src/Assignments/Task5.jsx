import { useState } from "react";

function Task5(){
    let[counter,setcounter] = useState(0);
    function increase(){

    }
    function decrease(){
        
    }
    return(
    <>
    <p>{counter}</p>
    <button onClick={()=>setcounter(counter+1)}>Increase</button>
    <button onClick={()=>setcounter(counter-1)}>Decrease</button>

    </>
    )
}
export default Task5;

