//dot notation
const person = {
  name: 'apple',
};

console.log(person.name);
person.age = 1;
console.log(person);

const items = {
  'featured-items': ['item1', 'item2'],
};

console.log(items['featured-items']);

let appState = 'loading';
const app = {
  [appState]: true,
};

console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'apple');
updateState('job', 'dev');
