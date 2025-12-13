import{Link,Outlet} from 'react-router-dom'
function Dashboard(){
    return(
        <>
        <Link to ="/dashboard/profile">team</Link>
        <Link to ="/dashboard/setting">setting</Link>
        <Link to ="/dashboard/billing">billing</Link>
        <Outlet/>
        </>
    )
}
export default Dashboard

export function Profile(){
    return <h1>This is my Proile</h1>
}
export function Setting(){
    return<h1>Welcome to Settings</h1>
}
export function Billing(){
    return<h1>Welcome to Billing</h1>
}