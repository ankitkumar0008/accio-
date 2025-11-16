async function getTodo(){
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let response = await data.json();
        console.log(response.title);
    }catch(err){
        console.log("this is not working",err.message);
    }
}
getTodo();