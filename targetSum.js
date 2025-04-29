// const arr = [1, 2, 3, 4, 5];
const arr = [2, 4, 5, 3, 5];

const findTargetSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[i] + arr[j] === target)
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return "not found";
};
// console.log(findTargetSum(arr, 4));

const findTargetSum2 = (arr, target) => {
  const set = new Set();
  for (let num of arr) {
    // target = num + comp
    const comp = target - num;
    // console.log("comp-->", comp);
    if (set.has(comp)) {
      return {value:[comp,num],index : [arr.indexOf(comp),arr.indexOf(num)]}
    }
    set.add(num);
    // console.log('nums-->',set.values())
  }
  return "not found";
};
// const arr = [2,4,5,3,5]
//comp 7,5,4 -> 4,5
//num 2,4,
console.log(findTargetSum2(arr, 9));
