console.log(`..................leap year..................`);
var leapYear = function(leapyear) {
    if(leapyear == undefined || leapyear == "twenty twenty" || isNaN(leapyear)) {
        console.log(`You have pass ${leapyear} Invalid Data....`);
    }else {if(leapyear %400 ==0 || leapyear % 4 ==0 && leapyear % 100 !==0)
    {
        console.log(`${leapyear} is Leap year`);
    }
    else{
        console.log(`${leapyear} is not leap year`);
    }
}
}
leapYear(2020);
console.log(`                                   `);
leapYear(1999);
console.log(`                                   `);
leapYear(1600);
console.log(`                                   `);
leapYear(2022);
console.log(`                                   `);
leapYear(1945);
console.log(`                                   `);
leapYear("Twenty Twenty");
console.log(`                                   `);
leapYear(undefined);
console.log(`                                   `);
leapYear(NaN);
console.log(`                                   `);
leapYear(1705);



function lyear(lpyear){
    if(lpyear==undefined || lpyear=="two thousand" || isNaN(lpyear)){
        console.log(`invalid data ${lpyear}`);
    } else { if (lpyear==366) {
            console.log(`leap year ${lpyear}`);
        } else {
            if(lpyear==365)
            console.log(`Not leap year ${lpyear}`);
        }
    }
}
lyear(1600);
lyear(1705);