console.log("Namaste Duniya");

// Variables
let a = 5;
console.log(a);

// Constant
const num = 12;
// num=13; ->gives error
console.log(num); 

// Dynamic Typing
let s = 'Saumya';
console.log(s);
s = 3.5;
console.log(s);


// Comparison Operators
console.log(2>3);
console.log(5!==3);
console.log(5===3);

// Ternary Operator
let age = 17;
let canVote = (age>=18) ? 'Yes vote' : 'No vote';
console.log(canVote);


// Control Statements
// if-elseif-else
let marks = 95;
if(marks>=90){
    console.log('A');
}
else if(marks>=80){
    console.log('B');
}
else if(marks>=70){
    console.log('C');
}
else{
    console.log('D');
}

// switch case
let number=2;
switch(number){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}


// Loops
// for loop
for(let i=0;i<5;i++){
    console.log("num " + i);
}

// while loop
let i=10;
while(i>0){
    console.log(i);
    i--;
}

// do-while loop
let n=1;
do{
    console.log("executed"+n);
    n--;
}while(n>0);