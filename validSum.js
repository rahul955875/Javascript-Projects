const arr = ["01", 56, "lksfd", 20, 65, 0, -10];
//expected arr = [56, 20,65,] = 5+6 --- > all 24

const validArr = arr.filter((a) => typeof a === "number" && a > 0);

const result = validArr.reduce((acc, curr) => {
  let sumOfCurr = curr
    .toString()
    .split("")
    .reduce((acc, curr) => (acc += Number(curr)), 0);
  return (acc += sumOfCurr);
}, 0);

console.log(result);
