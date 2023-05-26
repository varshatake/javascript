console.log(`        Array Assignment 02             `);

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`-------------- 1. find length ---------------`);
let arrayLength = arrayNumbers.length;
console.log(`Legth of given Array is : ${arrayLength}`);

console.log(`-------------- 2. Log First and Last Element ---------------`);
let firstElement = arrayNumbers[0];
console.log(`First Element in Array is : ${firstElement}`);
let lastElement =arrayNumbers[arrayLength-1];
console.log(`Last Element in Array is : ${lastElement}`);

console.log(`-------------- 3. Log Third Last Element ---------------`);
let thirdLastElement = arrayNumbers[arrayLength-3];
console.log(`Third Last Element in Array is : ${thirdLastElement}`);

console.log(`-------------- 4. Find all even no ---------------`);
for (const element of arrayNumbers) {
    if(element % 2==0){
        console.log(`Even Elements are : ${element}`); 
    }
}

console.log(`-------------- 5. Find all odd no ---------------`);
for (const oddNo of arrayNumbers) {
    if(oddNo % 2!==0){
        console.log(`Odd Elements are : ${oddNo}`); 
    }
}

console.log(`-------------- 6. Find all Even Positioned Elements ---------------`);
let evenPosition=0;
let sumEven=0;
for (let index=0; index<=arrayLength; index++) {
    if (index%2==0) {
        evenPosition =arrayNumbers[index];
        console.log(`Even Positioned Elements are : ${evenPosition}`);
        sumEven = sumEven + arrayNumbers[index];
    }
}
console.log(`Sum of all Even positioned Element : ${sumEven}`);

console.log(`-------------- 7. Find all Odd Positioned Elements ---------------`);
let oddPosition=0;
let sumofOdd =0;
for(let index=0; index<arrayLength; index++) {
    if(index%2!=0) {
        oddPosition=arrayNumbers[index];
        console.log(`Odd Positioned Elements are : ${oddPosition}`);
        sumofOdd = sumofOdd + arrayNumbers[index];
    }
}
console.log(`Sum of all Odd positioned Element : ${sumofOdd}`);


console.log(`-------------- 8. Find sum of All Array Elements ---------------`);
let allNumAddition =0;
for (const allNumber of arrayNumbers) {
    allNumAddition = allNumAddition + allNumber; 
} 
console.log(`Addition of all elements in Array : ${allNumAddition} `);

console.log(`-------------- 9. Find the Numbers which are Multiple of 5 ---------------`);
let num =0;
for (let indexx = 0; indexx <=arrayLength; indexx++) {
    num= arrayNumbers[indexx];
    if (num%5==0) {
        console.log(`Numbers which are multiple of 5 : ${num}`);   
    }
}

console.log(`-------------- 10. Is number 115 available in Array ---------------`);
let oneOnefive = arrayNumbers.includes(115);
console.log(`Is '115' available in Array : ${oneOnefive}`);

console.log(`-------------- 11. Is number 23 available in Array ---------------`);
let twentyThree = arrayNumbers.includes(23);
console.log(`Is '23' available in Array : ${twentyThree}`);

console.log(`-------------- 12. Insert numbers--> 55, 66 before index 3 ---------------`);
console.log(arrayNumbers);
arrayNumbers.splice(2,0,55,66);
console.log(arrayNumbers);

console.log(`-------------- 13. Delete 3 numbers startin from index 4 ---------------`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);


















