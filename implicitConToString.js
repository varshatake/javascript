// Numeric String used with operator + (concat) gives result String

var result;

result = '3' + 2;
console.log(`String used with '3' + 2  = ${result}`);

result = '3' + true;
console.log(`String used with '3' + 2 = ${result}`);

result = '3' + undefined;
console.log(`String used with '3' + undefined = ${result}`);

result = '3' + null;
console.log(`String used with '3' + null =  ${result}`);