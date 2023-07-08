console.log(`-------- Named Function ------------`);

function travelHome(callbackFun) {
    console.log(`Start traval from pune to ahmednagar`);
    console.log(`Take 4 hours`);
    console.log(`Traval via Car`);
    callbackFun();
}

function travelPune() {
    console.log(`start travel from ahmednagar to Pune`);
    console.log(`Take 5 hours`);
    console.log(`Travel via Bus`);
}
travelHome(travelPune);

console.log(`-------- Using function Expression ----------`);
let travelH = function(callbackF) {
    console.log(`Start traval from pune to ahmednagar`);
    console.log(`Take 4 hours`);
    console.log(`Traval via Car`);
    callbackF();
}

let  travelP = function() {
    console.log(`start travel from ahmednagar to Pune`);
    console.log(`Take 5 hours`);
    console.log(`Travel via Bus`);
}
travelH(travelP);

