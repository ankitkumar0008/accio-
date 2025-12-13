import { Link, useNavigate } from "react-router-dom";
// function Home(){
//     const userDetails = [{name:"ankit",id:1,age:22},
//         {name:"adi",id:2,age:22},
//         {name:"siddhant",id:3,age:22}
//     ]
//     return(
//         <>
//         <h1>Home</h1>
//         <ul>
//             {userDetails.map((ele)=>{
//                 return <li><Link to = {`/user/${ele.id}`} >{ele.name}</Link></li>
//             })}
//         </ul>
//         </>
//     )
// }
// export default Home ;


function Home(){
    let navigate = useNavigate();
    function gotoDashboard(){
        navigate("/about")
    }
    return(
        <button onClick={gotoDashboard}>login</button>
    )
}
export default Home;