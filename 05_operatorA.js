console.log(`....05. Operator Assignment .......`);
console.log(`1. Normal Function for "javascript" "Google chrome" "developer smart".`);
function squareOfWordLength(str) {
var lengthOFWord = str.length;
console.log(`Length of word is : ${lengthOFWord}`);
var squareOfword = lengthOFWord * lengthOFWord;
console.log(`String Length square is : ${squareOfword}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`....................................`);

function reactDev() {
    var stringAsgiven = "I am Angular Developer";
    var strlength = stringAsgiven.length;
    console.log(`Length of Given string is : ${strlength}`);
    var splittedAns = stringAsgiven.split(" ");
    console.log(`Splitted string is : ${splittedAns}`);
    var splittedAnslength = splittedAns.length;
    console.log(`Total no of words available in String is : ${splittedAnslength}`);
    var divideResult = strlength / splittedAnslength;
    console.log(`---Division---`);
    console.log(`String length / divided by total no of words : ${divideResult}`);
    var multiplyResult = strlength * splittedAnslength;
    console.log(`---Multiplication---`);
    console.log(`String length * total no of words : ${multiplyResult}`);
}
reactDev();