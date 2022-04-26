//filter - returns new array based on condition
//find - returns first match , if no match returns undefined
const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

//filter
const youngPeople = people.filter((p) => {
  return p.age < 30;
});

console.log(youngPeople);

//find
const tooYoung = people.find((p) => p.age < 20);
console.log(tooYoung); //undefined
