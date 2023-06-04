const arrayNums = [20,3,4,56,90,400,49];
console.log(`perform shallow clone on arrayNum update cloned array with values - 55 ,66`);

console.log(`Original Array : ${arrayNums}`);
const shallowClonedArray = arrayNums;
console.log(`Shallow clone : ${shallowClonedArray}`);

shallowClonedArray.push(55,66);
console.log(`Shallow clone : ${shallowClonedArray}`);
console.log(`-----------------------------------------------------------------------------`);
console.log(`perform deep clone on arrayNum using spread operator update cloned array with values - 10 ,25`);

console.log(`Original Array : ${arrayNums}`);
const deepCloneArray = [...arrayNums];
deepCloneArray.push(10,25);
console.log(`Deep clone array : ${deepCloneArray}`);
console.log(`-----------------------------------------------------------------------------`);
console.log(`Given other Array --> arrayEven[2,30,14,8] merge or concat with arrayNums`);
const arrayEven = [2,30,14,8];
console.log(`Given array : ${arrayEven}`);
const concatArray = arrayNums.concat(arrayEven);
console.log(`Merged Array : ${concatArray}`);
console.log(`-----------------------------------------------------------------------------`);
console.log(`create employee_info object`);
const employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        june_month : "65,0000INR",
    },
    address : {
        locality: {
            colony: "OM Vrindavan Society",
            street : "Kanch Pokli,431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India",
    },
    mobiles :["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"],
};

console.log(`Employee details : a --> Address : locality,city,state and country`);
const locality = employee_info.address.locality;
console.log(`Locality :`,locality);
const city = employee_info.address.city;
console.log(`City :`,city);
console.log(`State :`,employee_info.address.state);
console.log(`State :`,employee_info.address.country);
const mobNo = employee_info.mobiles;
console.log(`Mobiles :`,mobNo);
console.log(`-----------------------------------------------------------------------------`);
console.log(`Perform deep copy using json stringify`);
const julySalary = employee_info.salary.july_month;
console.log(`Before clone Salary :`,julySalary);
const deepCloneEmployee = JSON.parse(JSON.stringify(employee_info));
deepCloneEmployee.salary.july_month = "80,000INR";
console.log(`After clone :`,deepCloneEmployee.salary.july_month);
console.log(`b . Update country`);
console.log(`Before update country :`,employee_info.address.country);
employee_info.address.country = "United Kingdom";
console.log(`After update country :`,employee_info.address.country);





