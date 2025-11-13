function task(name, ms){
    return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(`"${name} done in ${ms} ms"`);
      resolve(name);
    }, ms);
  });
}

Promise.all([
  task("ankit", 1200),
  task("aditya", 800),
  task("rishi", 1500 )
])
.then(function() {
  console.log("All tasks finished");
});