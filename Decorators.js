const cacheDecorator = (func) => {
  let cache = new Map();
  return async function wrapper(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let timer = await new Promise((res) =>
      setTimeout(() => {
        res("hi");
      }, 2000)
    );
    let res = func(x);
    cache.set(x, `cached res ${res}`);
    return res;
  };
};

const slow = (x) => {
  return x++;
};

// const cacheSlow = cacheDecorator(slow);
// cacheSlow(1).then((res) => console.log(res));
// cacheSlow(1).then((res) => console.log(res));

function funcWithProp() {
  console.log("count : " + funcWithProp.count++);
  return 1;
}
funcWithProp.count = 2;
// console.log(funcWithProp.count++)
// console.log(funcWithProp.count++)

// funcWithProp()
// funcWithProp()

function wrapper(func) {
  return func;
}
// console.log(wrapper(funcWithProp).count)

//spy decorator
function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}
function spy(func) {
  return function wrapper(...args) {
    if (wrapper.calls) {
      wrapper.calls = [...wrapper.calls, ...args];
    } else {
      // console.log('else')
      wrapper.calls = args;
    }
    func(...args);
  };
}
// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9
// console.log(work.calls);
//   for (let args of work.calls) {
//     console.log( 'call:' + args ); // "call:1,2", "call:4,5"
//     // console.log(args)
//   }

//Delaying Decorator
function f(x) {
  console.log(x);
}

// create wrappers
function delay(func, ms) {
  return function (...args) {
    return new Promise((res) => {
      setTimeout(() => {
        res(func.apply(this, args));
      }, ms);
    });
  };
}

//   let f1000 = delay(f, 1000);
//   let f1500 = delay(f, 1500);

//   f1000("test1000"); // shows "test" after 1000ms
//   f1500("test1500");

//Debounce Decorator
function debounce(func, ms) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}

function print(x) {
  console.log(x);
}
// let debouncePrint = debounce(print, 2000);
// debouncePrint("hello");
// debouncePrint("hello2");
// debouncePrint("hello3");

// throttle decorator

function throttle(func, ms) {
  let isTrottle = false;
  let savedThis;
  let savedArgs;

  return function wrapper(...args) {
    if (isTrottle) {
      savedArgs = args;
      savedThis=this
      return;
    }
    isTrottle = true;
    func.apply(savedThis, args);
    setTimeout(() => {
      isTrottle = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = this
      }
    }, ms);
  };
}
function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
// let f1000 = throttle(f, 1000);

// f1000(1); // shows 1
// f1000(2); // (throttling, 1000ms not out yet)
// f1000(3); // (throttling, 1000ms not out yet)
// f1000(4); // (throttling, 1000ms not out yet)

// let f1500 = throttle(f,1500)
// f1500(10)
// f1500(20)
// f1500(30)
// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored

// console.log(globalThis.this)
// console.log(globalThis.throttle) no such thing