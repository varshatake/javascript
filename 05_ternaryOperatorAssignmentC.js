console.log(`..............Ternary operator Assignment...............`);
var tcsInterviewEligibility = function(gradScore,hscScore,sscScore,candidateName) {
var answer = gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrates.. ${candidateName} you are eligible for Interview ` : `Else unfortunately ${candidateName} you are not eligible for interview.`; 
console.log(`${answer}`);
}
tcsInterviewEligibility(80,86,90,`'Bharat'`);
tcsInterviewEligibility(70,65,55,`'Poonam'`);
tcsInterviewEligibility(60,79,88,`'Kavita'`);