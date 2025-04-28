function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % 2 === 0) return false;
  }
  return true;
}

const primes = [];
function printPrime(limit) {
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}
// console.log(printPrime())

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
// console.log(isPalindrome('naman'))
const arr = [1, 2, 3, 5];
function findMissingNum(arr) {
  const length = arr.length + 1;
  const total = (length * (length + 1)) / 2;
  const sum = arr.reduce((sum, curr) => (sum += curr));
  return total - sum;
}
// console.log(findMissingNum(arr))

// factorial of n``
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5))
const arr1 = [1, 2, 3, 3, 4, 4];
const unique = [];
function removeDuplicate(arr1) {
  for (const item of arr1) {
    if (!unique.includes(item)) unique.push(item);
  }
  return unique;
}
// console.log(removeDuplicate(arr1))
// show freq
const arr2 = ["a", "a", "a", "b"];

function freq(arr) {
  const freq = {};
  arr2.map((item) => (freq[item] = (freq[item] || 0) + 1));
  return freq;
}
// console.log(freq(arr2))

function setMatrixZero(matrix) {
  const rows = [];
  const cols = [];

  // Step 1: Record rows and cols that have 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  // Step 2: Set entire row and column to 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows.includes(i) || cols.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

// Example
const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];
//   console.log(setMatrixZero(matrix));

function setMetrixZero1(matrix) {
  const rows = [];
  const cols = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i]; j++) {
      if (rows.includes(i) || rows.includes(j)) {
        rows[i][j] = 0;
      }
    }
  }
  return matrix;
}

// console.log(setMatrixZero(matrix))

//0,1,1,2,4,6

function fibonacci(limit) {
  const fibo = [];
  let prev = 0;
  let next = 1;
  let temp;
  for (let i = 1; i <= limit; i++) {
    temp = prev + next;
    fibo.push(prev); //0,1,2
    prev = next;
    next = temp;
  }
  return fibo;
}
// console.log(fibonacci(14))
// [0,1,2,]
function secondFib(limit) {
  const fiboEle = [0, 1];
  for (let i = 2; i < limit; i++) {
    fiboEle[i] = fiboEle[i - 1] + fiboEle[i - 2];
  }
  return fiboEle;
}
// console.log(secondFib(14))
function thirdFibo(limit) {
  const fiboEle = [0, 1];
  let count = 2;
  while (limit > count) {
    fiboEle[count] = fiboEle[count - 1] + fiboEle[count - 2];
    count++;
  }
  return fiboEle;
}

// console.log(thirdFibo(14));

//count vowel
function countVowel(str) {
  const vowels = [];
  const strArr = str.toLowerCase().split("");
  console.log(strArr);
  //   const count = str.length;
  for (const alph of strArr) {
    switch (alph) {
      case "a":
        vowels.push(alph);
        break;
      case "i":
        vowels.push(alph);
        break;
      case "e":
        vowels.push(alph);
        break;
      case "u":
        vowels.push(alph);
        break;
      case "o":
        vowels.push(alph);
        break;
    }
  }
  const storeCount = {};
  for (let vowel of vowels) {
    if (storeCount[vowel]) {
      storeCount[vowel] += 1;
    } else {
      storeCount[vowel] = 1;
    }
  }
  return storeCount;
}
// console.log(countVowel('veeeeeeeeeeeeeeeeeeee'))

function countEx2(str) {
  const FindMathc = (str.match(/[aioue]/gi) || []).length;
  console.log(FindMathc);
}
// countEx2("nnn");

function findMissingNum(arr) {
  const total = ((arr.length + 1) * (arr.length + 2)) / 2;
  const actualSum = arr.reduce((sum, num) => (sum += num));
  const missingNum = total - actualSum;
  console.log(missingNum);
  return missingNum;
}
// findMissingNum([1,2,3,4,5,7])
// arr.flat(Infinity)

function delayFunc(fn, delay) {
  let timer;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return fn.apply(this, arg);
    }, delay);
  };
}

const printMessage = delayFunc(() => {
  console.log("hello");
}, 3000);
// printMessage()

// setInterval(() => {

// }, 500);
console.log();

//reverse string without reverse

function doReverse(str) {
  const reverseStr = [];
  const strArr = str.split("");
  const count = strArr.length;
  // console.log(strArr)
  for (let i = 0; i < count; i++) {
    const moveEl = strArr.pop();
    // console.log(moveEl)
    reverseStr.push(moveEl);
  }
  return reverseStr.join("");
}
// console.log(doReverse('asdf'))

function optimalDoReverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
// console.log(optimalDoReverse("hi"));

const newFlatedArr = [];
function flatArr(arr) {
  for (el of arr) {
    if (Array.isArray(el)) {
      flatArr(el);
    } else {
      newFlatedArr.push(el);
    }
  }
  return newFlatedArr;
}
// console.log(flatArr([[1, 2, [[[3]], 4]],[3, [6, 7]]]));
//more clean apporach
function flatArr2(arr) {
  const newFlatedArr = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      newFlatedArr.push(...flatArr(el));
    } else {
      newFlatedArr.push(el);
    }
  }
  return newFlatedArr;
}

function flatUsingStack(arr) {
  const stack = [...arr];
  const newFlated = [];
  while (stack.length) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
    } else {
      newFlated.push(current);
    }
  }
  return newFlated.reverse();
}

// console.log(
// flatUsingStack([
//     [[2], 2, [[[3]], 4]],
//     [3, [6, 7]],
//   ])
// );

let prices = Object.fromEntries([
  [2,"banana", 1,'id',23],
  ["orange", 2],
  ["meat", 4, "sfd"],
]);
// console.log(prices);

