// Write a function safeFetch(ids) that fetches all users in parallel,
// but if any single user fetch fails, catch that error and return { id, name: 'Unknown' } for that user.
const getUser = (id) => {
  return new Promise((res,rej) => {
    const timeout = 1000;
    setTimeout(() => {
        if(Math.random()<0.7){

            res({ id, name: "User " + id });
        }else{
            rej(new Error('error during fetching user '+id))
        }
    }, timeout);
  });
};
const ids = [1, 2, 3];
const safeFetch = async (ids) => {
  // console.time()
  const start = performance.now();
  const res = ids.map((id) => getUser(id).catch(err=> ({id, name:"unknow user"})));
  const getResult = await Promise.all(res);
  const end = performance.now();
  // console.timeEnd()
  console.log({ getResult, timeTaken: end - start });
};
safeFetch(ids);
