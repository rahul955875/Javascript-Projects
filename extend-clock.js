import { Clock } from "./clock.js";
// let clock = new Clock({
//   template: "h:m:s",
// });
// clock.start();

/* Your class should work like this: */

class ExtendedClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super(precision,template);
    this.precision = precision;
    this.template = template
   
  }
  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render();
    }, this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: "h:m:s",
  precision: 10000,
});

lowResolutionClock.start();
