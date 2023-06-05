console.log(`Remove duplicate element from an array`);

const arrayNum = [11,3,4,11,4,7,3];
console.log(`Given array :`,arrayNum);
const setd = [...new Set(arrayNum)];
console.log(setd); 

console.log(`Given string value : "How are you mate."`);
const givenStr = "How are you mate";
//HoW ArE YoU MatE
let newChar = "";
let arrayWordLen = givenStr.split(" ");
for (const word of arrayWordLen) {
    for (let index = 0; index < word.length; index++) {
        let char = ""
        if(index==0 || index==word.length-1)
        {
            char = word[index].toUpperCase();
        }
        else {
            char = word[index];
        }
        newChar = newChar + char;
    }
    newChar = newChar + " ";
}
console.log(`output : ${newChar}`);



