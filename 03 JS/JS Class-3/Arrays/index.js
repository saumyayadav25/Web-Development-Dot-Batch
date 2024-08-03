// primitives
let numbers = [1,4,5,7];
console.log(numbers);

// Insertion
// end
numbers.push(9);
console.log(numbers);
// begin
numbers.unshift(8);
console.log(numbers);
// middle
numbers.splice(2,0,'a','b','c');
console.log(numbers);

// Searching
console.log(numbers.indexOf(7));
console.log(numbers.indexOf(10));  //return -1
// check if a number exists on array or not
console.log(numbers.includes(7));
console.log(numbers.indexOf(1, 2));  //(no_to_search, index_to_start_search)

// references
let courses = [
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];
console.log(courses);

// indexOf and includes doesnt work with objects
console.log(courses.indexOf({no:1, naam:'Love'}));   // return -1
// Searching in objects-> use callback functions
// find a course with name 'Love'
let course = courses.find(function(course){
    return course.naam == 'Love';
});
console.log(course);
// arrow function-> writing predicate function in short
let course1 = courses.find(course => course.naam === 'Love');


// Removing Element
let number = [1,2,3,4,5,6,7];
// end
number.pop();
console.log(number);
// begin
number.shift();
console.log(number);
// middle
number.splice(2,1);
console.log(number);


// Emptying an Array
let n = [1,2,3,4,5];
let n2 = n;
// n=[];   //method-1
n.length = 0;    //method-2
n.splice(0,n.length)    //method-3
console.log(n);
console.log(n2);


// Combining And Slicing Arrays
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined)
// let sliced = combined.slice(2,4);  //ouput-> [3,4]
let sliced = combined.slice(2);
console.log(sliced);

// Spread Operator
let comb = [...first,...second];
console.log(comb);
let comb1 = [...first,'a',...second,'b', true];
console.log(comb1);

// create copy
let another = [...comb];


// Iterating an Array
let arr = [10,20,30,40,50];
// using for-of loop
for(let value of arr){
    console.log(value);
}
// using for-each loop
arr.forEach(function(number){
    console.log(number+1);
});
// converting for-each loop to Arrow Function
// 1. remove function
// 2. make arrow
// 3. if input parameter: remove round brackets
// 4. if single line body: remove curly brackets , remove 'return' also if present
// 5. take into single line
arr.forEach(number=>console.log(number+5)
);


// Joining Arrays
let num = [11,1,6,22,25,17];
const joined = num.join('|');
console.log(joined);

// Split
let message = 'This is my first message';
let parts = message.split(' ');
console.log(parts);
let join = parts.join('_');
console.log(join);


// Sorting Arrays
num.sort();
console.log(num);
num.reverse();
console.log(num);


// Filtering Arrays
let nums = [1,2,-1,-4];
let filtered = nums.filter(value=> value>=0);
console.log(filtered);


// Mapping Arrays
let numb = [7,8,9,10];
let items = numb.map(value=> 'student_no' + value);
console.log(items);


// Mapping with Objects
let numbs = [1,2,-6,-9];
let filt = numbs.filter(value => value>=0);
let item = filt.map(num => ({value: num}));
console.log(item);
// chaining
let itemm = numbs
            .filter(value => value>=0)
            .map(num => ({value: num}));
console.log(itemm);