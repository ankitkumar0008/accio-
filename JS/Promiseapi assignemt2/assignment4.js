function fakeAPI(name,delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`${name} completed`)
        }, delay);
    })
}
let p1 = fakeAPI("api1",1000);
let p2 = fakeAPI("api2",2000);
let p3 = fakeAPI("api3",3000);
let p4 = fakeAPI("api4",4000);

Promise.all([p1,p2,p3,p4])
.then((result)=>{
    console.log(result);
    console.log("all done parallel");
})
// p1
// .then((result)=>{
//     console.log(result);
//     return p2;
// })
// .then((result)=>{
//     console.log(result);
//     return p3;
// })
// .then((result)=>{
//     console.log(result);
//     return p4;
// })
// .then((result)=>{
//     console.log(result);
//     console.log("all done sequential")
// })
