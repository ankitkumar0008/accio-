import { useEffect, useState } from "react"

function Assignment8(){
    let [color,setColor] = useState("red");
    useEffect(()=>{
        console.log("color changed")
    },[color]);
    return(
        <>
        <div style={{
            height:100,
            width:100,
            backgroundColor:color
        }}></div>
        <button onClick={()=>{setColor(color=="red"?"green":"red")}}>Change</button>
        </>
    )
}

export default Assignment8