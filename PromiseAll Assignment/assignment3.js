function convert(n, ms){
    return new Promise (function(resolve){
        setTimeout(()=>{
            resolve(n*2);
        },ms)
        
    })
}

let nums = [3,5,9,10];


Promise.all(nums.map((e)=>{
   return convert(e,300)
}))
.then((e)=>{
    console.log(e);
})
.catch((err)=>{
    console.log(err);
})