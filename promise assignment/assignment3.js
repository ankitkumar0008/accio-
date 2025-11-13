// function delayTask(step, time) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`${step} done`);
//             resolve();
//         }, time);
//     });
// }

// delayTask("1️⃣ Step 1", 1000)
//     .then(() => delayTask("2️⃣ Step 2", 1000))
//     .then(() => delayTask("3️⃣ Step 3", 1000))
//     .then(() => console.log("✅ All steps completed"));



function runStep(stepName){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(stepName);
            resolve();
        },1000)
    })
}

runStep("Step 1: Preparing cart")
.then(()=>{
    runStep("Step 2: Processing payment")
})
.then(()=>{
    runStep("Step 3: Generating invoice");
})
.then(()=>{
    runStep("Step 4: Sending email receipt")
})
.finally(()=>{
    setTimeout(()=>{
        console.log("Order complete ✅")
    },4000)
    
})