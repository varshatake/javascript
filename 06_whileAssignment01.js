console.log(`WAP to print numbers from 5 to 15 by incrementing 1`);
let i=5;
let sum=5;
while(i<15) {
    
    i=i+1;
    sum=sum+" "+i;
}
console.log(sum); 


console.log(`WAP to print numbers from 50 to 40 by decrementing 1`);
let no=50;
let a=50;
while (no>40) {
    
    no=no-1;
    a=a+" "+no;
}
console.log(a);

console.log(`WAP to find numbers first 15 odd Numbers`);
let odd=0;
let b=0;
while (odd<=15) {
    if(odd%2!=0)
    {
        b=b+" "+odd;
    }
    odd++;
}
console.log(b);

console.log(`WAP to find numbers first 10 even Numbers`);
let even=0;
let c=0;
while (even<=10) {
    if (even%2==0) {
       c=c+" "+even; 
    }
    even=even+1;
}
console.log(c);

console.log(`WAP to print table of 5 like --> 5 10 15 20 25.....50`);
let tableFive=5;
let d=5;
while (tableFive<=50) {
    if (tableFive%5==0) {
        d=d+" "+tableFive;
    }
    tableFive++;
}
console.log(d);

console.log(`WAP to print table of 10 like --> 10 20 30.....100`);
let tableTen = 10;
let e=10;
while (tableTen<=100) {
    if (tableTen%10==0) {
        e=e+" "+tableTen;
    }
    tableTen++;
}
console.log(e);

console.log(`WAP to print table of 10 in Reverse Order like --> 100 90 80.....10`);
let reverseTenTable =100;
let f=100;
while (reverseTenTable>=10) {
    if (reverseTenTable%10==0) {
       f=f+" "+reverseTenTable;
    }
    reverseTenTable--;
}
console.log(f);

