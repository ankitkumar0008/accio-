// C3: Shape Areas
class Shape {
  // TODO: area()
  area(){
    console.log('function to calculate area');
  }
}
class Circle extends Shape {
  // TODO: constructor(r)

  constructor(r){
    super();
    this.r = r
  }
  // TODO: area()
  area(){
    console.log(`area : ${3.14*this.r*this.r }`)
  }
}
class Rectangle extends Shape {
  // TODO: constructor(w, h)
  constructor(w,h){
    super();
    this.w = w;
    this.h = h;
  }
  // TODO: area()
  area(){
    console.log(`area : ${this.w*this.h}`);
  }
}
class Triangle extends Shape {
  // TODO: constructor(b, h)
  constructor(b,h){
    super();
    this.b = b;
    this.h = h;
  }
  // TODO: area()
  area(){
    console.log(`area : ${0.5*this.b*this.h}`);
  }
}

let shapes = [new Shape(),new Circle(3),new Rectangle(3,4),new Triangle(4,3)];
shapes.forEach((i)=>{
    i.area();
})

// TODO: demo: array of shapes → compute total area
