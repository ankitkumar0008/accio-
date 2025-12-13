import { useEffect, useState } from "react"

function Assignment5(){
    let[count,setCount] = useState(0);
    useEffect(()=>{
        if(count%2 == 0 ){
           return console.log("even count");
        }
    },[count])
    return(
        <>
        <h1>Assignment  — Effect runs only when count is EVEN</h1>
        <button onClick={()=>{setCount(count+1)}}>count:{count}</button>
        </>
    )
}
export default Assignment5