/*
Object oriented programming
DRY - DOnt repeat yourself
three important words to understand
Object , class , Inheritance

consider Jeff Bezos 
he has name , height , weight
he will perform eat,sleep

elonmusk
he has name , height , weight
he will perform eat,sleep

then we can club common properties and group them in a class Man
then we can create as many objects we need for that class

Suppose a software engineer - he has height weight and also emplyeeid , salary,address and perform code debug test

then we can create a class for software engineer and also inherit man class
Object: anything in world is object

Object has feature/properties and actions performed by or performed on it
common properties of objects is taken and kept them into a class
value can be different but same properties and actions they have

procedural vs OOP
procedural hard to debug , DRY principle violates
looks like spaghetti code
_______________________________________________________________________________
Four pillars of OOP
Encapsulation:
means wrapping up data and member function together into a single unit

Abstraction:
process of showing only essential and necessary features of an entity / object to outside world and hide other irrelavant information

inheritance : it helps a sub class acquire properties of parent class , it helps to reuse customize and enhance the existing code, so it helps 
    to write code accurately and reduce developmemnt time

polymorphism: means many forms, a sub class can define its own behaviour and still share same functinaloities or behaviour 
                of its parent/base class
_______________________________________________________________________________
$$$$$$$     OOPS before ES6  $$$$$$$$$$

object is created as below with properties and methods
*/

//1st way
let person1 = {
  firstName: 'apple',
  lastName: 'Shimla',
  age: 1,
  fullName: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

console.log(person1.firstName);
console.log(person1['firstName']);
person1.fullName();
person1.age = 2;

//2nd way
let person2 = {};
person2.name = 'mango';
person2.sayHi = function () {
  alert('hi');
};
console.log(person2);
person2.sayHi();

//3rd way
let person3 = new Object();
person3.name = 'banana';
person3.sayHi = function () {
  alert('hi');
};
console.log(person3);
person3.sayHi();

//In ES5 instead of class we have constructor function
//first letter should be capital
function Person(first, last, a) {
  this.firstName = first;
  this.lastName = last;
  this.age = a;
  this.sayHi = function () {
    alert('hi');
  };
  this.changeAge = function (newAge) {
    this.age = newAge;
  };
}

let person1 = Person('tom', 'newyork', 2);
let person2 = Person('jerry', 'newyork', 1);
person1.changeAge(3);

//$$$$$$$$  prototype and inheritance  $$$$$$$$$$$

const person4 = {};

//whenever we create a object [[prototype]]:Object will get attached automatically

let person1 = {};
console.log(person1);

let person2 = { name: 'apple' };
console.log(person2.hasOwnProperty('age')); //false

//whenwver we create object using constructor function , that constructor function will create a prototype
// and then it is linked with javascript default prototype

function Person(n) {
  this.name = n;
}

let p1 = new Person('happy');
console.log(p1);

//when we create a constructor function and then create objects using it , js creates a prototype for constructor function
//this prototype will be linked to all the objects which ever will be created using constructor function and also default
//javascript prototype and this default js prototype is linked with null container . this is called
//prototype chaining

//seperating methods from constructor function and placing in prototype of constructor function, thus only
// copying properties from constructor function to object created and linking the same method to all objects
// as it is placed in prototype
