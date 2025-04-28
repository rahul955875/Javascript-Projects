// Mock getUser function (same as you used)
const getUser = (id) => {
  return new Promise((res, rej) => {
    const timeout = 1000;
    setTimeout(() => {
      if (Math.random() < 0.2) {
        res({ id, name: "User " + id });
      } else {
        rej(new Error("Failed to fetch user " + id));
      }
    }, timeout);
  });
};

const ids = [1, 2, 3, 4, 5];

const retryFetch = async (id, attempts = 3) => {
  try {
    const result = await getUser(id);
    return result;
  } catch (error) {
    if (attempts > 1) {
      return retryFetch(id, attempts - 1);
    } else {
      return { id, name: "Unknown User" };
    }
  }
};
const fetchUser = async(ids) => {
    const start= performance.now()
    const promises = ids.map(id=>retryFetch(id))
    const UserList =await Promise.all(promises)
    const timeTaken = performance.now()- start
    console.log(UserList,timeTaken)
};
fetchUser(ids)

