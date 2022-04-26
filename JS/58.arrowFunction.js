function sum(a, b) {
  return a + b;
}

const sum1 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum1(2, 3));

const double = (n) => n * 2;
console.log(double(2));

document.addEventListener('click', () => {
  console.log('clicked');
});
