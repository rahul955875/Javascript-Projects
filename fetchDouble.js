// Write an async function fetchDouble(ids) that fetches each user sequentially, but after getting the user, wait 2 seconds artificially before fetching the next one.

// (Hint: create a delay function yourself!)

function getUser(id) {
  return new Promise((resolve) => {
    const timeout = 1000;
    setTimeout(() => {
        resolve({id,user:'User'+id})
    }, timeout);
  })
}
const wait = async(ms)=>{
    return new Promise(resolve => {
        setTimeout(resolve,ms)
    })
}
const ids = [1, 2, 3];
const fetchDouble = async (ids) => {
    const result = []
    const start = Date.now()
    try {
        for(const id of ids){
            const res = await getUser(id)
            console.log(res)
            result.push(res)
        await wait(2000)
        }
    } catch (error) {
        console.log(error)
        result.push({id:0,user:'unkonwn'})
    }
    // console.log(result)
    const end = Date.now()
    const timeTaken = end - start
    return {result,timeTaken}
};
fetchDouble(ids).then(res=>console.log(res))
