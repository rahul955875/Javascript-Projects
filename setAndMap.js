const arr = [1, 2, 2, 3, 4];
const removeDuplicate = (arr) => {
  return Array.from(new Set(arr));
};
// console.log(removeDuplicate(arr))

const map = new Map([
  ["a", "apple"],
  [200, "ok"],
  ["name", { name: "john" }],
]);

// for(const [key,value] of map){
//     console.log(key,value)
// }

let map2 = new Map([...map]);
map2.set("a", "noApple");

// console.log(map2)

const arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const aclean = (arr) => {
  return Array.from(
    new Set(arr.map((a) => a.toLowerCase().split("").sort().join("")))
  );
};
// console.log(aclean(arr1))

const acleanWithMap = (arr) => {
  const map = new Map();
  for (const word of arr) {
    const sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
};
// console.log(acleanWithMap(arr1))

const cacheMap = new Map();
const cacheData = (key) => {
  if (cacheMap.has(key)) {
    return cacheMap.get(key);
  } else {
    cacheMap.set(key, "user " + key);
  }
  return "new cached" + key + " User" + key;
};

const arr2 = [1, 2, 3, 4, 4];
const getData = (arr) => {
  for (const key of arr2) {
    console.log(cacheData(key));
  }
};
// get1Data(arr2);
// console.log(cacheMap)

//conver a map to obj and viceversa
const map3 = new Map([
  ["a", "apple"],
  [200, "ok"],
  ["name", { name: "john" }],
]);

const newSet = new Set([1, 2, 3, 4]);
// console.log(newSet.add(NaN))
// map3.set(NaN,NaN)
// console.log(map3)

// console.log(Object.fromEntries(map3))
// const newObj = {
//     name : 'newObj',
//     role: 'plainObj'
// }
// console.log(new Map(Object.entries(newObj)))

const newEqulSet = new Set([1, 2, 3, 4]);
const newEqulSet2 = new Set([1, 6, 3, 4]);

const checkEqulityOfSet = (set1, set2) => {
  if (set1.size === set2.size) {
    for (let value of set1) {
      if (!set2.has(value)) {
        return false;
      }
    }
    return true;
  }
  return false;
};
// console.log(checkEqulityOfSet(newEqulSet, newEqulSet2));

// const setEx = new Set([1,2,3,4,5])

const newMapEx = new Map([
  [1, "javacript"],
  [2, "Python"],
  [3, "java"],
]);

console.log(newMapEx.keys().next().value)
console.log(Array.from(newMapEx.keys())[0])
