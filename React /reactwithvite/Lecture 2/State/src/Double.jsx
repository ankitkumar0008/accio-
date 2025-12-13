import { useState } from "react"

function Double(){
    let[num,setNum] = useState(0);

    function double(){
        setNum((prev)=>{
            return prev*2;
        })
    }

    function triple(){
        setNum((prev)=>{
            return prev*3;
        })
    }
    return(
        <>
        <input type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}></input>
        
        <button onClick={double} >Double</button>
        <button onClick={triple} >Triple</button>
        <p>{num}</p>
        </>
    )
}

export default Double;