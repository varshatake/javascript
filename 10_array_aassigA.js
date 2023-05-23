console.log(`             Array Assignment      `);
const arryFruit = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Array is : ${arryFruit}`);

let arrayFruit = ["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`..... 1. First and Last Element ......`);
let zeroIndexElement = arrayFruit[0];
console.log(`First Element is : ${zeroIndexElement}`);

let arrlength = arrayFruit.length;
//console.log(`Length of array is : ${arrlength}`);
let lastIndexElement = arrayFruit[arrlength-1];
console.log(`Last Element is : ${lastIndexElement}`);

console.log(`... 2.  Add element 'papaya' before banana .......`);
let addpapaya = arrayFruit.unshift("Papaya");
console.log(`Element added = ${arrayFruit} `);

console.log(`..... 3.  Remove 'Mango' from array .....`);
console.log(`Array before perform Remove : ${arrayFruit}`);
let removeEle = arrayFruit.splice(4,1);
console.log(`Fruit that we remove from Array is : ${removeEle}`);
console.log(`After perform remove Array is : ${arrayFruit}`);

console.log(`  4. Add/Insert 'Pinaaaple' to last position   `);
let addpineapple = arrayFruit.push("Pineapple");
console.log(`Add Element at Last position is : ${arrayFruit}`);

console.log(`  5. Insert an element 'Dragon fruit' before 'Water Melon'  `);
let insertEle = arrayFruit.splice(4,0,"Dragon Fruit");
console.log(`Insert element is : ${arrayFruit}`);

console.log(` 6. Replace element 'orange' with 'kiwi' `);
let replaceEle = arrayFruit.splice(2,1,"Kiwi");
console.log(`Replcaed Element is : ${arrayFruit}`);

console.log(`  7. Log the element starting from index 1 to 4 `);
let index1to4 = arrayFruit.slice(1,5);
console.log(`Access Element From 1 to 4 : ${index1to4}`);

console.log(`Array : ${arrayFruit}`);
console.log(` 8. select only last 3 element and log `);

let lengthofarray = arrayFruit.length;
let last = arrayFruit.slice(lengthofarray-3);
console.log(`Last 3 Elements are : ${last}`);

