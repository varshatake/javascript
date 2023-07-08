
let setFunction = function() {
    console.log(`I am function Expression after 9000`);
}
setTimeout(setFunction, 9000);

setTimeout(function() {
    console.log(`I am Normal function after 2000`);
}, 2000);

setTimeout(() => {
    console.log(`I am Arrow function after 11000`);
}, 11000);