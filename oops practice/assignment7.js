// C1: Notifier Polymorphism
class Notifier {
  // TODO: notify(msg)
  notify(msg){
    console.log(`notification ${msg}`);
  }
}
class EmailNotifier extends Notifier {
  // TODO: notify(msg) // override
  notify(msg){
    console.log(`your mail : ${msg}`);
  }
}
class SMSNotifier extends Notifier {
  // TODO: notify(msg) // override
  notify(msg){
    console.log(`your sms : ${msg}`);
  }
}

let msgs = [new Notifier(),new EmailNotifier(),new SMSNotifier()]
// TODO: demo: array of notifiers, call notify in a loop
msgs.forEach((i)=>{
    i.notify('sfsd');
})