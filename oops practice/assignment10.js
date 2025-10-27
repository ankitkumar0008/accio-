// D1: WashingMachine (Abstraction)
class WashingMachine {
  // TODO: start() → call private steps in order
    start(){
      console.log("starting washing machine");
      this.#fillwater();
      this.#rinse();
      this.#wash();
      this.#spin();
      console.log("shutting down the machine");

    }

  // TODO: #fillWater()
    #fillwater(){
      console.log('filling water');
    }
  // TODO: #wash()
    #wash(){
      console.log('washing cloth');
    }
  // TODO: #rinse()
  #rinse(){
    console.log("rinsing cloth");
  }
  #spin(){
    console.log("spinning dryer");
  }

  // TODO: #spin()
}
machine = new WashingMachine();
machine.start();

// TODO: demo: call start(); keep commented line calling a private method
