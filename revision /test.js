function fib(n){
    if( n == 0 || n==1){
        return 1 
    }
    return fib(n-1)+fib(n-2)
}

for (let i = 0; i < 7; i++) {   
    console.log(fib(i));
}