function getResultByPath(path, obj) {
  //write your implementation here
  const pathChunks = path.split(".");
  // console.log(pathChunks)
  let result = obj;
  for (let i = 0; i < pathChunks.length; i++) {
    if (pathChunks[i].includes("[")) {
      let newChunk = pathChunks[i].split("[");
      let index = newChunk[newChunk.length - 1].slice(0, 1);
      if (result[newChunk[0]] === null) {
        console.log(result[newChunk[0]]);
        return result[newChunk[0]];
      }
      result = result[newChunk[0]][index];
    } else {
      result = result[pathChunks[i]];
    }
    if (result === undefined || result === null) {
      return result;
    }
  }
  console.log(result);
  return result;
}

//implementation 2 with regex

function getResultByPath1(path, obj) {
  const normalizePath = path.replace(/\[(\d+)\]/g, ".$1");
  const pathChunks = normalizePath.split(".");
  result = obj;
  for (const key of pathChunks) {
    result = result[key];
    if (result === undefined || result === null) return result;
  }
  return result;
}


const path = "data.results.value[0].kjh";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
      value: null,
    },
  },
};

const path1 = "items[1]";
const obj1 = {
  items: [
    { id: 1, name: "pen" },
    { id: 2, name: "pencil" },
  ],
};
console.log(getResultByPath1(path, obj));
