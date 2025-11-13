// function submitFeedback(formData){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(formData.msg == ""){
//                 reject(`Message is required !`);
//             }else{
//                 resolve(`thanks ${formData.name}, your feedback is submitted`)
//             }
//         },1500)
//     })
// }

// submitFeedback({msg:"rfwfwf",name:"ankit"})
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((msg)=>{
//     console.log(msg);
// })
// .finally(()=>{
//     setTimeout(()=>{
//         console.log("feedback request submitted")
//     },1000)
// })

function addText(text){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(text);
    },1000)
    
    })
}
addText("Hello, world!")
.then((msg)=>{
    output.textContent = msg;
})
.catch((err)=>{
    console.log(err);
})

