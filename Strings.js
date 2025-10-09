// let str = "accio";
// console.log(str[0]);
// console.log(str.charAt(0));
// console.log(str.length);
// for(let i = 0 ; i<str.length;i++){
//     console.log(str[i]);
// }

// console.log(str.concat("job"));
// console.log(str.trim());
// console.log(str.startsWith("b"));
// console.log(str.endsWith("o"));
// console.log(str.includes("acc"));
// console.log(str.slice(0,3));
// let str2 = str.toUpperCase();

// ------------------count vowels;----------

// let str = "ksfdif";
// let count = 0 ;
// for(let i of  str){
//     if( i == "a"||i == "e"||i == "i"||i == "o"||i == "u"){
//         count++;
//     }else{
//         continue;
//     }
// }
// console.log(count);

// ----------------------reverse----------------

// let str = "sfsdfdsfsf";
// let str2 = "";
// for(let i = str.length-1 ; i >=0; i--){
//     str2 = str2+str[i];
// }
// console.log(str2);

// console.log(str.split("").reverse().join(""));

// let arr = [1,2,3,4,5];
// console.log(arr.reverse().join(""));

// -------------pallindrome--------------

// let str = "aba";
// if(str === str.split("").reverse().join("")){
//     console.log("true");
// }else{
//     console.log("false");
// }

// --------------------replacer " " with ------------------------

// let str = "sfs sdf";
// str2 = str.replace(" ","-");
// console.log(str2);

// ---------------------count words in a scentence----------------

// let s = "sfssg sgwegwf sewg ";
// function countWords(s) {
//   let count = 1 ;
//   s = s.trim();
//   for(let i = 0 ; i < s.length ; i++){
//     if (s[i] == " "){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countWords(s));

//-----------------------------------------------------------------------
// sets
let arr = [1, 2, 4, 3, 4, 5, 6, 7, 4];
let s = new Set(arr);

s.add(6);
console.log(s);

console.log(s.has(2));
for (let elem of s) {
  console.log(elem);
}

s.forEach((elem) => console.log(elem));

// s.clear();
// console.log(s);

let x = Array.from(s);
console.log(x);

function goodStrings(s, A, n) {
  // your code here

  let charset = new Set(s);
  let count = 0;
  for (let i = 0; i < n; i++) {
    let good = true;
    for (let j = 0; j < A[i].length; j++) {
      for (let i of charset) {
        if (A[i][j] != charset) {
          good = false;
          break;
        }
      }
    }
    if (good) {
      count++;
    }
  }
  return count;
}
