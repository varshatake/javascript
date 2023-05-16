
console.log(`...... Step 1 for Male candidates .........`);
function maleMarriageEligibility(gender, age, boyName) {
 var eligibilityCheckMale = gender == "Male" && age >= 21 ? `Hey "${boyName}" you are eligible for Marriage` : `Hey "${boyName}" you are not eligible for Marriage`
 console.log(`${eligibilityCheckMale}`);
}
maleMarriageEligibility(`Male`,25,`Billgates`);
maleMarriageEligibility(`Male`,17,`Stew Jobs`);
console.log(`.............................................................`);

console.log(`...... Step 1 for Female candidates .........`);
function femaleMarriageEligibility(gender, age, girlName) {
    var eligibilityCheckFemale = gender == "Female" && age >= 18 ? `Hey "${girlName}" you are eligible for Marriage` : `Hey "${girlName}" you are not eligible for Marriage`;
    console.log(`${eligibilityCheckFemale}`);
}
femaleMarriageEligibility(`Female`,16,`Jenifer`);
femaleMarriageEligibility(`Female`,27,`Malida Gates`);
