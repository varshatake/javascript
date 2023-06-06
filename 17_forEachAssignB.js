class Employee {
    constructor(empId , empName , empDept , empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33, "Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`1. Find out 'TCS' employee details and log name and company`);
arrayEmployee.forEach((emp) => {
    if(emp.empCompany=='TCS') {
        console.log(`Name : ${emp.empName}, Company : ${emp.empCompany}`);
    }
});
console.log(`.............................................................`);
console.log(`2. Find the employee with salary greater than or equal 50000`);
arrayEmployee.forEach((emp) => {
    if(emp.empSalary >=50000) {
        console.log(`Employee details : ${emp.empId},${emp.empName},${emp.empCompany},${emp.empSalary},${emp.empCompany}`);
    }
});
console.log(`.............................................................`);
console.log(`3. Find the sum of all employee salary`);
let sumOfSalary = 0;
arrayEmployee.forEach((emp) => {
    sumOfSalary = sumOfSalary + emp.empSalary;
});
console.log(`Sum of salary : ${sumOfSalary}`);
console.log(`.............................................................`);
console.log(`4. Find the average salary `);
let average = 0;
arrayEmployee.forEach((emp) => {
    average = sumOfSalary/arrayEmployee.length;
    console.log(`Average salary : ${average}`);
});
console.log(`.............................................................`);
console.log(`5. Find the 'IT' or 'HR' department employee whoes salary is greater than equal to 75000`);
arrayEmployee.forEach((emp) => {
    if(emp.empDept=='IT' || emp.empDept=='HR') {
        if(emp.empSalary >= 75000)
        console.log(`Employee details : ${emp.empId},${emp.empName},${emp.empCompany},${emp.empSalary},${emp.empCompany}`);
    }
});
console.log(`.............................................................`);