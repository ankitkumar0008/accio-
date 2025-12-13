function Assignment13(){
    return(
        <>
        <h1>📝 Assignment 13 — Conditional Rendering + Props (Show user role)</h1>
        <UserRole name ="ankit" role = "admin"></UserRole>
        </>
    )
}
export default Assignment13

function UserRole({name,role}){
    return (
        <>
        <p>{name} {role=="admin" ? "(Admin Access)":"(User Access)"}</p>
        </>
    )
}
