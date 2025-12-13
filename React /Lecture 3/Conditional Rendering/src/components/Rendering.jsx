//if else
//ternary
// logical &
function Rendering(){
    let isActive = true;
    let isDark = true;
    let message;
    let show = true;
    if(isActive){
        message = "you are active!"
    }else{
        message = "you are not active";
    }
    return(
        <>
        <p>{message}</p>
        <div>{isDark ? <h2>Dark mode On</h2> : <h2>light mode on </h2>} </div>
        <div>{show && <p>It is working !</p>}</div>
        </>
    )
}
export default Rendering;