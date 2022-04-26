const people = [
  {
    name: 'bob',
    age: 1,
  },
  {
    name: 'bob1',
    age: 1,
  },
  {
    name: 'bob2',
    age: 1,
  },
  {
    name: 'bob3',
    age: 1,
  },
];

const ages = people.map((person) => person.age);
console.log(ages);
//[ 1, 1, 1, 1 ]

const newPerson = people.map((item) => {
  return {
    firstname: item.name.toUpperCase(),
  };
});
console.log(newPerson);
/*
[
  { firstname: 'BOB' },
  { firstname: 'BOB1' },
  { firstname: 'BOB2' },
  { firstname: 'BOB3' }
]
*/

let name = people.map((person) => `<h2>${person.name}</h2>`);
document.write(name);
