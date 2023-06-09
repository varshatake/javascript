class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`1. Find all employee from wipro company`);
const arrayWiproEmp = arrayEmps.filter((wiproEmp) => {
    return wiproEmp.emp_company=="Wipro";
});
const arrayWiproEmpNames = arrayWiproEmp.map((empName) => {
    return empName.emp_name;
}) 
console.log(`Employee from wipro company :`,arrayWiproEmpNames);
console.log(`---------------------------------------------------------------`);
console.log(`2. Find all employee from IT Or HR dept`);
const arraydept = arrayEmps.filter((emp) => {
    return emp.emp_dept=="IT" || emp.emp_dept=="HR";
});
const deptArray = arraydept.map((deptOfEmp) => {
    return deptOfEmp.emp_dept;
});
console.log(`Employee from IT or HR department`,deptArray);
console.log(`---------------------------------------------------------------`);
console.log(`3. Find all the employee whos emp id are greater than 50`);
const arrayId = arrayEmps.filter((emp) => {
    return emp.emp_id > 50;
});
const arrayEmpId = arrayId.map((empId) => {
    return empId.emp_name, empId.emp_name;
})
console.log(`Employee id and name whoes emp id are greater than 50`,arrayEmpId);
console.log(`---------------------------------------------------------------`);
console.log(`4. Find all the employee whos name startsWith 'A' or 'V' 'M'`);
let arrayStartwith = arrayEmps.filter((empName) => {
    if (empName.emp_name.startsWith('A') || empName.emp_name.startsWith('V') || empName.emp_name.startsWith('M') ) {
        return empName;
    }
});
const arrayAvm = arrayStartwith.map((emp) => {
    return emp.emp_name;
})
console.log(`Employee name start with A, V ,M :`,arrayAvm);
console.log(`---------------------------------------------------------------`);
console.log(`5. Find the average salary of employee `);
const arraySal = arrayEmps.map((empSal) => {
    return empSal.emp_salary;
});
const arraysalary = arraySal.reduce((runningTotal,value) => {
    return runningTotal + value;
});
let avgSalary = arraysalary/arraySal.length;
console.log(`Average salary is :`,avgSalary);
console.log(`---------------------------------------------------------------`);
console.log(`6. Find the average salary for IT department `);
const arrayIt = arrayEmps.filter((emp) => {
    return emp.emp_dept=="IT";
});
const salIt = arrayIt.map((empItSal) => {
    return empItSal.emp_salary;
});
const arraysal = salIt.reduce((runningTotal,value) => {
    return runningTotal + value;
});
const arrayAvg = arraysal/salIt.length;
console.log(`Average salary :` ,arrayAvg);
console.log(`---------------------------------------------------------------`);