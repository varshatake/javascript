let bankSbi = {
    bankName : "State Bank of India",
    accountNo : 50100356788,
    ifsc : "SBI56478903",
    intrestRate : "8.75%",
};
console.table(bankSbi);

let bankLocation = {
    street : "Wakad Road",
    city : "Pune",
    pinCode : 4103345,
};
console.table(bankLocation);
Object.assign(bankSbi,bankLocation);
console.table(bankSbi);

let rateOfInterest = {
    homeLoanInterest : "8.61%",
    personalLoanInterest : "8.75%",
    dualInterest : "8.60%",
};
console.table(rateOfInterest);
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);

console.log(`Traversing an Merged object using for in loop`);
for (const index in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails,index)) {
        const property_value = sbiDetails[index];
        console.table(`${index},${property_value}`);
    }
}

