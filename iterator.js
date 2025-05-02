//**iterators
// Symbol.iterator --> to make an object iterable

const range = {
  from: 0,
  to: 5,
};
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
// console.log(range.lenght)
// for(const num of range){
//   console.log('num-->',num)
// }

const names = {
  a: "rahul",
  b: "jignesh",
  c: "satyam",
};
names[Symbol.iterator] = function () {
  // console.log(this)
  return {
    current: 0,
    last: Object.keys(this),
    parent: this,
    next() {
      if (this.current < this.last.length) {
        const newObj = {
          done: false,
          value: this.parent[this.last[this.current]],
        };
        this.current++;
        return newObj;
      } else {
        return { done: true };
      }
    },
  };
};
// for(const name of names){
//     console.log(name)
// }
// for(const name of names){
//     console.log('Name is '+name)
// }

//make a number iterator

// Number.prototype[Symbol.iterator] = function () {
//   // console.log(Number(this))
//   return {
//     current: this / 10,
//     last: this,
//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
Number.prototype[Symbol.iterator] = function* (){
    let current = this/10;
    const last = this
    while(current<=last){
        yield current++
    }
}



// Number.prototype[Symbol.iterator] = function () {
//   // console.log(Number(this))
//   return this.toString()
// };
// Number.prototype[Symbol.iterator] = function* () {
//     // console.log(Number(this))
//   yield* this.toString()
//   };
  
// for (const num of 10) {
//   console.log(num);
// }

// const str = new String('hello')
// for(const char of str){
//     console.log(char)
// }


// ;[1,2,3].forEach((i)=>console.log(i));