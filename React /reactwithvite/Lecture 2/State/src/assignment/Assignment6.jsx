import { useState } from "react"

function Assignment6(){
    let [state,setState] = useState(0);
    function increment(){
        setState((prev)=>{
            return prev = prev+2;
        })
    }
    function decrement(){
        setState((prev)=>{
            return prev = prev-2;
        })
    }
    function reset(){
        setState((prev)=>{
            return prev = 0;
        })
    }
    return(
        <>
        <input
        type="number"
        value={state}
        onChange={(e) => setState(Number(e.target.value))}></input>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=>decrement()}>decrement</button>
        <button onClick={()=>reset()}>reset</button>
        </>
    )

}
export default Assignment6