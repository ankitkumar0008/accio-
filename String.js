//endsWith function 

// function endswithstr(str1,str){
//     let len1 = str.length;
//     let len2 =  str1.length;
//     let start = len2-len1;
//     let str2 = "";
//     for(let i = start ; i <len2 ; i++){
//         str2 = str2+str1.charAt(i);
//     }
//     if(str2 == str){
//         return true;
//     }
// }

// function endswithstr(a,b){
//     for(let i = (a.length-b.length) , j = 0 ; i < a.length , j < b.length;i++,j++){
//         if(a.charAt(i)!==b.charAt(j)){
//             return false
//          }
//     }
//     return true;
// }


// function endswithstr(str, substr){
//     //used & condition to break out poora iterate nhi kiya hai 
//     for(let i=substr.length-1 , j = str.length-1; i>=0 && j>=0; i--,j--){
//         if(str.charAt(j)!==substr.charAt(i)){
//             return false
//         }
//     }
//     return true
// }
// let a = "hello world its party time";
// let b = "time";
// console.log(endswithstr(a,b));

let path = "a.b.c..d..e";
let sp = '.';
// console.log(path.split('.'));

function splitstr(str,sp){
    let arr = [];
    for(let i = 0 ; i <str.length ; i++){
        if(str.charAt(i) !== sp ){
            arr.push(str.charAt(i));
        }else if(str.charAt(i)==str.charAt(i+1)){
            arr.push('');
        }
    }
    return arr;
}
console.log(splitstr(path,sp));

// function split(str,splits){
//     let arr = []
//     for(let i=0 ; i<str.length ; i++){
//         if(str.charAt(i) !== splits){
//             arr.push(str.charAt(i))
//         }else if(str.charAt(i)==str.charAt(i+1)){
//             arr.push('');
//         }
//     }
//     return arr
// }
// console.log(split("a.b..c..d..","."));