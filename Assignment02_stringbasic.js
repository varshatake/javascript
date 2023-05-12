console.log(".........Assignment No - 2 .............");

var keepItUp = "  Hey you are doing good, keep it up   ";

function stringHandsOn() {
   console.log("The given string is :",keepItUp);
   var keepLength = keepItUp.length;
   console.log("Length of given string is : ",keepLength);

   var trimmedkeepitup = keepItUp.trim();
   console.log("After Trim string is :", trimmedkeepitup);

   var lengthafterTrim = trimmedkeepitup.length;
   console.log("Length of string after trim is :",lengthafterTrim);

   var extraSpaces = keepLength - lengthafterTrim;
   console.log("Extra Spaces are :" ,extraSpaces);

   var charAtzreothIndex = trimmedkeepitup.charAt(0);
   var charAtlastIndex = trimmedkeepitup.charAt(33);
   console.log("First and Last character in string is : ",charAtzreothIndex,"And",charAtlastIndex);
   console.log("..................................................");
}
stringHandsOn();