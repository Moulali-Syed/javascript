const greet = () => {
  console.log('hello');
};

function sayHello() {
  console.log('Hello There');
}

for (i = 1; i <= 10; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}

function multable(n) {
  for (i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

multable(5);
