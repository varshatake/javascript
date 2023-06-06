const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`1. add 10 into Each element and log new array result `);
let newArray = [];
arrayNumbers.forEach((number) => {
    newArray.push(10 + number);
});
console.log(`New Array :`,newArray);
console.log(`--------------------------------------------------------`);
console.log(`2. Square the each array element`);
let arraySquare = [];
arrayNumbers.forEach((number) => {
    arraySquare.push(number * number);
});
console.log(`Square :`,arraySquare);
console.log(`--------------------------------------------------------`);
console.log(`3. Add the index value into its corresponding each array element`);
let arrayResult = [];
arrayNumbers.forEach((number,index) => {
    arrayResult.push(index + number); 
});
console.log(`Result : `,arrayResult);
