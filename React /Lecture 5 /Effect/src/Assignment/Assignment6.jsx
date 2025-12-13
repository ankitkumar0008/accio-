import { useEffect, useState } from "react"

function Assignment6(){
    let[count,setCount] = useState(0);
    let[text,setText] = useState("");
    useEffect(()=>{
        console.log("changes occured")
    },[text,count])
    return(
        <>
        <input
        type="text"
        onChange={(e)=>setText(e.target.value)}
        value={text}></input>
        <button onClick={()=>{setCount(count+1)}}>count:{count}</button>
        </>
    )
}
export default Assignment6