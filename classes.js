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
