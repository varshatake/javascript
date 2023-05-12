

function display(){
    console.log("Display");
}
console.log("Before function call...");
display();
console.log("After function call...");
console.log("...............................................................");


console.log(".......Assignment No.1..........");
console.log("***Swap Variables***");
var sweety= "Sweety";
var cutie = "Cutie";

function swaptwoVariable(argOne , argTwo){
    console.log("Before swap : ","Sweety :", argOne);
    console.log("                 Cutie :",argTwo);
    var temp = sweety;
    sweety = cutie;
    cutie = temp;
    console.log("After swap : ","Sweety :",sweety,);
    console.log( "               Cutie :",cutie);
}
swaptwoVariable("Arg one :",sweety,"Arg two :",cutie);
console.log("...............................................................");

console.log("***Swap Three Variables***");
var num1 = 100;
var num2 = 200;
var num3 = 300;

function swapThreeVariable(valOne,valTwo,valThree){
    console.log("Before Swap : ","Num-1 :",valOne);
    console.log("                 Num-2 :",valTwo);
    console.log("                 Num3 :",valThree);

    var temp = num1;
    num1 = num2;
    num2 = num3;
    num3 = temp;

    console.log("After Swap : ","Num-1 :",num1);
    console.log("                 Num-2 :",num2);
    console.log("                 Num3 :",num3);
}
swapThreeVariable(num1,num2,num3);
console.log("............................................................");