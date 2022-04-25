hello(); //accessible here because of hoisting

function hello() {
  console.log('Hello world');
}

var x; //declaration
console.log(x); //undefined
x = 7; //assignement
console.log(x); //7

console.log(y); //undefined as declaration will be hoisted
var y = 10;
console.log(y); //10

// "use strict" -  this resolve unnecessary hoisting problem
