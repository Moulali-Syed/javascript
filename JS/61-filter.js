let arr = [2, 22, 10, 12, 13, 5];
let filterarr = arr.filter((num) => num > 10);
console.log(filterarr, arr);
//[ 22, 12, 13 ] [ 2, 22, 10, 12, 13, 5 ]

let team = [
  {
    name: 'apple',
    position: 'fruit',
  },
  {
    name: 'banana',
    position: 'leaf',
  },
  {
    name: 'mango',
    position: 'sweet',
  },
  {
    name: 'grapes',
    position: 'juicy',
  },
];

let leafy = team.filter((val) => val.position === 'leaf');
console.log(leafy);
//[ { name: 'banana', position: 'leaf' } ]
