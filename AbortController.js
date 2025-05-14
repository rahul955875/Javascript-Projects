// const controller = new AbortController();
// const signal = controller.signal;
// fetch(URL, {
//   signal,
// });

// signal.addEventListener("abort", () => console.log("request aborted!!!"));

// console.log(controller.signal.aborted);
// controller.abort();
// console.log(controller.signal.aborted);

//can abort multiple asyncronus task with one controller

const controller = new AbortController();

const urls = ["https://jsonplaceholder.typicode.com/users"];

const asyncTask = new Promise((res) => {
  const response = new Response(JSON.stringify({ task: "async task !!!" }), {
    headers: {
      "Content-Type": "apllication/json",
    },
  });
  setTimeout(() => {
    res(response);
  }, 1000);
  controller.signal.addEventListener("abort", () => console.log("aborted"));
});

// console.log(asyncTask.then((res)=>console.log(res)))

async function fetchMultiple(urls) {
  try {
    const start = Date.now();
    const fetchUrls = urls.map((url) =>
      fetch(url, { signal: controller.signal })
    );
    const response = await Promise.all([...fetchUrls, asyncTask]);
    const result = await Promise.all(response.map((res) => res.json()));

    return {
      timeTaken: Date.now() - start,
      result: result,
    };
  } catch (error) {
    return error.message
  }
}

fetchMultiple(urls).then((res) => console.log(res));

setTimeout(() => {
  controller.abort();
}, 500);
