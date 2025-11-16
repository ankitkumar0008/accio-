class Wallet{
    #amount = 0 ;
    addCash(value){
        if(typeof value != "number" || value <= 0 ){
            console.log("invalid amount");
            return;
        }
        this.#amount += value;
        
    }
    spendcash(value){
        if(typeof value != "number" || value <= 0 ){
            console.log("invalid amount");
            return;
        }
        if(value > this.#amount){
            console.log("invalid input")
            return;
        }
        this.#amount -= value;
    }
    balance(){
            return this.#amount;
        }
}
let wallet = new Wallet();
wallet.addCash(500);
wallet.spendcash(200);
console.log(wallet.balance());