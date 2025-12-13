import { useState } from "react";

function Task8(){
    let[score1,setscore1] = useState(0);
    let[score2,setscore2] = useState(0);
    function reset(){
        setscore1(0);
        setscore2(0);
    }

    return(<>
    <p>Team A : {score1}</p>
    <p>Team B : {score2}</p>
    <button  onClick={()=>{setscore1(score1+1)}}>+1 Team A</button>
    <button  onClick={()=>{setscore2(score2+1)}}>+1 Team B</button>
    <button onClick={reset}>Reset</button>
    </>
    )
}
export default Task8;