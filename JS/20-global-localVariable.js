//global and local variable

let car = 'audi'; //global
function add() {
  let result = 33; //local variable
  console.log(result);
}
//result cannot be used outside function, it is accessible only in function
add();
