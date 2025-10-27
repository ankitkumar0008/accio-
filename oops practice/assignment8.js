// C2: Transport Fare
class Transport {
  // TODO: fare(km) // default
  fare(km){
    console.log(`price :${km*10} rs`);
  }
}
class Bus extends Transport {
  // TODO: fare(km) // per km
  fare(km){
    console.log(`price :${km*5} rs`);
  }
}
class Taxi extends Transport {
  // TODO: fare(km) // base + per km
  fare(km){
    console.log(`price :${(km*10)+40} rs`);
  }
}
class Metro extends Transport {
  // TODO: fare(km) // slab rules
  fare(km){
    if(km<=5 & km > 0){
        console.log(`price :10 rs `);
    }else if( km >5 & km <=15){
        console.log(`price :25 rs`);
    }else if(km > 15 ){
        console.log(`price :40 rs`);
    }else{
        console.log(`enter correct price`);
    }
  }
}

let mode = [new Transport(), new Bus(), new Taxi(), new Metro()];
mode.forEach((e)=>{
    e.fare(5);
})

// TODO: demo: mixed transports + km array → loop → log fare
