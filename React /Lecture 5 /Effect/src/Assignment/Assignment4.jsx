import { useEffect } from "react"

function Assignment4(){
    useEffect(()=>{
        console.log("rendered happened")
    })
    useEffect(()=>{
        console.log("Mounted 1")
    },[])
    return(
        <>
        <h1>Assignment 5 — Run two effects: one on every render, one only on mount</h1>
        </>
    )
}
export default Assignment4