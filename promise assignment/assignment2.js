function createAccount(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({userId:1});
        },1000)   
    })
    
}

function fetchProfile(Id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({userId:Id.userId,name:"ankit"});
        },1000)
    })
}

function showWelcomeScreen(profile){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`welcome ${profile.name}`)
        },1000)
    })
}



createAccount()
.then((msg)=>{
    console.log("account created");
    return fetchProfile(msg);
})
.then((msg)=>{
    console.log(`Account created for : ${msg.name}`);
    return showWelcomeScreen(msg);
})
.then((msg)=>{
    console.log(msg)

})
.finally(()=>{
    console.log("onboarding process complete");
})