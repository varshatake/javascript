const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`1. log the array element with its index using forEach() with arrow function`);
arrayNumbers.forEach((arrayElement,index) => {
    console.log(`Array element :`,   arrayElement   ,  `And   Index :` ,  index);
});
console.log(`----------------------------------------------------------------------------`);
console.log(`2. Find the positive numbers `);
let positiveNo = [];
arrayNumbers.forEach((arrayElement)=> {
    if(arrayElement > 0) {
        positiveNo.push(arrayElement);
    }
});
console.log(`Positive no : `,positiveNo);
console.log(`----------------------------------------------------------------------------`);
console.log(`3. Find the Negative numbers `);
let negativeArray =[];
arrayNumbers.forEach((arrayElement) => {
    if(arrayElement <0) {
        negativeArray.push(arrayElement);
    }
});
console.log(`Negative No : `,negativeArray);
console.log(`----------------------------------------------------------------------------`);
console.log(`4. Find the even no`);
let evenNoArray =[];
arrayNumbers.forEach((arrayElement) => {
    if(arrayElement%2==0) {
        evenNoArray.push(arrayElement);
    }
});
console.log(`Even No : `,evenNoArray);
console.log(`----------------------------------------------------------------------------`);
console.log(`5. Find sum of all element from arrayNumbers`);
let sumOfArrayNo = 0;
arrayNumbers.forEach((arrayElement) => {
    sumOfArrayNo = sumOfArrayNo + arrayElement;
});
console.log(`6 . Sum of all Numbers : ${sumOfArrayNo}`);
console.log(`----------------------------------------------------------------------------`);
console.log(`7. log only even indexed array value`);
let arrayEven = [];
arrayNumbers.forEach((arrayElement,index) => {
    if(index%2==0) {
        arrayEven.push(arrayElement);
    }
});
console.log(`Even indexed array value : `,arrayEven);

