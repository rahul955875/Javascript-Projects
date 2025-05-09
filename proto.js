let hamster = {
  stomach: [],
  setName(name) {
    this.name = name;
  },
  eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
// speedy.eat("apple");
//   speedy.setName('speedy')
// console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
// console.log(lazy.stomach);
// console.log(hamster.stomach);

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal;
}

//   Rabbit.__proto__ = animal; dont work
// Rabbit.prototype = animal; this works

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

//   console.log( rabbit.eats );
//   String.prototype.name2 = 'this is proto!!!!!'
// const newString = new String('hi')
// console.log(newString.__proto__.name2)

// const newArr = new Array(3+1).join('La')
// console.log(newArr)
// console.log(Array.prototype.join)

//task 1

// Function.prototype.defer = function(ms,...args){
//     const func = this
//     setTimeout(func,ms)
// }
// function f() {
//     console.log("Hello!");
//   }

//   f.defer(1000); // shows "Hello!" after 1 second

//task2
Function.prototype.defer = function (ms) {
  let savedThis = this;
  return function wrapper(...args) {
    setTimeout(savedThis.bind(this, ...args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second
