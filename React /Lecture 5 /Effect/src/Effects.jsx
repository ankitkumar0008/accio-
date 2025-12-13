import { useEffect, useState } from "react"

function Effects(){
    let[count,setCount] = useState(0)
    useEffect(()=>{
        console.log("effect called!");
    },[count]);
    return(
        <>
        <h1>Hello world!</h1>
        <button onClick={()=> setCount(count+1)}>Count :{count}</button>
        <input
        type="text"
        onChange={(e)=>setText(e.target.value)}></input>
        </>
    )
}
export default Effects