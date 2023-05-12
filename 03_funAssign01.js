console.log("..........Assignment No.2 .................");
function firstFun(){
    console.log("I am First Function with no return type.");
}
firstFun();

function secondFun(){
    console.log("I am Second Function with no return type.");
}
secondFun();
console.log("...............................................");

var fName = "Varsha";
var lName = "Take";
var collName = "Dhole Patil College of Engineering,wagholi.";
function personalDetails(firstName,lastName,collegeName){
    console.log("My first name is:",firstName);
    console.log("My last name is :",lastName);
    console.log("My college name is :",collegeName);
}
personalDetails(fName,lName,collName);
console.log("...............................................");

var one = "Virat";
var two = "Anushka";

var firstVal = 1000;
var secondVal = 2000;
function swapValuesDude(argsOne,argsTwo){
    console.log("Before swap : ",argsOne ,":", argsTwo);
    var temp = argsOne;
    argsOne = argsTwo;
    argsTwo = temp;
    console.log("After Swap : ",argsOne ,":", argsTwo);
}
swapValuesDude(one,two);
swapValuesDude(firstVal,secondVal);
console.log("..................................................");

var a = 10.23;
var b = 600;
var c = 40;

var hello = "Hello";
var good = " Good";
var morning = " Morning";
function addThreeValues(valA,valB,valC){
    console.log("Addition is : ",valA + valB + valC);
}
addThreeValues(a,b,c);
addThreeValues(hello, good, morning);
console.log(".....................................................");



