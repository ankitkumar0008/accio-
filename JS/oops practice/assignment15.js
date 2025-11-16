// E3: UserAuth
class UserAuth {
  // TODO: #passwordHash = ""
  #passwordHash = "";

  setPassword(Plain){
    this.#passwordHash = Plain.split('').reverse().join('');
  }
  checkPassword(Plain){
    if(Plain.split('').reverse().join('') == this.#passwordHash){
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
lock.setPassword("dfas");
lock.checkPassword("dfas");
