let str = "big black bug bit a big black dog on his big black nose";
let demo = "success";
//let givenstr = "I am not gonna live forever, but I wanna live while I am alive"; 

let repeatedChar = function(strg) {
    let repeat="";
    for(let i = 0; i <= strg.length; i++) {
        for(let j = i+1; j <= strg.length; j++) {
            if (strg.charAt(i) == strg.charAt(j) && repeat.indexOf(str.charAt(j)) == -1) {
                repeat = repeat + strg.charAt(i)
            }
        }
    }
    console.log(repeat);
}
repeatedChar(str);
repeatedChar(demo);
