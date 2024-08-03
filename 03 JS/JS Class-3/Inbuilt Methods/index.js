// Math
Math.random();
Math.PI;
Math.round(1.6);


// String->primitive
let lastName = 'Saumya';

lastName.length
lastName.includes('Sa');
lastName.startsWith('Sam');
lastName.endsWith('ya');
lastName.indexOf('S');
lastName.toUpperCase();
lastName.toLowerCase();
lastName.trim();       //trim starting and ending spaces
lastName.replace('Sau','car');

// String->Object
let firstname = new String('Saumya');


let message = 'This is my first Message';
let words = message.split(' ');
console.log(words);
message.replace('first','second');


// Template Literal
let message1 = 'This \'  \n  is \" my \\ first Message';
console.log(message1);

let msg = 
`Hello ${lastName},
    ...
This is
another message.`;
console.log(msg);

// Date and Time
let date = new Date();
console.log(date);
let date2 = new Date('June 20 1998 07:15');
console.log(date2);
let date3 = new Date(2005, 2, 25, 7);
console.log(date3);
date3.setFullYear(2000);
// date3.getDate();
console.log(date3);