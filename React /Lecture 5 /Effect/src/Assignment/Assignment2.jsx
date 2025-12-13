import { useEffect } from "react";

function Assignment2(){
    useEffect(()=>{
        console.log("App loaded");
    },[])
    return(
        <>
        <h1>Assignment 2 — Log message only on first render</h1>
        </>
    )
}
export default Assignment2;