// D3: DoorLock
class DoorLock {
  // TODO: #pin = ""
  #pin = 1234;
  setPin(pin){
    this.pin = pin;
  }
  unlock(tryPin){
    if(tryPin == this.pin){
        console.log("correct pin");
    }else{
        console.log("incorrect pin");
    }
  }

  // TODO: setPin(pin) // require 4 chars (string)

  // TODO: unlock(tryPin) // compare with #pin
}

// TODO: demo: set pin, try wrong & correct pin; avoid direct access

let lock = new DoorLock();
lock.setPin(3443);
lock.unlock(3443);
