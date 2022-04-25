var user = {
  id: 101,
  email: 'abc@gmail.com',
  personalinfo: {
    name: 'abc',
    address: {
      city: 'Shimla',
      street: 1,
      country: 'India',
    },
  },
};

console.log(user);
console.log(user.personalinfo);
console.log(user.personalinfo.address);
console.log(user.personalinfo.address.city);
