// E3: UserAuth
class UserAuth {
  // TODO: #passwordHash = ""
  #passwordHash = 1234;
  setPassword(Plain){
    this.pin = Plain;
  }
  checkPassword(Plain){
    if(Plain == this.pin){
        console.log("correct pin");
    }else{
        console.log("incorrect pin");
    }
  }

  // TODO: setPassword(plain) // convert to hidden form

  // TODO: checkPassword(plain) // compare hidden forms
}

// TODO: demo: set, check right/wrong; keep commented line showing private access is blocked
let lock = new UserAuth();
lock.setPassword(3443);
lock.checkPassword(3443);
