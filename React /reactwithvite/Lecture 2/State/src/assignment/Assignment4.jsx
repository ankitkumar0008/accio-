import { useState } from "react"

function Assignment4(){
    let[text,setText] = useState("");
    return(
        <>
        <input
        type="text"
        value={text}
        onChange={(e)=> setText(e.target.value)}></input>
        <p>{text}</p>
        </>
    )
}

export default Assignment4;