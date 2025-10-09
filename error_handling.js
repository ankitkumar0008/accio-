//ERROR HANDLING

// Error handling means catching and fixing unexpected problems in your code 
// — without stopping the entire program.

// we hadle error using try catch in javascript 


// try {
//   let total = price * 5;  // price is not declared
//   console.log("Total:", total);
// } catch (error) {
//   console.log("Something went wrong!");
//   console.log("Error message:", error.message);
// }

// finaly
// the code which always runs no matter what 
// try {
//   let marks = [90, 85, 100];
//   console.log(marks[5].toString());  // undefined.toString() = error
// } catch (error) {
//   console.log("Caught error:", error.message);
// } finally {
//   console.log("This line runs no matter what.");
// }

// throw

//To create a custom error message, we use throw

// function checkAge(age) {
//   if (age < 0) {
//     throw new Error("Age cannot be negative");
//   }
//   console.log("Valid age:", age);
// }

// try {
//   checkAge(-5);
// } catch (error) {
//   console.log("Caught:", error.message);
// }
