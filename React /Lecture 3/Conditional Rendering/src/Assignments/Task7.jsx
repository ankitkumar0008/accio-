import { useState } from "react";

function Task7(){
    let[counter,setcounter] = useState(0);
    function inc(){
        if(counter<10){
            setcounter(prev => prev+1)
        }
    }
    function dec(){
        if(counter> 0 ){
            setcounter(prev => prev-1)
        }
    }
    return(
    <>
    <p>{counter}</p>
    <button onClick={inc} disabled ={counter===10}>increase</button>
    <button onClick={dec} disabled = {counter===0}>decrease</button>
    </>
    )
}
export default Task7;