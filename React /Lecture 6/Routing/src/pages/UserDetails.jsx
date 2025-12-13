import { useParams } from "react-router-dom"
function UserDetails(){
    const userDetails = [{name:"ankit",id:1,age:22},
        {name:"adi",id:2,age:22},
        {name:"siddhant",id:3,age:22}
    ]
    let {userid} = useParams();
    const user = userDetails.find(u=>u.id===Number(userid));
    return(
        <div>
            {user ? (
                <>
                <h2>User Details</h2>
                <p>{user.name}</p>
                <p>{user.age}</p>
                </>
            ):(
                <h3>User not found</h3>
            )}
        </div>
    )
}
export default UserDetails