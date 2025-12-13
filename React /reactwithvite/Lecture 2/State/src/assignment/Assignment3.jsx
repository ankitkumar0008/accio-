import { useState } from "react"

function Assignment3(){
    let[text,setText] = useState("Hello Student!");
    function toggle(){
        setText((prev)=>{
             return prev === "Hello Student!" ? "Welcome to React!" : "Hello Student!";
        })
    }
    return(
        <>
        <p>{text}</p>
        <button onClick={()=>toggle()}>Toggle</button>
        </>
    )
}

export default Assignment3;