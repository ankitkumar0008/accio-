function checkStock(product) {
 
    return new Promise((resolve, reject) => {
      if (product == "laptop" || product == "phone") {
        resolve(`In Stock ${product}`);
      } else {
        reject(`Out of stock: ${product}`);
      }
    });

}

checkStock("idfbsd")
.then((msg)=>{
    setTimeout(()=>{
        console.log(msg);
    },1000)
    
})
.catch((msg)=>{
    console.log(msg);
})
.finally(()=>{
    console.log("Stock check complete");
})
