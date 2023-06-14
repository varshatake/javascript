const profileHeading = document.querySelector('#heading');
profileHeading.style.color = 'brown';

const headingTwo = document.querySelector('h2');
headingTwo.style.color = 'teal';

console.log(`Remove an element`);
const givenUnorderList = document.querySelector('#unorderlist');
const agileJira = document.querySelector('#agile');
givenUnorderList.removeChild(agileJira);