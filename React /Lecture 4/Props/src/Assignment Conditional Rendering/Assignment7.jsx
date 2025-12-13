function Assignment7(){
    return(
        <>
        <h1>📝 Assignment 7 — Pass an object as a prop</h1>
        <User info={{ name: "Sara", age: 20, email: "sara@mail.com" }} />
        </>
    )
}
export default Assignment7;

function User(props){
    return(
        <>
        <p>{props.info.name}</p>
        <p>{props.info.age}</p>
        <p>{props.info.email}</p>
        </>
    )
}