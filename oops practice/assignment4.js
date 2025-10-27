// B1: Device → Phone/Laptop
class Device {
  // TODO: constructor(name)
  constructor(name){
    this.name = name;
  }
    info(){
        console.log(this.name);
  }

  // TODO: info()
}

class Phone extends Device {
  // TODO: constructor(name, os)
//   let super = new device;
  constructor(name,os){
    super(name);
    this.os = os
  }
  
  // TODO: info() // override
  info(){
    super.info() 
    console.log(`name: ${this.name} , OS:${this.os}`);
  }
}

class Laptop extends Device {
  // TODO: constructor(name, ram)
  constructor(name,ram){
    super(name);
    this.ram = ram;
  }
  // TODO: info() // override
info(){
    console.log(`name: ${this.name} , OS:${this.ram}`);
}
}

// TODO: demo with multiple instances
let device = new Phone("apple","ios");
device.info();
