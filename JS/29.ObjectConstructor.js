//Object Constructor function
//before ES6 this is the way to make
function Student(first, last, age, cls) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.class = cls;
}

var stud1 = new Student('apple', 'shimla', 2, 1);
var stud2 = new Student('mango', 'shimla', 2, 1);
console.log(stud1);
console.log(stud2);

//we can add properties also
stud1.nationality = 'indian';
stud1.name = function () {
  return this.firstName + ' ' + this.lastName;
};
console.log(stud1.name());
// var student1 = {
//   firstName: 'apple',
//   lastName: 'Shimla',
//   age: 2,
//   class: 1,
// };

// var student2 = {
//   firstName: 'mango',
//   lastName: 'Shimla',
//   age: 2,
//   class: 1,
// };
