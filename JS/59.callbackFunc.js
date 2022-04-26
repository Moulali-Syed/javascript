function sayHello() {
  console.log('hello');
}

function sayHi() {
  console.log('hi');
}
function add(num1, num2, callback) {
  console.log(num1 + num2);
  callback();
}

add(10, 20, sayHello);
add(20, 20, sayHi);
//passing anonymous function
add(10, 10, () => {
  console.log('bye');
});
//passing function as a parameter inside another function is callback function
