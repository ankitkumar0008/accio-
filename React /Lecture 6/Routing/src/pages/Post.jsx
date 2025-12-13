import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post(){
    let{postid} = useParams();
    let[post,setPost]= useState()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postid])
    return(
        <div>
            {!post ? (
                <h3>loading.....</h3>
            ):(
                <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                </>
            )}
        </div>
    )
}
export default Post;