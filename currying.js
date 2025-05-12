function curryingSum(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      func.apply(this, args);
    } else {
      return function wrapper(...args2) {
        return curried.apply(this, [...args,...args2]);
      };
    }
  };
}

function sum(a, b, c) {
  console.log(a + b + c);
}
let firstArg = curryingSum(sum);
firstArg(1)(2)(3);
