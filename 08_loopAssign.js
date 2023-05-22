console.log(`.................count vowels.................`);

var str = "I am very good IT Developer";
var count =0;
    
 function totalNoofVowels() {     
    for(let index=0; index<str.length; index++ ) {
        var charact = str.charAt(index);

        if(charact== 'a' || charact=='e' || charact=='i'||charact=='o'||charact=='u'||
        charact=='A'||charact=='E'||charact=='I'||charact=='O'||charact=='U'){
            //console.log(charact);
            count++;
        }
    }
}
totalNoofVowels(str);
console.log(`Vowels are : ${count}`);

console.log(`.............Cube............`);

function sumOfCube() {
    var a = 0;
    for(let index=1; index<=5; index++) {
        var cubeis = index * index * index; 
        console.log(`Cube at index ${a} is: ${cubeis}`); 
        a= a + cubeis;  
    } 
    
    console.log(`sum -->${a}`);
}
sumOfCube();

console.log(`...............odd positioned character..............`);

var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT champ";
function oddPositionedCharacter(word) {
    var strg ="";
    for(let index=0; index<=word.length; index++){
        var char = word.charAt(index);
        if(index% 2!==0 && char!==" ") {
            strg = strg + char;        
        }
    }
    console.log(`Odd position character : ${strg}`); 

}
console.log(`Given String is : "${str1}"`);
oddPositionedCharacter(str1);
console.log(`Given String is : "${str2}"`);
oddPositionedCharacter(str2);






