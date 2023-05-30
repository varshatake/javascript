let professor = {
    name : "Prof. Pawar sir",
    department : "Information Technology",
    subject : "Mathematics",
    collegeName : "COEP",
    gender : "Male",
    city : "Pune",
    PIN : 223344,
    degrees : {
        engineering : 'CSC',
        PHD : 'Adv. Computing', 
    },
    //array
    certificates : ['Hacker Rank participation','certificate in IFE course','Certificate in Advance programming'],
    values:function() {
        let degree = `Engineering degree: ${this.degrees.engineering}, PHD degree : ${this.degrees.PHD}`;
        return degree;
    },
};
let prof = `Name : ${professor.name}, Department : ${professor.department}, Subject : ${professor.subject}, CollegeName : ${professor.collegeName}, Gender : ${professor.gender}, 
City : ${professor.city}, PIN Code :${professor.PIN}`;
console.log(`'professor properties :' ${prof}`);
console.log(`... concat all degrees in step 2 ....`);
const degree = professor.values();
console.log(`Total degrees are : ${degree}`);

console.log(`...... Add New property ......`);
professor.totalExperience = "14 years";
console.log(`Total experience : ${professor.totalExperience}`);

console.log(`.... Modify any property ......`);
console.log(`Existing PIN code property : ${professor.PIN}`);
professor.PIN = 415569;
console.log(`Modified PIN code property : ${professor.PIN}`);

console.log(`... Add one new certificate ....`);
console.log(professor.certificates);
professor.certificates.push("Oracle Certified"); 
console.log(professor.certificates);

let len = professor.certificates.length;
let lastProperty = professor.certificates[len-1];
console.log(`... Accessing Last Property ....`);
console.log(`Last Property of certificate Array : ${lastProperty}`);

//console.log(`Add oracle certificate : ${}`);

