//operations on array

let book = ['math', 'phsy', 'bio', 'comp'];
console.log(book.length);
console.log(book.push('hindi')); //5
console.log(book.pop()); //hindi
console.log(book.unshift('apple')); //5
console.log(book.shift()); //apple

console.log(book.splice(1, 1)); //['phsy'] - remove one element from position 1

//index
let position = book.indexOf('bio');
console.log(position); //returns index position

//to check if it is array
console.log(Array.isArray(book)); //true

//split
let text = 'this is a random text';
let wordarray = text.split(' ');
console.log(wordarray); //[ 'this', 'is', 'a', 'random', 'text' ]

//join
let word1 = book.join('-');
console.log(word1);

//to empty array
book = [];
//or
book.length = 0;
console.log(book);

//concat
let b1 = ['jk', 'ahsd', 'add'];
let b2 = ['as', 'ad', 'adsf'];
console.log(b1.concat(b2));
let b3 = ['ad', 'asd'];
console.log(b1.concat(b2, b3));

//muti dimennsional array
let bookWithPages = [
  ['Math', ['300']],
  ['physics', '200'],
  ['science', '100'],
];

let fetch = bookWithPages[1][0];
console.log(fetch);

console.log(bookWithPages.flat(100));

for (let i = 0; i < book.length; i++) {
  console.log(`element ${i} is ${book[i]} \n`);
}

book.forEach(myFu);
function myFu(value) {
  console.log(value);
}
