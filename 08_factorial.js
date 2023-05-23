// 5! = 5 * 4 * 3 * 2 * 1

function factorialofNo(no) {
    let factorial = 1; // 120
    if(no==undefined || no == null || no == "100" || isNaN(no)) {
        console.log(`Invalid scenario ${no}.`);
    }else {
    if(no==0) {
        console.log(`Factorial of ${no} is 1`);
    }
    }
    for (let index = no; index >= 1; index--) { // index = 5  4  3  2  1  0
        factorial = factorial * index; // 120 * 1 
    }
    return factorial;
}
console.log(`         Factorial           `);
let result = factorialofNo(5);
console.log(`Factorial of 5 is --> ${result}`);
result = factorialofNo(3);
console.log(`Factorial of 3 is -->${result}`);
result = factorialofNo(null);
result = factorialofNo(8);
console.log(`Factorial of 8 is -->${result}`);
result = factorialofNo(undefined);
result = factorialofNo(9);
console.log(`Factorial of 9 is -->${result}`);
result = factorialofNo(NaN);
result = factorialofNo(0);

