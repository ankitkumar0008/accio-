const cab  = (name,time,willArrive)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            willArrive
            ? resolve(`${name} confirmed`)
            : reject(`${name} canceled`);
        },time);
    })
}

let uber = cab('uber',1333,false);
let ola = cab('ola',4000,true);
let rapido = cab('rapido',500,true);

Promise.any([uber,ola,rapido])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
    
})