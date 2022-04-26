// let age = 30;
// let age = 10;
// declaraing same variable at same scope is not possible with var keyword
var a = 10;
var a = 12;
//possible with var

let age = 1; //global scope
function details() {
  let name = 'apple'; //block scope
  console.log(`${name} is ${age} old`);
}

//var will not have local scope
//let and const have local scope, global scope,block scope

// $$$$$$$$$$$$$$$$

//function declaration hoisting is possible
greet();
function greet() {
  console.log('GM');
}

//hoisting doesnot work with function expression
greet1(); //thows error
const greet1 = () => {
  console.log('GM from function expression');
};
