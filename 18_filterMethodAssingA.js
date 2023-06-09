const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`1. Find out all the numbers which are greater than 50 and log on console`);
const arrayGreaterNo = arrayNumbers.filter((num) => {
    return num>50;
});
console.log(`No greater than 50 ->`,arrayGreaterNo);
console.log(`--------------------------------------------------------------------`);
console.log(`2. Find out all even no`);
const arrayEven = arrayNumbers.filter((evenNo) => {
    return evenNo%2==0;
});
console.log(`Even no :`,arrayEven);
console.log(`--------------------------------------------------------------------`);
console.log(`3. Find out all odd no`);
const arrayOdd = arrayNumbers.filter((oddNo) => {
    return oddNo%2!=0;
});
console.log(`Odd no :`,arrayOdd);
console.log(`--------------------------------------------------------------------`);
console.log(`4. Find out all no which are multiple of '5'`);
const arrayFive = arrayNumbers.filter((noFive) => {
    return noFive%5==0;
});
console.log(`No which are multiple of 5`,arrayFive);
console.log(`--------------------------------------------------------------------`);
console.log(`5. Find out all no which are between 20 and 50`);
const arraybetween = arrayNumbers.filter((noBetween) => {
    return noBetween > 20 && noBetween < 50;
});
console.log(`values between 20 and 50 :`,arraybetween);
console.log(`--------------------------------------------------------------------`);