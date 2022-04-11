let myArr = [1, 2, 3, 1, 35, 3, 2];
let myArr1 = new Array();

console.log(myArr.length); //3
console.log(myArr[2]); //3
console.log(myArr[100]); //undefined

console.log(myArr.indexOf(1)); //0
console.log(myArr.sort());
/* [
  1, 1,  2, 2,
  3, 3, 35
] */

console.log(myArr.reverse());
/*[
  35, 3, 3, 2,
   2, 1, 1
] */

console.log(myArr.concat(['a', 'b']));
/*[
  35, 3, 3,   2,   2,
  1,  1, 'a', 'b'
]*/

console.log(myArr.push('apple')); //prints number of elements in array
console.log(myArr);

console.log(myArr.pop()); //prints the deleted item
console.log(myArr);

console.log(myArr.shift()); //prints the removed item
console.log(myArr);

console.log(myArr.unshift('chocos')); //prints number of elements in array
console.log(myArr);

//splice(indexPosition,numberofitems)
console.log(myArr.splice(1, 1)); //prints the deleted number
console.log(myArr);

let user = new Object(); //Object constructor syntax
let user1 = {}; //Object Literal syntax

let user2 = { name: 'apple', age: 1 };
console.log(user2.name);
console.log(user2['name']);
user2.city = 'shimla';
console.log(user2); //{ name: 'apple', age: 1, city: 'shimla' }
