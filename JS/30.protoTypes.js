function Student(first, last, age, cls) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.class = cls;
}

Student.prototype.nationality = 'Indian';
//ObjectConstructorFunction.prototype.property
Student.prototype.name = function () {
  return this.firstName + ' ' + this.lastName;
};

//To add in constructor function we must use prototype
