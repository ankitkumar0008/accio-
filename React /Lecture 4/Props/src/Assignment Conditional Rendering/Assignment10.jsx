function Assignment10(){
    return(
        <>
        <h1>📝 Assignment 10 — Pass a function as a prop</h1>
        <Child onPress={() => alert("Pressed!")} />
        </>
    )
}
export default Assignment10

function Child({onPress}){
    return(
        <button onClick={onPress}>Press</button>
    )
}