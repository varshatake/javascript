// n1=0;
// n2=1;
// n3=n1+n2;
// n1=n2;
// n2=n1;

let fibonacci = function (num) {
let n1 =0 ;
let n2 = 1;
let nextTerm;
let sum = 0;
for(let index=1;index<=num;index++) {
    //console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    
    sum = sum +" "+nextTerm;
}
console.log(`Fibonacci Series : ${sum}`);
}
fibonacci(10);
fibonacci(20);
