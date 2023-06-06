console.log(`------ Arrow function Assignment ----------------`);
console.log(`1. write a arrow fun with no argument and no return value`);
let monday = () => {
    console.log(`'Good Morning, Today is Monday' `);
}
monday();
console.log(`---------------------------------------------------------------`);

console.log(`2. write a arrow fun with 3 argument and no return value to perform multiplication`);
console.log(`a. value to be passed --> 5,5,2`);
const multiplication = (no1,no2,no3=2) => {
    let multiply = no1*no2*no3;
    console.log(`Multiplication is : ${multiply}`);
}
multiplication(5,5,2);
console.log(`b. Invoke same function for values --> 10,4 and 3rd default parameter`);
multiplication(10,4);
console.log(`---------------------------------------------------------------`);
console.log(`3. write a arrow fun with 5 argument and return value to perform addition`);
console.log(`a. value to be passed --> 100,100,200,349,756`);
const addition = (a,b,c,d,e) => {
    let sum = a + b + c + d + e;
    return sum;
}
let answer = addition(100,100,200,349,756);
console.log(`Sum of 5 given number is : ${answer}`);
let result = addition("I am ","learning ","ES6 ","features ","in depth.");
console.log(`Sum of given string is : ${result}`);
console.log(`---------------------------------------------------------------`);