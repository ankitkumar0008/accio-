// reduce is used on array to generate a single value 

let arr = [-1,-2,-3];
// let res = arr.reduce((ele,acc)=>{
//     return acc*ele;
// },1);
// console.log(res);

// if you don't give initial value of accumulator it takes first element of the array 

let max  = arr.reduce((ele,acc)=>{
    return ele > acc ? ele : acc;
});
console.log(max);