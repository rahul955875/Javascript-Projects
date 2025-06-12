// const value = 0
// console.log(value ?? 'hello')
// console.log(typeof 34n)

function findMaxNumber(arr) {
    // Your implementation
    return arr.reduce((acc, curr) => {
       return acc<curr ? acc=curr : acc
 
    },0)
}

//For the purpose of user debugging.
// console.log(findMaxNumber([1, 2, 30, 4, 5]));


function myTag(strings,...value) {
  // console.log(strings);
  // console.log(value); 
}

const name2 = 'Rahul';
myTag`Hello ${name2}asdf!${name2}`; 

let arr = 'hell o  ,  wo rld '
arr=arr.trim().split(',').join(',')
console.log(arr)