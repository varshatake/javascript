console.log(`......... NO - 1 ........`);
var greaterNumber = function(num1 , num2) {
    //using ternary operator
  var result = num1 >= num2 ? `${num1} is greater` : `${num2} is greater.`
  console.log(`Greater no   : ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`...... NO - 2 .......`);
var evenno = true;
var oddno = false;
var isEvenOrOddNum = function (numCheck) {
var ans = numCheck % 2 == 0 ? true : false;
console.log(`Even or Odd no result is : ${ans}`);
var ans1 = numCheck % 2 == 0 ? `${numCheck} is EVEN No.` : `${numCheck} is ODD No.`
console.log(`${ans1}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`...... NO - 3 .........`);
var wordLength = function (wordName) {
    var lengthAns = wordName.length;
    console.log(`Length of word is : ${lengthAns}`);
    var lenOfWord = lengthAns % 2 == 0 ? `EVEN No` : `ODD No`;
    console.log(`Even and Odd result from length of word is : ${lenOfWord}`);
    return wordLength;
}
wordLength(`Javascript`);
wordLength(`developer`);
wordLength(`Google`);