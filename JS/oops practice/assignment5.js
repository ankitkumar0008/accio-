// B2: Employee → Manager/Intern
class Employee {
  // TODO: constructor(name)
  constructor(name){
    this.name = name;
  }
  intro(){
    console.log(`hello my name is ${this.name}`);
  }
  // TODO: intro()
}

class Manager extends Employee {
    constructor(name,dept){
        super(name);
        this.dept = dept;
    }
    intro(){
        super.intro();
        console.log(`dept: ${this.dept}`)
        }
  // TODO: constructor(name, dept)
  // TODO: intro() // call super.intro() then log dept
}

class Intern extends Employee {
    constructor(name,duration){
        super(name);
        this.duration = duration ;
    }
    intro(){
        super.intro();
        console.log(` work ex : ${this.duration}`);
    }
  // TODO: constructor(name, durationMonths)
  // TODO: intro() // customized message
}

// TODO: demo all three

let intern = new Intern('siddhant','6 month');
intern.intro();

let manager = new Manager('Ankit','Senior Software Engineer');
manager.intro(); 

