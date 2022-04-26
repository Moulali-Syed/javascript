//how to interact with browser
//main object is window object
//window object is created automatically by browser

//All global javascript objects, functions and variables with var keyword automatically become members of window object
//global variables are properties of window object
//global functions are methods of window functions

//window is default property
var x = 'hello';
console.log(x);
console.log(window.x);
function xyz() {
  console.log('hi');
}
xyz();
window.xyz();
//window.alert();,prompt()
