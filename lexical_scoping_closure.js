// Lexical Scoping or Static scoping
// In JavaScript, lexical scope means that the scope of a variable is defined by its position in the source code.
//  Nested functions have access to variables declared in their outer (parent) functions.



//Closure

// Definition:

// A closure is created when a function "remembers" its lexical scope even when it is executed outside of that scope.

// function outer() {
//   let counter = 0;

//   return function inner() {
//     counter++;
//     console.log(counter);
//   };
// }

// const count = outer(); // outer is called, inner is returned and assigned to count
// count(); // 1
// count(); // 2
// count(); // 3
