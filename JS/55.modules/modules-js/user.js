export let name = 'apple';
let age = 1;
export function code() {
  console.log('coding');
}

function cook() {
  console.log('cooking');
}
export default function () {
  console.log('default func called');
}
export { age, cook };
