console.log(`..........Switch case for months of year..........`);

function monthOfYear(monthNum) {
  switch (monthNum) {
    case 1:
      console.log(`January month as number is : ${monthNum}`);
      break;
    case 2:
      console.log(`February month as number is : ${monthNum}`);
      break;
    case 3:
      console.log(`March month as number is: ${monthNum}`);
      break;
    case 4:
      console.log(`April month as number is: ${monthNum}`);
      break;
    case 5:
      console.log(`May month as number is : ${monthNum}`);
      break;

    case 6:
      console.log(`June month as number is: ${monthNum}`);
      break;
    case 7:
      console.log(`July month as number is: ${monthNum}`);
      break;
    case 8:
      console.log(`August month as number is : ${monthNum}`);
      break;
    case 9:
      console.log(`September month as number is: ${monthNum}`);
      break;
    case 10:
      console.log(`October month as number is: ${monthNum}`);
      break;
    case 11:
      console.log(`November month as number is: ${monthNum}`);
      break;
    case 12:
      console.log(`December month as number is: ${monthNum}`);
      break;

    default:
        console.log(`Invalid Input ---> ${monthNum}`);
      break;
  }
}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(undefined);
monthOfYear(15);
monthOfYear(100);
