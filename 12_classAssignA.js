class Vehicle {
    constructor(vehicleName,companyName,vehicle_no,color){
        this.vehicleName = vehicleName;
        this.companyName = companyName;
        this.vehicle_no = vehicle_no;
        this.color = color;
    }
    vehicleDetails(){
        console.log(`Vehicle details : ${this.vehicleName},${this.companyName},${this.vehicle_no},${this.color}`);
        console.log(`-------------------------------------------------------------------------------`);
    }
}
const vehicle_1 = new Vehicle("Splender","Hero","MH16 JM 4142","Black");
const vehicle_2 = new Vehicle("Apache","TVS","MH12 GR 4567","Blue");
const vehicle_3 = new Vehicle("Suzuki","Maruti","MH14 DR 1108","Red");
const vehicle_4 = new Vehicle("Deo","Honda","MH15 LM 2346","White");

const arrayOfVehicle = [vehicle_1,vehicle_2,vehicle_3,vehicle_4];

for (const vehicles of arrayOfVehicle) {
    vehicles.vehicleDetails();
}

// console.log(arrayOfVehicle[0]);

class College {
    constructor(collegeName,location,department,city) {
        this.collegeName = collegeName;
        this.location=location;
        this.department = department;
        this.city = city;
    }
}
const college1 = new College("Dr Dy patil polytechnique college","Akurdi","Diploma","Pune");
const college2 = new College("Amrutvahini college","Akole","Engineering","Sangamner");
const college3 = new College("G H Raisoni college","wagholi","MBA","Pune");
const college4 = new College("New Arts commerce and science college","savedi","MCA","Ahmednagar");

//const arrayCollege = [college1,college2,college3,college4];
function traverseObject(college){
    for (const index in college) {
        if (Object.hasOwnProperty.call(college,index)) {
            const value = college[index];
            console.log(`${index},${value}`);
        }
    }
}
traverseObject(college1);
console.log(`-----------------------------------`);
traverseObject(college2);
console.log(`-----------------------------------`);
traverseObject(college3);
console.log(`-----------------------------------`);
traverseObject(college4);
console.log(`-----------------------------------`);