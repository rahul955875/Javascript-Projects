// function shuffle(array) {
//     // Your implementation
//     const newSuffled = [...array]
//     // console.log(newSuffled)
//     for (let i = 0; i < array.length; i++) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [newSuffled[i], newSuffled[j]] = [newSuffled[j], newSuffled[i]]
//         console.log(j)
//         console.log(newSuffled)
//     }
// }

// //For the purpose of user debugging.
// shuffle([1, 2, 3, 4, 5]);

function curry(fn) {
    // Your implementation
    return function wrapper (...args) {
        if (args.length >= fn.length) {
            return fn.apply(this,args)
        } else {
            return function wrapper2(...nextArgs) {
                return wrapper(...args,...nextArgs)
            }
        }
    }
}

//For the purpose of user debugging.
//pass appropriate input in below function call
const print=(a = 0, b = 5)=>{
    console.log(a,b)
}
let newPrint = curry(print);
console.log(newPrint(1))