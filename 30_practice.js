let demoStr = "Hello , Good Morning all";

(function (str) {
    console.log(`Hello , I am inside IIFE - Immediatly invoked function expression`);
    console.log(str);
}) (demoStr);

var ans = function() {
    console.log(`Hello , Dhani`);
}
();


//  WAP To Print * Pattern

//let star = '*';
let starPattern = function(star) {
let result = '';
for(let index= 0 ; index <=5 ; index++) {
    result = result + star;
    console.log(result);
}
}
starPattern('*');
// starPattern('&');
// starPattern('#');
console.log(`-------------------------------------------------------------------`);

// WAP to count vowels
let practiceStr = "Hi , I am Varsha Shaurya Bharat Take";
let count =0;
let charOfVowels = '';
for(let index=0; index < practiceStr.length; index++) {
    let char = practiceStr.charAt(index);
    if(char == 'a' || char =='e' || char=='i' || char=='o' || char=='u' ||
       char == 'A' || char == 'E' || char =='I' || char == 'O' || char == 'U' ) {
        charOfVowels = charOfVowels + " " + char;
        count++;
    }
}
console.log(`Vowels characters in string : `,charOfVowels);
console.log(`total vowels : ${count}`);
console.log(`-----------------------------------------------------------`);
// WAP fibonacci series

//let no =10;
let fiboSeries = function(no) {
let n1 =0 ;
let n2 = 1;
let nextTerm;
var addition = 0;
for(let index =1; index < no; index++) {
    nextTerm =n1;
    nextTerm = n1 +n2;
    n1 = n2;
    n2 = nextTerm;

    addition = addition + " " + nextTerm;
}
console.log(`Fibonacci series : ${addition}`);
}
fiboSeries(10);
console.log(`-------------------------------------------------------------`);

let pallindrome = function(givenStr) {
    let spiltedStr = givenStr.split('');
    let reverseStr = spiltedStr.reverse();
    let joinedChar = reverseStr.join('');
    if(givenStr==joinedChar)
    {
        console.log(`It's Pallindrome `);
    }
    else{
        console.log(`It's not pallindrome`);
    }
}
pallindrome('madam');
pallindrome('sunday');
pallindrome('nayan');
console.log(`-------------------------------------------------------------`);

let pall = function(str){
    for(let index=0; index < str.length; index++){
        let charInStr = str.charAt(index);
        for(let j=0; j < (str.length-1); j++){
            let charInJloop = str.charAt(j);
        }
    }
    if(charInStr==charInJloop) {
        console.log(`It's Pallindrome`);
    }
    else{
    console.log(`Its not Pallindrome`);
    }
}
pall('madam');
pall('141');
pall('monday');
pall('mom');
console.log(`-------------------------------------------------------------`);

const str = "My name is Varsha";
let strlen = str.length;

let index = strlen-1;
while(index >= 0) {
    let answer = str.charAt(index);
    index--;
    console.log(answer);
}




