// A2: Thermostat
class Thermostat {
  // TODO: #temp = 24
  #temp = 24;
  increase(){
    if(this.#temp >= 30){
        console.log("max temprature");
        return;
    }else{
        this.#temp++;
    }
  }
  decrease(){
    if(this.#temp <= 16){
        console.log("minimum temp");
    }else{
        this.#temp--;
    }
  }
  setTemp(v){
    if(v > 30 || v < 16){
        console.log("invalid temp");
        return;
    }else{
        this.#temp = v;
    }
  }
  current(){
    return this.#temp;
  }

  // TODO: increase()

  // TODO: decrease()

  // TODO: setTemp(v) // only 16..30

  // TODO: current()
}

let temp = new Thermostat();
temp.setTemp(17);
console.log(temp.current());
temp.decrease();
console.log(temp.current());
temp.decrease();
console.log(temp.current());

// TODO: demo: change temp, invalid set, log current
