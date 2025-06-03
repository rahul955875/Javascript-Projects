const stringCode = { a: 2, b: 4, c: 6, d: 8 };
const plainString = "abc";

// expected "246"

// const getObjArr =plainString.split('').map(a=> stringCode[a]).join('')

let result = "";

// for (let i = 0; i < plainString.length; i++) {
//   result += stringCode[plainString[i]];
// }
// console.log(result);

for (const element of plainString) {
    result += stringCode[element]
}
console.log(result)