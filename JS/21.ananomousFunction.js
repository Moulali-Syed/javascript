//anonymous function - used when we want to run function only once , so need of naming it

//function expression
let show = function () {
  console.log('Hello World');
};

show();

setTimeout(function greet() {
  console.log('hello');
}, 3000); //executes after 3 seconds
