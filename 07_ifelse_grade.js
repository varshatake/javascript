console.log(`...............07_ifelse_grade...................`);

function voteEligibility(age) {
    if (age==null || age==undefined) {
        console.log(`Invalid data null OR undefined.`);
    } else {
        if ((age<=0) || (age>120)) {
            console.log(`Invalid data Age is = ${age}`);
        } else {
            if (age<18) {
                console.log(`Not Eligible for vote Age ${age} is less than 18.`);
            } else {
                console.log(`you are Eligible For Vote.`);
            }
        }
    }
}
voteEligibility(45);
console.log(`..........................................`);
voteEligibility(17);
console.log(`..........................................`);
voteEligibility(8);
console.log(`..........................................`);
voteEligibility(20);
console.log(`..........................................`);
voteEligibility(-10);
console.log(`..........................................`);
voteEligibility(200);
console.log(`..........................................`);
voteEligibility(0);
console.log(`..........................................`);
voteEligibility(undefined);
console.log(`..........................................`);
voteEligibility(null);
console.log(`..........................................`);