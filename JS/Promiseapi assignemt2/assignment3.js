const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");


Promise.all([userData,postData,commentData])
.then((result)=>{
    return Promise.all(result.map((r)=>{
        return r.json();
    }))
})
.then((data)=>{
    console.log("user",data[0]);
    console.log("post",data[1]);
    console.log("comment",data[2]);
})
.catch((err)=>{
    console.log(err);
})