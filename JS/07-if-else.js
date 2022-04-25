let age = 12;
let hasVoterCard = 'No';
if (age > 12 && hasVoterCard == 'Yes') {
  alert('allowed');
} else if (age > 12 && hasVoterCard != 'Yes') {
  console.log('No entry , please apply voter card');
} else {
  console.log('please donot vote');
}

if (true) {
  if (true) {
  }
}

//terenary operator
console.log(2 > 3 ? 'higher' : 'lesser');

//undefined or null

let user;
alert(user ?? 'GuestUser');
//  ?? returns its right hand side operand when its left hand side operand is null or undefined
