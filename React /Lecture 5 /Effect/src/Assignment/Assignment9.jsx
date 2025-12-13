import { useEffect, useState } from "react"

function Assignment9(){
    let[text,setText]=useState("");
    useEffect(()=>{
        if(text.length >5){
            console.log("long text")
        }
    })
    return(
        <>
        <input
        type="text"
        value={text}
        onChange={(e)=>{setText(e.target.value)}}></input>
        </>
    )
}
export default Assignment9