// new Promise((resolve, reject) => {
//   throw new Error("error");
// }).finally(() => setTimeout(() => {
//     console.log("Promise ready")
// })); // triggers first

// console.log('end')

// task 1
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// delay(3000).then((res) => console.log("runs after 3 seconds. "));

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve); // function() { native code }
    // resolve with this.num*2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

// new Promise((resolve) => resolve(1))
//   .then((result) => {

//     let obj =  new Thenable(result);
//     console.log(obj)
//     return obj
//   })
//   .then(console.log);

// new Promise((res) => {
//   return res("namaste.");
// })
//   .then((res) => {
//     // throw new Error("error is here.");
//     return res;
//   })
//   .catch((e) => console.log(e.message))
//   .then(res => console.log(res))

// handle the error
new Promise(function (resolve, reject) {
  setTimeout(() => {
    try {
      throw new Error("Whoops!");
    } catch (error) {console.log('this is error')}
  }, 1000);
}).catch(console.log);
