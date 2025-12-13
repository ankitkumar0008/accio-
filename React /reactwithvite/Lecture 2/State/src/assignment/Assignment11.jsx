import { useState } from "react";

function Assignment11(){
    let[like,setlike] = useState(0);
    let[Comment,setcomment] = useState(0);
    return(
        <>
        <button onClick={()=>{setlike(prev => prev+1)}}>Like</button>
        <button onClick={()=>{setcomment(prev => prev+1)}}>Comment</button>
        <p>likes : {like} | comments : {Comment}</p>
        </>
    )
}

export default Assignment11;