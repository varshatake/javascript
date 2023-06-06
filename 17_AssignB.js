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

const employeeArray = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`1. Find all employee work in TCS and log employee name and company `);
for (const employeeInfo of employeeArray) {
    if(employeeInfo.empCompany=="TCS"){
    console.log(`Employee Name : ${employeeInfo.empName}, Company Name : ${employeeInfo.empCompany}`); 
    }
}
console.log(`------------------------------------------------------------------------------`);
console.log(`2. Find finance department employee. log department and Employee name `);
for (const employeeInfo of employeeArray) {
    if(employeeInfo.empDept=="Finance")
    {
    console.log(`Employee Name is : ${employeeInfo.empName}, Department : ${employeeInfo.empDept}`);
    }
}
console.log(`------------------------------------------------------------------------------`);
console.log(`3. Find the employee name whoes name starts with 'R'.`);
for (const employeeInfo of employeeArray) {
    if(employeeInfo.empName.startsWith('R')) {
        console.log(`Employee names that start with 'R' : ${employeeInfo.empId},${employeeInfo.empName},${employeeInfo.empDept},${employeeInfo.empSalary},${employeeInfo.empCompany}`);
    }
}
console.log(`------------------------------------------------------------------------------`);
console.log(`4. Find the employee whoes Salary is greater than 75000 and log empName , company ,Salary`);
for (const employeeInfo of employeeArray) {
    if(employeeInfo.empSalary >= 75000) {
    console.log(`Employee whoes salary is >75000 : ${employeeInfo.empName},${employeeInfo.empCompany},${employeeInfo.empSalary}`);
    }
}
console.log(`------------------------------------------------------------------------------`);
console.log(`5. Find the employee whoes salary is greater than or equal to 50000 and from IT department`);
for (const employeeInfo of employeeArray) {
    if(employeeInfo.empSalary>=50000 && employeeInfo.empDept=="IT") {
    console.log(`Employee info whos salaray >=50000: ${employeeInfo.empId},${employeeInfo.empName},${employeeInfo.empDept},${employeeInfo.empSalary},${employeeInfo.empCompany}`);
    }
}
console.log(`------------------------------------------------------------------------------`);
console.log(`6. Find all the employee from 'Infy' and log all the details`);
for (const employeeInfo of employeeArray) {
    if(employeeInfo.empCompany=="Infy") {
        console.log(`Employee info whos salaray >=50000: ${employeeInfo.empId},${employeeInfo.empName},${employeeInfo.empDept},${employeeInfo.empSalary},${employeeInfo.empCompany}`);
    }
}
console.log(`------------------------------------------------------------------------------`);

