

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("three");
// }, 3000);
// console.log("four");
// 200 lines (sync)


// output
// -------------
// one
// two
// four
// three

// let arr = [2, 4, 6];

// arr.forEach((elem) => {
//     console.log(elem);
// });





// callback
// function fetchData(url, callback) {
//     setTimeout(() => {
//         let data = {message: "here is data required"};
//         callback(data);
//     }, 2000);
// }

// function handleData(data) {
//     console.log(data);
// }

// fetchData("example.com/data", handleData);



// promise
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = {message: "here is data required"};
//             if(data) {
//                 resolve(data);
//             } else {
//                 reject(new Error("Error fetching the data"));
//             }
//         }, 2000);
//     });
// }

// then and catch
// fetchData("example.com.data")
// .then((data) => {
//     console.log(data.message);
// })
// .catch((error) => {
//     console.log(error);
// })

// async await
// async function printData(){
//     try{
//         let data = await fetchData("example.com/data");
//         console.log(data.message);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetch
// then and catch for fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json();
// })
// .then(()=>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// })
// async await for fetch

// async function gettingdata() {
//     try{
//          let p = (await fetch('https://jsonplaceholder.typicode.com/users')).json();
//         console.log( await p);
//     }catch(error){
//         console.log(error);
//     }
// }
// gettingdata();

// let arr = [2,4,6,8];
// let sum = 0;
// arr.forEach((e,index)=>{
//     sum = sum + e;
//     console.log(`value : ${e} , index : ${index}`)
// })
// console.log(sum);

// function fetchData(url,callback){
//     setTimeout(()=>{
//         callback({message:"helloworld"})
//     },800)
// }
// fetchData("example.com",handleData);




// function getUser(id) {
//   // TODO: Return a Promise with setTimeout(700ms)
// }

// getUser(1)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));

// getUser(0)
//   .then(u => console.log("OK:", u))
//   .catch(e => console.log("ERR:", e.message));


// async function gettingdata(url) {
//     try{
//          let p = (await fetch(url)).json();
//          let data =  await p;
//         let names = data.map(elem =>{
//             return elem.name;
//         }  ); 
//         console.log(names);
        
//     }catch(error){
//         console.log(error);
//     }
// }
// gettingdata('https://jsonplaceholder.typicode.com/users');



fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    return data;
})
.then((ele)=>{
    let names = ele.map((elem)=>{
        return elem.name
    });
    console.log(names);
})
.catch((err) =>{
    console.log(err);
})