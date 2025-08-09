const address = "Chariani";
const part = address.slice(0, 4)
console.log(part);


const sentence = "I am focused and hardworking person.";
// console.log(sentence.split(' '));

console.log(sentence.split('d'));


const friendsStr = "Nasir, Rayhan, dalim, khokon, Monir, Mofazzal, Shahin";
const friends = friendsStr.split(',');
console.log(friends);

const realFriends = [
  'Nasir',
  ' Rayhan',
  ' dalim',
  ' khokon',
  ' Monir',
  ' Mofazzal',
  ' Shahin'
]

console.log(realFriends.join());

// slice, split and join() - all of them are important in use case.

// concat means connecting two strings.

const first = "Anu";
const last = "khan";

const fullName = first + ' ' + last;
console.log(fullName); 

// You can do this by template string.

const fullName2 = first.concat(' ').concat(last)
console.log(fullName2);

// includes - checking an items is it available or not. output will true / false.

console.log(last.includes('x'));