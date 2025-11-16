function orderPizza(name,time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${name} arrived`);
        },time)
    })
}

const dominos = orderPizza("dominos",1200);
const pizzaHut = orderPizza("Pizza Hut",2000);
const mojo = orderPizza("mojo",800);
Promise.all([dominos,pizzaHut,mojo])
.then((result)=>{
    console.log(result);
    console.log("all pizza delivered");
}
)

