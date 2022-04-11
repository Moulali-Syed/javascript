//for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for in loop
let myArr = ['a', 'b', 'c', 'd'];
for (let item in myArr) {
  console.log(item, myArr[item]);
}
/*
0 a
1 b
2 c
3 d
*/

const alpha = ['apple', 'grapes', 'mango'];
for (let i = 0; i < alpha.length; i++) {
  console.log(alpha[i]);
}
/*
apple
grapes
mango
*/

//forEach loop
alpha.forEach((item) => console.log(item));
/*
apple
grapes
mango
*/

//while
let y = 1,
  n = 100;
while (y <= n) {
  console.log(y);
  y++;
}

//do while loop
let i = 1;
let n1 = 100;
do {
  console.log(i);
  i++;
} while (i <= n1);

//braeaking a loop
for (let i = 0; i < 100; i++) {
  if (i == 90) {
    break;
  }
}

//skip iteration
for (let i = 0; i < 10; i++) {
  if (x % 2 == 0) {
    continue;
  }
}
