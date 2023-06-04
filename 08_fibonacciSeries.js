// n1=0;
// n2=1;
// n3=n1+n2;
// n1=n2;
// n2=n1;

let number = 10;
let n1 =0 ;
let n2 = 1;
let nextTerm;
let sum = 0;
for(let index=1;index<=number;index++) {
    //console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    
    sum = sum +" "+nextTerm;
}
console.log(`Fibonacci Series : ${sum}`);

