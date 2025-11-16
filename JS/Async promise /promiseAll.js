// const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
// const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
// const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

// Promise.all([userData,postData,commentData])
// .then((results) => {
//     return Promise.all(results.map((e)=>{
//         console.log( e.json());
//     }))
// })
// .then((e)=>{
//     console.log("user : " , e[0]);
//     console.log("post : " , e[1]);
//     console.log("comment : " , e[2]);
// })
// .catch((err) => {
//     console.log(err);
// })









const p1 = Promise.reject("Success 1");
const p2 = Promise.resolve("Failed 2");
const p3 = Promise.resolve("Success 3");
const p4 = Promise.reject("Failed 4");

Promise.all([p1, p2, p3, p4])
.then((results) => {
    console.log(results);
})
.catch((err) => {
    console.log(err);
})






// function fakeAPI(name, delay) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       // console.log(name + " completed");
//       resolve(name);
//     }, delay);
//   });
// }

//sequential 


// const promise1 = fakeAPI("Task 1", 2000);
// const promise2 = fakeAPI("Task 2", 3000);
// const promise3 = fakeAPI("Task 3", 1000);

// promise1.then((e)=>{
//     console.log(e);
// })
// promise2.then((e)=>{
//     console.log(e);
// })
// promise3.then((e)=>{
//     console.log(e);
// })


// parallel
// Promise.all([
//   promise1,promise2,promise3
// ])
// .then(function() {
//   console.log("✅ All done (Parallel)");
// });

// Promise.all([promise1,promise2,promise3])
// .then((msg)=>{
//   console.log(msg[0]);
// })
