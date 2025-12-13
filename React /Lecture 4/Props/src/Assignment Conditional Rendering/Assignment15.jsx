function Assignment15(){
    return (
        <>
        <h1>📝 Assignment 15 — Props Drilling (4 Levels) + Conditional Rendering</h1>
        <A status="offline"></A>
        </>
    )
}
export default Assignment15;

function A({status}){
    return <B status = {status}></B>
}

function B({status}){
    return <C status = {status}></C>
}
function C({status}){
    return (
        <StatusBox status={status}></StatusBox>
    )
}
function StatusBox({status}){
    return(
        <p>{status==="online"?<span style={{color:"green"}}>Online</span> : <span style={{color:"red"}}>Offline</span>}</p>
    )
}