function okAfter(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`ok after ${ms}`)
        },ms)
    })
}

function failAfter(ms){
    return new Promise((reject)=>{
        setTimeout(()=>{
        reject(`reject after ${ms}`)
        },ms)
    })
}

 Promise.all([okAfter(500), failAfter(800), okAfter(400)])
 .then((output)=>{
    console.log(output);
 })
 .catch((error)=>{
    console.log("error");
 })