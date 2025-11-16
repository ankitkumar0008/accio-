// recursion 
function rec(n){
    if(n == 1){
        console.log(1);
    }else{
        console.log(n);
        n = n-1;
        rec(n);
    }
}

// rec(5);
// function rec2(end){
//     if(end > 0 ){
//         console.log(end);
//         rec2(end-1);
//         console.log(end);
//     }
    
// }

// rec2(5);

// function factorial(n) {
//     // base case
//     if (n == 0) {
//         return 1;
//     }
//     // recursive call
//     return n * factorial(n-1);
// }
// console.log(factorial(3));

// function power(x,n){
//     if( n == 1){
//         return x;
//     }
//     return x*power(x,n-1);
// }

// console.log(power(5,2));

// max in an array 

// let arr = [23,34,24,436,534,345,36,342];
// let i = arr.length-1;
// let max = arr[0];
// function maxx(arr,i){
    
//     if(i > 0 ){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//         maxx(arr,i-1);
//     }
//     return max;
// }

// console.log(maxx(arr,i));