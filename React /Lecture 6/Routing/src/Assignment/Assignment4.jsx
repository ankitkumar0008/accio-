import { Link, Outlet } from "react-router-dom";

function Assignment4(){
    return(
        <>
        <Link to ="/assignment4/team">team</Link>
        <Link to ="/assignment4/about">about</Link>
        <Outlet/>
        </>
    )
}
export default Assignment4;

export function Team(){
    return<h1>this is a team</h1>
}
 

export function About(){
    return<h1>this is about</h1>
}
