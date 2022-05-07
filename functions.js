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



Object Oriented Programming:

DRY - Dont repeat yourself

Three important words to understand  

Object
Class
Inheritance



consider jeff bezos
he has a name,height,weigth
he will perform eat , sleep

elon musk
he has name,height,weight
he will perfrom ear sleep

then we can club the common properties and group them in  a class as Man
then we can create as many objects we need from that class

Suppose a softwareEngineer - he has height weight name and also employee id , salary,address and perform code debug test deploy

then we can create a class for software engineer and also inherit Man class

Object : anything in world is object

object has feature/properties  and actions performed by or performed on it



common properties of objects is taken and kept them into a class

value can be different but same properties and actions they have

__________________________________________________________________________________________________________________________________________
procedural vs Object oriented

procedural code - hard to debug , DRY principal failed

looks like spaghetti code

Four Pillars of object oriented programming

Encapsulation: means wrapping up data and member function together into a single unit

Abstraction: is the process of showing only essential/necessary features of an entity/Object to the outside world and hide other irrelavant information


Inheritance : it helps a sub class to acquire properties and behaviour of another class . it helps to reuse customize and enhance the existing code . so it helps
		to write code accurately and reduce development time

polymorphism : means many forms. a sub class can define its own unique behaviour and still share the same functionalities or behaviour of its parent/base class


OOPS before ES6

object is created as below with properties and methods

let person1 = {
	firstname:'apple',
	'last name':'shimla',
	last:'shim'
	age:1,

	fullName:function(){
		console.log(this.firstname+" "+this.last);
	}
}

console.log(person1.firstname);

document.write(person1.firstname);

console.log(person1['last name']);

person1.age=2;

person1.fullName();

______________________________________2nd way
let person2 = {};
person2.name='mango';
person2.sayHi = function(){
	alert('hi');
    }

console.log(person2);
person2.sayHi();
__________________________________________3rd way
let person3 = new Object();
person3.name='mango';
person3.sayHi = function(){
	alert('hi');
    }

console.log(person3);
person3.sayHi();
_________________

In ES5 instead of class we have constructor function

first letter should be capital

function Person(first,last,a){
	this.firstName=first;
	this.lastName=last;
	this.age=a;
	this.sayHi = function(){
		alert('hi');
	}
	this.changeAge = function(newAge){
		this.age = newAge
	}
}


let person1 = new Person("apple","shimla",1);
let person2 = new Person("mango","bangalore",1);
person1.changeAge(2);


_______________________________________________________________________________________________________
Prototype and Inheritance

const person1 = {}

whenever we create an object 
[[Prototype]]: Object
 will get attached automatically

let person1 = {};
console.log(person1);

let person2 = { name: 'apple' };
console.log(person2.hasOwnProperty('age')); //false


//whenever we create object using constructor function
//that constructor function will create a prototype and then it is
//linked with the javascript default prototype

function Person(n) {
  this.name = n;
}

let p1 = new Person('happy');
console.log(p1);



When we create a constructor function and then create objects using it , javascript creates a prototype for the constructor function
this prototype will be linked to all the objects which ever will be created using the constructor function and also the default javascript prototype 
and this default javascript prototype is linked by  null container 
This is called prototype chaining


//seperating methods from constructor function and placing in prototype of constructor function , thus only copying properties from the constructor
function to object created and liking the same method to all objects as it is placed in prototype
