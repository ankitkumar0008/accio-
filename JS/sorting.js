// // INSERTION SORT
// let arr = [2,3,8,9,5,6,];
// function insertion_sort(arr){
// for(let i = 0 ; i <arr.length ; i++){
//     let j = i ;
//     while( (j > 0) && (arr[j-1] > arr[j])){
//         let temp = arr[j];
//         arr[j] = arr[j-1];
//         arr[j-1] = temp;
//         j--;
//     }
//     console.log(arr);
// }

//     return arr;
// }

// console.log(insertion_sort(arr));

// SELECTION SORT
    // let arr = [2,3,8,9,5,6,];

    for (let i = 0; i < n-1; i++) {
//         let min = i;
//         for (let j = i; j < n; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
//     console.log(arr);
// }

// MERGE SORT

// let arr = [2,3,8,9,5,6];

// function merge_sort(arr){
 

// console.log(merge_sort(arr));


// function quick_sort(arr){
//     if (arr.length <= 1){
//         return arr;
//     }
//     let right = [];
//     let left = [];
    
//     let pivot = arr[arr.length-1];
    
//     for(let i = 0 ; i < arr.length-1 ; i++){
//         if(arr[i] > pivot){
//             right.push(arr[i]);
//         }else{
//             left.push(arr[i]);
//         }
//     }
    
//     return [...quick_sort(left),pivot,...quick_sort(right)];
// }
// let arr = [2,3,8,9,5,6];
// console.log(quick_sort(arr));

// Bubble Sort

// BUBBLE SORT

// let arr = [9,3,54,34,76,54];

// let arr = [13, 6, 17, 12];
// function bubble_sort(arr){
//     let flag = true;
//     for(let i = arr.length ; i > 0 ; i--){
//         for(let j = 0 ; j<i-1 ; j++ ){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//                 console.log(arr);
//                 flag = false;
//             }
//         }
//         if(flag){
//             break;
//         }
//     }
//     return arr;
// }

// console.log(bubble_sort(arr));

let arr = [12,12];
let newarr = [...arr];
console.log(arr);
console.log(newarr);

newarr[0] = 1;
console.log(arr);
console.log(newarr);
