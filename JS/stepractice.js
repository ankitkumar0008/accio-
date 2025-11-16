// set

// let set1 = new Set();
// set1.add(3);
// set1.add(23);
// set1.add(5);
// set1.add(36);
// set1.add(43);
// console.log(set1);
// set1.delete(3);
// console.log(set1);
// console.log(set1.has(23));

// for(ch of set1){
//     console.log(ch);
// }
// console.log();
// set1.forEach(element => {
//     console.log(element);
// });
// console.log(set1.size);
// set1.clear();
// console.log(set1);

// maps
// Map


const map1 = new Map();


// set
map1.set("name", "rishi");
map1.set("age", 20);
map1.set("height", "174cm");
console.log(map1)


const arr = [["name", "rishi"],["age", 20],["height", "174cm"]]
const map2 = new Map(arr);
console.log(map2)


// get()
console.log(map2.get("name"))
console.log(map2.get("age"))

//has()
console.log(map2.has("name"));
console.log(map2.delete("name"));
console.log(map2.size);


for(ch of map2){
    console.log(ch);
}
console.log();

map2.forEach(element =>{
    console.log(element);
})
console.log(map2.clear());

for(let[key,values] of map2){
    console.log(key,value);
}