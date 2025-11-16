function a (name,time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${name}`)
    },time)
    })
    
}

let p1 = a("promise1",2000);

let p2 = a("promise2",700);

let p3 = a("promise3",1200);

Promise.race([p1,p2,p3])
.then((result)=>{
    console.log(result);
})

