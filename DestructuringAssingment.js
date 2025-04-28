let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(salaries) {
  let maxSalarie = 0;
  let name;
  for (let person of Object.entries(salaries)) {
    const [Pname, salary] = person;
    if (maxSalarie < salary) {
      maxSalarie = salary;
      name = Pname;
    }
    if (!salaries) return null;
  }
  return { name, maxSalarie };
}
//   console.log(topSalaries(salaries))

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return map;
}

// function aclean(arr){
//   const unique = new Set()
//   for(const word of arr){
//     const sortedWord = word.toLowerCase().split('').sort().join('')
//     unique.add(sortedWord)
//   }
//   return Array.from(unique)
// }

let arrEx = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arrEx) );
// const jsonString = JSON.stringify([1, 2, 3]); // [1,2,3]
// // console.log(typeof jsonString, jsonString)
// for(const value of jsonString){
//   console.log(value+' length :'+jsonString.length)
// }

const obj = {
  name: "obj",
  role: [{ name: "array" }],
};
// console.log(JSON.stringify(obj,null,2))
const num = 5;
// console.log(String(obj))
// console.log(typeof String(num))

//json stringify
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));
// console.log(room)
//reference
// let john = { name: "John" };

// john = null;
// let array = [ john ];

// console.log(array[0])

// let john = { name: "John" };

// let map = new Map();
// map.set(john,john);

// console.log(map.get(john))
// john = null; // overwrite the reference

//WeakMap
let john = { name: "John" };
// const johnArr = [john]
let weakMap = new WeakMap();
weakMap.set(john, john);
john = null;
// console.log(weakMap.get(john))
// console.log(john)
// console.log(johnArr[0])

let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
let user = { name: "john" };
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
// countUser(user)
// countUser(user)
// countUser(user)
// user = null
// console.log(visitsCountMap)

// task 1
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "Jack" },
  { text: "See you soon", from: "Alice" },
];

const isReaded = new WeakSet();
const dateMap = new Map();

const viewedUser = (id) => {
  isReaded.add(messages[id]);
  dateMap.set(messages[id], new Date().toLocaleTimeString());
};
viewedUser(1)
const isMessageReaded = (id) => {
  if (id === "" || id === undefined || id == null) return "provide user";
  const result = `${
    isReaded.has(messages[id])
      ? " Readed by " + messages[id]?.from + " at " + dateMap.get(messages[id])
      : "not viewed"
  } `;
  return result;
  1;
};
// messages = null;
console.log(isMessageReaded(1));
// console.log()
