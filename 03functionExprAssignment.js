console.log(`............Assignment No - 2 ...................`);
console.log(`*** 1. Square of Number***`);
var num = 5;
var num1 =6;
var num2 = 25;
var num3 = 100;
var numberSquare = function (suNum) {
    suNumr = suNum * suNum;
  console.log(`Square of number is : ${suNumr}`);
}
numberSquare(num);
numberSquare(num1);
numberSquare(num2);
numberSquare(num3);
console.log(`.........................................`);

console.log(`2. Check and log the type of function.`);
console.log(`Type of Function is : ${typeof numberSquare}`);
console.log(`..........................................`);

console.log(`3. Function expression to get the area of rectagle plot. "Length = 499" & "width = 917".`);
var len = 499;
var wi = 917;
var areaRectangle = function(lengthRect,widthRect) {
    area = lengthRect * widthRect;
    console.log(`Area of Rectangle plot is : ${area}`);
}
areaRectangle(len,wi);
console.log(`..............................................`);
console.log(`4. W A FE with two args and should swap the passed values and log on console before and after swap.`);
var vName = "Virat";
var aName = "Anushka";

var no1 = 1000;
var no2 = 2000;
var swapValues = function(nameOne,nameTwo) {
    console.log(`Before swap the values are : ${nameOne} And ${nameTwo}`);
    var temp = nameOne;
    nameOne = nameTwo;
    nameTwo = temp;
    //console.log(`Before swap no values are : ${no1} And ${no2}`);
    console.log(`After swap values are : ${nameOne} And ${nameTwo}`);
}
swapValues(vName,aName);
swapValues(no1,no2);
console.log(`...............................................`);
console.log(`5. W A FE which can perform the below steps for string Given string. `);
var givenString = "JS the most popular language of internet."
var stringJs = function() {
    console.log(`A. Find the total characters in string.`);
    var stringLength = givenString.length;
    console.log(`Length of given string is : ${stringLength}`);
    
    console.log(`Using splite.`);
    var splittedString = givenString.split("");
    console.log(`Splitted string is = ${splittedString}`);
    console.log(`Total alphabetical characters count is : ${splittedString.length}`);
   
    console.log(`B. find the character at index 6.`);
    var charatIndexSix = givenString.charAt(6);
    console.log(`Character at index 6 is : ${charatIndexSix}`);
    
    console.log(`C. find character at index 11`);
    var charatIndexElevan = givenString.charAt(11);
    console.log(`Character at index 11 is : ${charatIndexElevan}`);
   
    console.log(`D. find the last character using length property`);
    var lastcharacter = givenString.slice(39,41);
    console.log(`Last character using length property is : ${lastcharacter}`);
    
    console.log(`E. find the first character in string`);
    var firstCharacter = givenString.charAt(0);
    console.log(`First character in string is : ${firstCharacter}`);
    
    console.log(`F. find the total no of words in given string and calculate the square of it`);
    var stringSplite = givenString.split(" ");
    console.log(`After Splite String is : ${stringSplite}`);
    var stringSplitelen = stringSplite.length;
    console.log(`Total no of words are : ${stringSplitelen}`);
    var splitesquare = stringSplitelen * stringSplitelen;
    console.log(`Square of it is : ${splitesquare}`);
    
}
stringJs();
