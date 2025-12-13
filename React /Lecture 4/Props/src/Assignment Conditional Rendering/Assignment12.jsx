function Assignment12(){
    return(
        <>
        <h1>📝 Assignment 12 — Props Drilling + children together</h1>
        <Level1 msg="Welcome User"></Level1>
        </>
    )
}

export default Assignment12

function Level1({msg}){
    return <Level2 msg={msg}></Level2>
}

function Level2({msg}){
    return <Card > <p>{msg}</p></Card>
}
function Card({children}){
    return (
        <>
        {children}
        </>
    );
}
