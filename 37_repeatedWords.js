let givenstr = "I am not gonna live forever, but I wanna live while I am alive"; 

let findDuplicate = givenstr => {
    let splitStr = givenstr.split(" ");
    let result = [];

    for(let index = 0; index < splitStr.length; index++) {
        if(splitStr.indexOf(splitStr[index]) !== splitStr.lastIndexOf(splitStr[index])) {
            if(!result.includes(splitStr[index])) {
                result.push(splitStr[index]);
            };   
        };
    };
    return result.join(" ");
};
console.log(findDuplicate(givenstr));

console.log(`-------------------------------------------------------------`);
const str = "big black bug bit a big black dog on his big black nose";
const findDuplicateWords = str => {
   const strArr = str.split(" ");
   const res = [];
   for(let i = 0; i < strArr.length; i++){
      if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
         if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
   return res.join(" ");
};
console.log(findDuplicateWords(str));