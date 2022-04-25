var person = {
  name: 'apple',
  age: 1,
  getName: function () {
    return this.name.toUpperCase();
  },
};
console.log(person.getName()); //this way we r accessing method
//to access as property
var person1 = {
  name: 'apple',
  age: 1,
  get getName() {
    return this.name.toUpperCase();
  },
  set setName(n) {
    this.name = n.toUpperCase();
  },
};
console.log(person1.getName);
person1.setName = 'mango';
console.log(person1);
