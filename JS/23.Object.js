//Object
let person = {
  name: 'apple',
  city: 'Shimla',
};
console.log(person);

//accessing properties of object
console.log(person.name);
console.log(person['name']);

//add properties
person.age = 1;
console.log(person);

//modify properties
person.name = 'Mango';
console.log(person);

//delete properties
delete person.age;
console.log(person);

//to check if property present in object
console.log('name' in person);
//returns true or false based on present or not

//loop over all
for (let key in person) {
  console.log(key); //returns key of objects properties
  console.log(person[key]); //returns values
}

//Object Methods
person.sayHello = function () {
  console.log('Hello!!');
};

person.sayHello();
console.log(person);

//normal function and then assign
function happy() {
  console.log('Happy Happy');
}
person.hey = happy;
console.log(person);

//from es6 we can write
let person1 = {
  name: 'banana',
  sayHello() {
    console.log('hello iam banana');
  },
};

console.log(person1.sayHello());
