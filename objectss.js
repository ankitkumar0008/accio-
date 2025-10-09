let person = {
    name : "Harsh",
    age : 27 ,
    place : "Pune",
    greet : function(){
        return "hello";
    }
}

console.log(person.name);

// let p = "place";
// console.log(person[p]);

// for(let key in person){
//     console.log(person[key]);
// }


// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let x = person.greet();
// console.log(x);





// DESTRUCTURING

//array destructuring


//let arr = [100,200,300,400];
//let [one,two,three,four]= arr;
//let [one,two,three,four,five = 500]= arr;
//let [one,two,,four]= arr;
//console.log(one,two,three,four);
//console.log(one,two,four,five);


// object destructuring
// let person = {
//     name : "Ankit",
//     age : 26,
//     place : "Pune"

// } 

//let {name,age,place} = person;
//order doesn't matter , but variable name should be same as properties 
//let {name:myName,age,place} = person; // if you don't want a same name as propertis
//console.log(myName,age,place);
// let {name:myName,age,place="Mumbai"} = person;
//  it won't update the original object 
//console.log(myName,age,place);
//console.log(person.place);




// spread operator
//let arr1 = [2,4,6];
//let arr2 = arr1;
// ... is the spread operator
//let arr2 = [...arr1];
//if you want to add more values
//let arr2 = [...arr1,12,20,20];
// if you want to combine more than two arrays
//let arr2 = [...arr1,...a]


// arr1[1] = 100;
// console.log(arr1);
// console.log(arr2);

// rest operator (...)

// function sum (...numbers){ // gathers number in arrays
//     let sum = 0 ;
//     for(let i = 0 ; i <numbers.length ; i++){
//         sum = sum+numbers[i];
//     }
//     return sum ;
// }
// console.log(sum(1,2,3,4,5,6,7,8));

// spread with objects
// let obj1 = {a:1,b:2};
// let obj2 = {b:3,c:3};
// let merged = {...obj1 , ...obj2};
// console.log(merged);






// let obj = new Object();
// obj.name = "Raj";
// obj.age = 26 ;

// let m1 = new Map();
// m1.set("name","Raj");
// m1.set("age",26);
// m1.set("place","Pune");
// console.log(m1);
// console.log(m1.get("age"));
// console.log(m1.has("email"));

// traversing
// for(let [key,value] of m1){
//     console.log(key , value );
// }
// m1.forEach((value,key) => {
//     console.log(key,value);
// }
// );

// console.log(m1.keys());
// console.log(m1.values());
// console.log(m1.entries());

// let user = {
//     name : "harsh",
//     age : 23,
//     city : "Pune"
// }
// let x = JSON.stringify(user);
// console.log(x);
// let y = JSON.parse(x);
// console.log(y);

//has own property

