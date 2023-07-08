const arraySimple = [12,5,34,9,23,10];

let answer = arraySimple.slice(0,3);
console.log(answer);

let mapResult = arraySimple.map((element) => {
    return element;
});
console.log(mapResult);

let filterResult = arraySimple.filter((num) => {
    return num % 2==0 || num %3==0;
});
console.log(filterResult);

const arrSalary = [10000,20000,30000,60000,70000,90000];
let mapArrSal = arrSalary.map((sal) => {
    return sal;
});
console.log(mapArrSal);

let lengthSal = arrSalary.length;


let reduceResultAvg = arrSalary.reduce((runningTotal,value) => {
    return runningTotal + value;
});
console.log(`Addition of all elements is :`,reduceResultAvg);
let avg= reduceResultAvg /lengthSal;
console.log(avg);
