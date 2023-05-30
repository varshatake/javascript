const cloneObj = {
    name : "shaurya",
    schoolName : "INS",
};

const clone_obj = Object.assign({},cloneObj);
console.log(cloneObj);
console.log(clone_obj);

let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

let student = {

}
// student = person; // Shallow clone

Object.assign(student, person);

student.age = 100;
person.age = 90;

console.table(person);
console.table(student);