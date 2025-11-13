
let p1 = Promise.resolve("OK 1");
let p2 = Promise.reject("Fail 2");
let p3 = Promise.resolve("OK 3");
let p4 = Promise.resolve("Fail 4");

Promise.all([p1,p2,p3,p4])
.then((resullt)=>{
    console.log(resullt);
})
.catch((err)=>{
    console.log(err);
})
