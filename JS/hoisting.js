console.log(x);

console.log(one);

one;
let x = 5;

let one = () => {
    console.log("hello");
}

console.log(x);
one();

// HOISTING:-  04/07/2025

// console.log(a);            // undefined
// console.log(hello);        // entire function --> [Function : hello]
// hello();                   // Hello!

// var a = 5;

// function hello() {
//     console.log("Hello!");
// }

// console.log(a);            // 5

// -> it is due to Execution Context


// ----------------------------------------------------------------------------------------------
// Execution Context:
// -> it has two types-
// - Global Execution Context
// - Function Execution Context
// -> It is a container where code execution happens

// ----------------------------------------------------------------------------------------------
// Container has two components:
// - Memory Component
// - Code Component

// -----------------------------------------------------------------------------------------------------------------
// |                         Memory     (runs first)        |                         Code   (runs second)         |
// -----------------------------------------------------------------------------------------------------------------
// |             a = undefined                              |       console.log(a)                                 |
// |                                                        |       console.log(hello)                             |
// |             function hello(){                          |                                                      |
// |               console.log("hello")                     |       hello()                                        |
// |             }                                          |                                                      |
// |                                                        |       ----------------------------------------       |
// |            (a is re-assigned)                          |       |     Memory      |        Code        |       |
// |              a = 5                                     |       ----------------------------------------       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |console.log("hello")|       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       ----------------------------------------       |
// |                                                        |       console.log(a)                                 |
// |                                                        |                                                      |
// -----------------------------------------------------------------------------------------------------------------



// ==============================================================================================
// var & arrow function:
// console.log(a);            // undefined
// console.log(hello);        // entire function --> [Function : hello]
// hello();                   // hello is not a function

// var a = 5;

// var hello = () => {
//     console.log("Hello!");
// }

// console.log(a);            // 5

// -----------------------------------------------------------------------------------------------------------------
// |                         Memory     (runs first)        |                         Code   (runs second)         |
// -----------------------------------------------------------------------------------------------------------------
// |             a = undefined                              |       console.log(a)                                 |
// |                                                        |       console.log(hello)                             |
// |             hello = undefined                          |                                                      |
// |                                                        |       hello()                                        |
// |                                                        |                                                      |
// |                                                        |       ----------------------------------------       |
// |            (a is re-assigned)                          |       |     Memory      |        Code        |       |
// |              a = 5                                     |       ----------------------------------------       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |console.log("hello")|       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       |                 |                    |       |
// |                                                        |       ----------------------------------------       |
// |                                                        |       console.log(a)                                 |
// |                                                        |                                                      |
// -----------------------------------------------------------------------------------------------------------------



// ==============================================================================================
// let & arrow function:
// console.log(a);            // Cannot access 'a' before initialization
// console.log(hello);        // Cannot access 'hello' before initialization
// hello();                   // hello is not a function

// let a = 5;

// let hello = () => {           // it treats hello as a variable instead of function
//     console.log("Hello!");
// }
// console.log(a);            // 5