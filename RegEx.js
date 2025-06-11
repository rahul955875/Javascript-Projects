// let phone = "+7(903)-123-45-67"
// console.log(phone.replace(/[^0-9]/g , ''))
// console.log(parseInt(''))

// const str = "user[42]";
// const result = str.replace(/\[(\d+)\]/, (match, group1) => {
//     console.log(match +': '+ group1)
//   return '.' + group1; // you can manipulate group1 here
// });

// console.log(result); // "

const str = "user[42]";
const result = str.replace(/\[(\d+)\]/, "$1");

// console.log(result); // "

const validFormate = /[0-9]+]/gi;
let formerror = {}
const value = 'hello'
if (!validFormate.test(value)) {
  formerror['key'] = 'hello';
}
console.log(validFormate.test(value))
console.log(formerror)
