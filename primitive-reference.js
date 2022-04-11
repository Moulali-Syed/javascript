//primitive value on stack
//refference values on the heap
// if value is primitive we manipulate actual value , if reference value we manipulate object reference

//primitive data types:
let name = 'apple';
console.log(typeof name); //string

let marks = 123.1;
console.log(typeof marks); //number

let isDriver = true;
console.log(typeof isDriver); //boolean

let nullVar = null;
console.log(typeof nullVar); //object

let a;
console.log(typeof a); //undefined

//Reference Types
let myarr = [1, 2, 3, 45];
console.log(typeof myarr); //object

let stMarks = {
  apple: 100,
  grapes: 90,
};
console.log(typeof stMarks); //object

function findname() {}
console.log(typeof findname); //function

let date = new Date();
console.log(typeof date); //object
