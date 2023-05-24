console.log(`   Assignment To count character 'a' or 'A'        `);

function countCharacter(strg) {
    let ct = "";
    for(let index=0; index<=strg.length; index++) {
        totalchar = strg.charAt(index);
        if(totalchar=="a" || totalchar=="A") 
        {
            //console.log(totalchar);
            ct++;
        }
    }
    return ct;
}
let givenstring1 = "I AM Learning Javascript, The language of internet.";
console.log(`Given string 1 : ${givenstring1}`);
let answer = countCharacter(givenstring1);
console.log(`Character count for ['a' or 'A'] in String 1 : ${answer}`);
let givenstring2 = "My favorite movie is LAggAn."
console.log(`Given string 2 : ${givenstring2}`);
answer = countCharacter(givenstring2);
console.log(`Character count for ['a' or 'A'] in String 2 : ${answer}`);
