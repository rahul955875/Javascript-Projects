function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise).then(resolve).catch(e=>{});
    }
  });
}

//For the purpose of user debugging.
//pass appropiate input in below function call.
const settledValue = promiseRace([Promise.reject(1), 5, Promise.resolve(2)]);
settledValue.then((res) => console.log(res)).catch((e) => console.log(e));
