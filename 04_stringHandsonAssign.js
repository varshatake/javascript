
console.log(`*********Assignment No. 01 *********`);
console.log(`Use string Template to log the result`);

var keepItUp = "  Hey you are doing good, keep it up   ";

function stringHandsOn() {
   console.log(`The given string is :,${keepItUp}`);
   var keepLength = keepItUp.length;
   console.log(`Length of given string is : ,${keepLength}`);

   var trimmedkeepitup = keepItUp.trim();
   console.log(`After Trim string is :, ${trimmedkeepitup}`);

   var lengthafterTrim = trimmedkeepitup.length;
   console.log(`Length of string after trim is :,${lengthafterTrim}`);

   var extraSpaces = keepLength - lengthafterTrim;
   console.log(`"Extra Spaces are :" ,${extraSpaces}`);

   var charAtzreothIndex = trimmedkeepitup.charAt(0);
   var charAtlastIndex = trimmedkeepitup.charAt(33);
   console.log(`First and Last character in string is : ,${charAtzreothIndex},"And",${charAtlastIndex}`);
   console.log(`..................................................`);
   console.log(`............Today remaining steps as follows..........`);

   console.log(`6. Count the total words available in string after step 3`);
   var aftertrimstringLength = trimmedkeepitup.length;
   console.log(`After Trim String Length is : ${aftertrimstringLength}`);
   console.log(`.................................................`);

   var splitgivenstring = trimmedkeepitup.split(" ");
   console.log(`${splitgivenstring}`);
   console.log(`Total No of words in given string is :${splitgivenstring.length}`);
   console.log(`...................................................`);

   console.log(`7.Index of word good from given string`);
   var indexOfgood = trimmedkeepitup.search("good");
   console.log(`Index of word good is : ${indexOfgood}`);
   console.log(`...................................................`);
   
   console.log(`8. Print the substring starting from index 22, using substring and slice`);
   var substringResult = trimmedkeepitup.substring(22);
   console.log(`Substring Result is at index 22: ${substringResult}`);
   console.log(`....................................................`);

   console.log(`Using slice method`);
   var sliceResult = trimmedkeepitup.slice(22);
   console.log(`Slice Result is at index 22: ${sliceResult}`);
   console.log(`...................................................`);

   console.log(`9. check is string ends with word "up" after step 3`);
   var endWith = trimmedkeepitup.endsWith("up");
   console.log(`String Ends with "up": ${endWith}`);
   console.log(`...................................................`);

   console.log(`10. check is string ends with word "Hey" after trimming`);
   var startWith = trimmedkeepitup.startsWith("Hey");
   console.log(`String Start with "Hey" : ${startWith}`);
   console.log(`...................................................`);

}
stringHandsOn();