//function decalration
function greet(name) {
  console.log(name);
}
greet('apple');

//function expression
let greet1 = function (name) {
  console.log('hey there', name);
};
greet1('mango');

//if no return value specified javascript returns undefined

const add = (a, b) => {
  console.log(a, b);
};
console.log(add(1, 2)); //prints undefined

const sub = (x, y) => {
  return x - y;
};
console.log(sub(5, 1)); //4

let arr = ['fruit', 'vegetable', 'furniture'];
arr.forEach((element, index, array) => {
  console.log(element, index);
});
/*
fruit 0
vegetable 1
furniture 2
*/
