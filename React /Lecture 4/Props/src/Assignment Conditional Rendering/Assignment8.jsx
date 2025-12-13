function Assignment8(){
    return(
        <>
        <h1>📝 Assignment 8 — Reusable Button using props</h1>
        <Button text="Login" color="green" />
        <Button text="Signup" color="blue" />
        </>
    )
}
export default Assignment8

function Button({text,color}){
    return(
        <button style={{background:color}}>{text}</button>
    )
}