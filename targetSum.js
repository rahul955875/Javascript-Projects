const arr = [1, 2, 3, 4, 5];

const findTargetSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[i] + arr[j] === target)
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return 'not found'
};
console.log(findTargetSum(arr, 4));
