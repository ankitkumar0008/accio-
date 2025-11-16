function task(name, ms){
    return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(`"${name} done in ${ms} ms"`);
      resolve(name);
    }, ms);
  });
}

Promise.all([task('T1',200),task('T2',1200),task('T3',600)])
.then((e)=>{
    console.log(`first task is ${e[0]}`);
    console.log("All tasks finished");
})