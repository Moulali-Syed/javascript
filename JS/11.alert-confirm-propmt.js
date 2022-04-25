alert('Hello visitor');

let age = prompt('Enter your age');

if (age != null) {
  document.write(`your age is ${age}`);
} else {
  document.write('age is blank');
}

let res = confirm('Are u sure u want to delete');
//ok-true , cancel - false

if (res) {
  document.write('deleted');
} else {
  document.write('not deleted');
}
