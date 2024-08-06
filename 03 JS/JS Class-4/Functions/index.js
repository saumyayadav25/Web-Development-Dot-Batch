// FUNCTIONS

// function declaration
function run(){
    console.log('running');
}
// function call or invoke
run();


// Named function assignment
let stand = function walk(){
    console.log('walking');
}
// Anonymous function assignment
let stand2 = function(){
    console.log('walk');
}
// walk();
stand();
stand2();
let jump = stand;
jump();

function sum(){
    // Arguments
    // console.log(arguments);   //gives key-value pairs
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}

console.log(sum(1,2));
console.log(sum(1));           //b->undefined
console.log(sum());    
console.log(sum(1,2,3,4,5));   

let ans = sum(1,2,3,4,5,6);
console.log(ans);


// Rest Operator ...
function sum1(num,value,...args){
    console.log(args);
}
sum1(1,2,3,4,5);


// Default Parameters
function interest(p,r=6,y=10){
    return p*r*y/100;
}
console.log(interest(1000,8));


// Getter Setter
// getter-> access properties
// setter-> change or mutate properties
let person = {
    fName : 'Saumya',
    lName : 'Yadav',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if(typeof value !== String){
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
console.log(person);
function fullName(){
    return `${person.fName}    ${person.lName}`;
}      //read only function
console.log(fullName());

console.log(person.fullName);
// person.fullName = 'Rahul Kumar';

// Error Handling
try{
    person.fullName = true;
}
catch(e){
    // alert('You have sent a number in fullName');
    alert(e);
}


// SCOPE
{
    // let a = 5;
    var a = 5;
}
console.log(a);

function walker(){
    var x = 5;
}
// console.log(x);

for(var i = 0; i<10;i++){
}
console.log(i);

if(true){
    // let m = 5;
    var m = 5;
}
console.log(m);

function a(){
    const ab = 5;
}
const ab = 5;
function b(){
    const ab = 5;
}


// Reducing an array
let arr = [1,2,3,4,5];
let total = 0;
for(let value of arr){
    total = total+value;
}
console.log(total);

let totalSum = arr.reduce((accumulator, currentValue)=> accumulator+currentValue,0);
console.log(totalSum);