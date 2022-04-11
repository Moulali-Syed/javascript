/*Both storage objects provide the same methods and properties like setItem, getItem, removeItem, and clear. The examples in this tutorial are for localStorage, but the same syntax works for sessionStorage.

Creating Entries:- We can create the key/value pair entries with localStorage.setItem, providing a key and a value. Here is an example:
let key = 'Entry_1';
localStorage.setItem(key, 'Value');
Reading Entries:- We can read entries with localStorage.getItem. Here is an example:
let myItem = localStorage.getItem(key);
Updating Entries:- We can update an entry just as we create a new one with setItem, but with a key that already exists. Here is an example:
localStorage.setItem(key, 'New Value');
Deleting Entries:- We can delete an entry with the removeItem method. Here is an example:
localStorage.removeItem(key);
Clearing Everything:- We can clear everything that's stored in localStorage. Here is an example:
localStorage.clear();
Storing JSON Objects:- Only strings can be stored with localStorage or sessionStorage, but we can use JSON.stringify to store more complex objects and JSON.parse to read them. Here is an example:
// Create item:
let myObj = { name: 'Harry', language: 'JavaScript' };
localStorage.setItem(key, JSON.stringify(myObj));
// Read item:
let item = JSON.parse(localStorage.getItem(key));
 */
console.log('This is tut 20');
let impArray = ['adrak', 'pyaz', 'bhindi'];

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
