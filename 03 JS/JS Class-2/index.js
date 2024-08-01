console.log('Lets Start');

// object creation
const rectangle1 = {
    length:1,
    breadth:2,

    draw: function(){
        console.log('drawing rectangle');
    }
};

// Factory function->camel case
function createRectangle(length, breadth){
    return rectangle = {
        // length: length,
        // breadth: breadth,
        length,
        breadth,
        draw(){
            console.log('drawing rectangle');
        }
    };
    // return rectangle;
}
// function call
let rectangleObj1= createRectangle(5,4);
let rectangleObj2= createRectangle(2,3);
let rectangleObj3= createRectangle(7,9);

// Constructor function->Pascal notation: First letter of every word is capital
// define properties and methods->initialize
function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing');
    }
}
// object creation
let rectangleObject = new Rectangle(4,7);

// Dynamic Nature of Objects
rectangleObject.color='yellow';   //add
console.log(rectangleObject);
delete rectangleObject.color;     //remove
console.log(rectangleObject);


// Constructor Property
let Rectangle1 = new Function(
    'length','breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log('drawing');
}`);
// object creation using Rectangle1
let rect = new Rectangle(2,3);
console.log(rect);

// primitive type -> copy is created
let a = 10;
let b = a;
a++;
console.log(a);  //11
console.log(b);  //10
// in case of primitive, copy is created in function call
let c = 10;
function incp(c){
    c++;
}
incp(c);
console.log(c);  //10

// reference type
let a1 = {value:10};
let b1 = a1;   // both a1 and b1 point at same address
a1.value++;
console.log(a1);
console.log(b1);
// in case of reference, same address is pointed by same/different name in function call
let x={value:10};
function incr(x){
    x.value++;
}
incr(x);
console.log(x.value);


// Iterating through objects
// For-in loop
let r = {
    length:2,   //key-value pairs
    breadth:4
};
for (let key in r){
    console.log(key, r[key]);
}
// For-of loop -> applicable only on iterables: arrays and maps
for(let key of Object.keys(r)){
    console.log(key);
}
for(let key of Object.entries(r)){
    console.log(key);
}


// finding if a particular property exists in the object or not
if('color' in r){
    console.log('Present');
}
else{
    console.log('Absent');
}


// OBJECT CLONING
// Iteration
let src = {
    a:10,
    b:20,
    c:30
};
let dest={};
for(let key in src){
    dest[key] = src[key];
}
console.log(dest);
src.a++;
console.log(dest);
// Assign
let src1 = {
    a:10,
    b:20,
    c:30
};
let src2 = {value:25};
let dest1 = Object.assign({},src1,src2);
console.log(dest1);
// Spread
let src3 = {
    a:11,
    b:22,
    c:33
};
let dest3 = {...src3};
console.log(dest3);