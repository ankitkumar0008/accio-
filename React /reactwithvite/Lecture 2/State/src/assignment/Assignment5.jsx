import { useState } from "react";

function Assignment5(){
    let[Colour,setColour] = useState("White");
    function red(){
        setColour((prev)=>{
            return prev = "red"
        })
    }
    function blue(){
        setColour((prev)=>{
            return prev = "blue"
        })
    }
    function green(){
        setColour((prev)=>{
            return prev = "green"
        })
    }
    return (
        <>
        <h1>Colour Changer</h1>
        <div
        style={{
            height:"150px",
            width:"150px",
            border:"1px solid black",
            backgroundColor:Colour,
            marginBottom:12

        }}></div>
        <button onClick={()=>red()}>Red</button>
        <button onClick={()=>blue()}>Blue</button>
        <button onClick={()=>green()}>Green</button>
        </>
        

    )
}
export default Assignment5;