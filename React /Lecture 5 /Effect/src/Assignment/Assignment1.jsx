import { useEffect } from "react";

function Assignment1(){
    useEffect(()=>{
        console.log("rendered");
    })
    return(
        <>
        <h1>Assignment 1 — Log “Component Rendered” on every render</h1>
        </>
    )
}
export default Assignment1;