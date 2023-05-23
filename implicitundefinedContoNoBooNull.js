// undefined used with Number , Boolean, Null gives result "NaN"

var result;

result = 4 + undefined;
console.log(`undefined with No , Null, Boolean , 4 + undefined = ${result}`);

result = 4 - undefined;
console.log(`undefined with No , Null, Boolean, 4 - undefined = ${result}`);

result = true + undefined;
console.log(`undefined with No , Null, Boolean , true + undefined = ${result}`);

result = null + undefined;
console.log(`undefined with No , Null, Boolean, null + undefined = ${result}`);

result = 4 * undefined;
console.log(`undefined with No , Null, Boolean 4 * undefined = ${result}`);

result = 4 / undefined;
console.log(`undefined with No , Null, Boolean 4 / undefined = ${result}`);

result = 4 % undefined;
console.log(`undefined with No , Null, Boolean 4 % undefined = ${result}`);