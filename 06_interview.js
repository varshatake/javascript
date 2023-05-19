console.log(`..........Interview using if else........`);

var interview = function (gradScore, hscScore, sscScore,studName) {
    if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
         console.log(`Congrates...${studName} you are eligible for TCS Interview. `);
    } else {
         console.log(`Else unfortunately ${studName} you are not eligible for interview. `);
     }
 }
 interview(80,86,90,`Harshda`);
 console.log(`....................`);
 interview(70,65,55,`Kavita`);
 console.log(`....................`);
 interview(60,79,88,`Tejashree`);
 console.log(`....................`);



 //
 //
console.log(`with invalid null / undefined.`);
var interviewE = function(gradmark , hscmark, sscmark,goodName) {
    if ((gradmark==undefined||gradmark==null) || (hscmark==undefined)||(sscmark==undefined)||(goodName==undefined)) {
        console.log(`You have entered Invalid input..`);
    } else {
        if (gradmark >= 70 || hscmark >= 80 || sscmark >= 90) {
            console.log(`Congrates...${goodName} you are eligible for TCS Interview. `);
        } else {
            console.log(`Else unfortunately ${goodName} you are not eligible for interview. `);
        }
        
    }
}
interviewE(80,86,90,`Harshda`);
interviewE(70,65,55,`Kavita`);
interviewE(60,79,88,`Tejashree`);
interviewE(null,80,90,`anvi`);
console.log(`....................`);
interviewE(70,undefined,88,`Tanvi`);
console.log(`.......................`);
interviewE(70,80,90,null);