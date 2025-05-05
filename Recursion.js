const sumTo = (n) => {
  if (n === 1) return 1;
  return n + sumTo(n - 1);
};
// console.log(sumTo(10))
// console.log(sumTo(100))

const sumUsingLoop = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumUsingLoop(10));
// console.log(sumUsingLoop(100));

const sumUsingFormula = (n) => {
  return (n * (n + 1)) / 2;
};
// console.log(sumUsingFormula(10))
// console.log('sum using formula ' +sumUsingFormula(100))

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
// console.log(factorial(5))

const fib = (n) => {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(7))
// console.log(fib(77))

const fibWithLoop = (n) => {
  let prev = 0;
  let next = 1;
  let temp;

  if (n < 2) return 1;
  for (let i = 1; i < n; i++) {
    sum = prev + next;
    temp = prev + next;
    prev = next;
    next = temp;
  }
  return next;
};
// console.log(fibWithLoop(1))//1 2 3 5 8 13 21
// console.log(fibWithLoop(2))
// console.log(fibWithLoop(3))
// console.log(fibWithLoop(7))
// console.log(fibWithLoop(77))

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printList = (list) => {
  const arr = [];
  arr.push(list.value);
  if (list.next) {
    arr.push(...printList(list.next));
  }
  return arr;
};

// console.log(printList(list));

const printListUsingLoop = (list) => {
  const arr = [];
  while (true) {
    arr.push(list.value);
    if (list.next == null) {
      break;
    }
    list = list.next;
  }
  return arr;
};
// console.log(printListUsingLoop(list))

// const makeList = (arr) => {
//   let list = {};
//   list.value = value;
//   list.next = null;
//   if (Array.isArray(arr)) {
//     for(let value of arr){
//         list.next
//         makeList(value)
//     }
//   }
//   return list;
// };
// console.log(makeList([1, 2, 3, 4]));
const args = ()=>{
    // console.log(arguments)
    // takes form outer function
}
// console.log(args)
// args(1,2,3,4)
