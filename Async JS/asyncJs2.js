// set Interval
// let count = 0 ;
// setInterval (()=>{
//     count++;
//     console.log((`Count:${count}`));
// },1000);

// let p = document.createElement('p');
// setInterval(()=>{
//     let todayDate = new Date();
//     let time = todayDate.toLocaleTimeString('en-US', { hour12: true });
//     p.textContent = time;
// },1000);
// document.body.appendChild(p);

// count = 0 ;
// let x = setInterval(()=>{
//     let p = document.createElement('p');
//     count++;
//     p.textContent = count;
//     document.body.appendChild(p);
//     if(count == 5){
//         clearInterval(x);
//     }
// },1000)

// let count = 0 ;

// function printcount(){
//     console.log(count);
//     count++;
//   setTimeout(printcount,1000);
// }
// printcount();

//assignment 9
let count1 = 0;
// function count(n){

//      }
// }
// count(3);

// let x = setInterval(()=>{
//     console.log('tick...');
//     count1++;
//     if(count1 >= 3){
//         clearInterval(x);
//     }
// },1000);

//assigmment 10 ;

const images = ["img1", "img2", "img3"];

// method 1 
// let i = 0 ;
// let cycle = 1;
// let x = setInterval(()=>{
//     console.log(`showing ${images[i]}`);
//     i++;
//     if(i >= images.length){
//         if(cycle < 2){
//             cycle++;
//             i = 0 ;
//         }else{
//             clearInterval(x);
//         }
//     }
// },1000);

// method 2
// let j = 0;

// let y = setInterval(() => {
//   if (j < 2) {
//     let i = 0;
//     let x = setInterval(() => {
//       if (i < images.length) {
//         console.log(`showing ${images[i]}`);
//         i++;
//       } else {
//         clearInterval(x);
//       }
//     }, 1000);
//     j++;
//   } else {
//     clearInterval(y);
//   }
// },3000);





