console.log(`--- Assignment - JavaScript logical program ---`);

const array = [10, 5, 'a', 'b','s', 'h','d','e', 11];

// Ex:Numbers: 5,10,11
// Alphabets: a,b,h

// array.sort();
// console.log(array);

const arrayLetters = array.filter((element) => {
    if (typeof element=='string') {
        return element;
    }
});
//console.log(arrayLetters);
const sortedLetter = arrayLetters.sort();
console.log(`Sorted letter :`,sortedLetter);

const arrayNumber = array.filter((element) => {
    if (typeof element=='number') {
        return element;
    }
});
//console.log(`Numbers :`,arrayNumber);
const sortedArrayNo = arrayNumber.sort((num1,num2) => {
    return num1 > num2 ? 1 : -1;
});
console.log('Sorted Numbers :',sortedArrayNo);

let arraynumbers =[];
array.forEach(element => {
    if (typeof element=='number') {
        arraynumbers.push(element);
    }
});
console.log(arraynumbers);
arraynumbers.sort((n1,n2) => {
    return n1 > n2 ? 1 : -1;
});
console.log(arraynumbers);

let arrayAbh =[];
array.forEach(element=> {
    if(typeof element=='string') {
        arrayAbh.push(element);
    }
});
console.log(arrayAbh);
arrayAbh.sort();
console.log(arrayAbh);


array.sort();
console.log(array);

