const str = "My name is Varsha";
let strlen = str.length;

let index = strlen-1;
while(index >= 0) {
    let answer = str.charAt(index);
    index--;
    console.log(answer);
}

//tricky questions
var x=10;
var y= x++;
var z = ++x;
console.log(x,y,z);

var x = [];
var y= [];
console.log(x==y);
console.log(x===y);


