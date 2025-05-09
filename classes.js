//constructor func
function User(name) {
  this.name = name;
  this.printName = function () {
    console.log("hi " + this.name);
  };
  //   ! its creates this function for every obj - memory enffecient use prototype to add this func or class
}

const newUser = new User("rahul");
// console.log(newUser.name)
// newUser.printName();
// console.log(User.prototype.constructor)

// for (let key in newUser) {
//   console.log(key);
// }

//task1
function Clock({ template }) {
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };
}

let clock = new Clock({ template: "h:m:s" });
// console.log(clock.start())
// clock.start();

// converting to class

class Clock2 {
  constructor({ template }) {
    this.template = template;
  }
  timer;
  render() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    let output = this.template
      .replace("h", hours)
      .replace("m", minutes)
      .replace("s", seconds);
    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
    setTimeout(this.stop, 5000);
  }
  stop = () => {
    clearInterval(this.timer);
  };
}

// const newClock = new Clock2({ template: "h:m:s" });
// newClock.start();


//fix this code 
let animal = {
    name: "Animal",
    eat() {
      console.log(`${this.name} eats.`);
    }
  };
  
  let rabbit = {
    __proto__: animal,
    name : 'rabit',
    // eat() {
    //   // ...bounce around rabbit-style and call parent (animal) method
    //   this.__proto__.eat.call(this); // (*)
    // }
  };
  
  let longEar = {
    __proto__: rabbit,
    name : 'longEar',
    // eat() {
    //   // ...do something with long ears and call parent (rabbit) method
    //   this.__proto__.eat.call(this); // (**)
    // }
  };
  
//   longEar.eat(); 

//! private and protected fields

// class CoffeeMachine {
//     _waterAmount = 0;
  
//     set waterAmount(value) {
//       if (value < 0) {
//         value = 0;
//       }
//       this._waterAmount = value;
//     }
  
//     get waterAmount() {
//       return this._waterAmount;
//     }
  
//     constructor(power) {
//       this._power = power;
//     }
  
//   }
  
//   // create the coffee machine
//   let coffeeMachine = new CoffeeMachine(100);
  
  // add water
//   coffeeMachine._waterAmount = -10; 
//   console.log(coffeeMachine.waterAmount)

// !no setter
// class CoffeeMachine {
//     // ...
  
//     constructor(power) {
//       this._power = power;
//     }
  
//     get power() {
//       return this._power;
//     }
  
//   }
  
//   // create the coffee machine
//   let coffeeMachine = new CoffeeMachine(100);
  
  
//   coffeeMachine._power = 25; 
//   console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W


// ! private properties #
class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
//   CoffeeMachine.#fixWaterAmount(123); // Error
//   CoffeeMachine.#waterLimit = 1000; //
