function Task1(){
    return(
        <>
        <Action color="red" name="Login"></Action>
        <Action color="blue" name="Signup"></Action>
        <Action color="green" name="Logout"></Action>
        

        </>
    )
}
export default Task1;

function Action(props){
    return(
        <button style={{backgroundColor:props.color}}>{props.name}</button>
    )
}