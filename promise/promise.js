// What is a Promise?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.

// It acts as a placeholder for a future value — like when you order food online 🍕:
// - You place the order (the request starts),
// - The restaurant is preparing it (operation in progress), -> pending
// - Finally, it gets delivered (operation finished). -> fulfil
// -> reject



// Promise Constructor
// let fileUpload = new Promise((resolve, reject) => {
//     let uploadSpeed = 30;   //mbps

//     console.log("Uploading a file...");
//     setTimeout(() => {
//         if(uploadSpeed > 50) {
//             resolve("File uploaded successfully ✅")
//         } else {
//             reject("File upload failed due to slow internet! ❌")
//         }
//     }, 2000)
// }); 

// fileUpload
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("File upload process finished!");
//     })


// let transaction = new Promise((resolve, reject) => {
//     let balance = 5000;
//     let amount = 3000;

//     console.log("Transaction being processed...");
//     setTimeout(() => {
//         if(balance >= amount) {
//             resolve("Transaction sucessful ✅")
//         } else {
//             reject("Insufficinet balance ❌")
//         }
//     }, 2000);
// });

// transaction.then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("transaction completed");
// })





// promise chaining
// login
// fetch user detail
// render dashboard
// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("step 1: user logged in 👤")
//     }, 1500)
// })
// .then((msg) => {
//     console.log(msg);
//     return "step 2: fetched user detail 📦"
// })
// .then((msg) => {
//     console.log(msg);
//     // throw new Error("error message...")
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("step 3: rendered user dashboard 🖥️")
//         }, 1000);
//     })
// })
// .then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("rendering dashboard process completed!");
// })




// callback hell
// loginUser("jay@example.com", "1234", function (user) {
//     console.log("1️⃣ User logged in:", user);

//     getUserProfile(user.id, function (profile) {
//         console.log("2️⃣ User profile loaded:", profile);

//         getUserOrders(profile.id, function (orders) {
//             console.log("3️⃣ Orders fetched:", orders);

//             showDashboard(orders, function () {
//                 console.log("4️⃣ Dashboard shown!");
//             });
//         });
//     });
// });


// step 1 - promise based functions
// function loginUser(email, password) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, email });
//         }, 1000);
//     });
// }

// function getUserProfile(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: userId, name: "Jay", age: 26 });
//         }, 1000);
//     });
// }

// function getUserOrders(profileId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Order-101", "Order-102", "Order-103"]);
//         }, 1000);
//     });
// }

// function showDashboard(orders) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Dashboard displaying orders:", orders);
//             resolve("Dashboard Ready ✅");
//         }, 1000);
//     });
// }


// step 2 - chaining them
// loginUser("Jay", "abhani57@gmail.com")
// .then((user) => {
//     console.log("user logged in:", user);
//     return getUserProfile(user.id);
// })
// .then((profile) => {
//     console.log("Profile fetched:", profile);
//     return getUserOrders(profile.id);
// })
// .then((orders) => {
//     console.log("Orders fetched:", orders);
//     return showDashboard(orders);
// })
// .then((msg) => {
//     console.log(msg);
// })
// .catch((err) => {
//     console.log("Something went wrong -", err);
// })
// .finally(() => {
//     console.log("All Done ✅");
// });



// example 2 - callback hell to promise chain
// setTimeout(() => {
//   console.log("1️⃣ Step 1 done");
//   setTimeout(() => {
//     console.log("2️⃣ Step 2 done");
//     setTimeout(() => {
//       console.log("3️⃣ Step 3 done");
//     }, 1000);
//   }, 1000);
// }, 1000);


// promise version
function delayTask(step, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${step} done`);
            resolve();
        }, time);
    });
}

delayTask("1️⃣ Step 1", 1000)
    .then(() => delayTask("2️⃣ Step 2", 1000))
    .then(() => delayTask("3️⃣ Step 3", 1000))
    .then(() => console.log("✅ All steps completed"));
