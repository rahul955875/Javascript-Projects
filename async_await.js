// task 1
function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("https://javascript.info/no-such-user.json").catch(console.log);

//conver above code into async await

async function loadJsonAsync(url) {
  const respose = await fetch(url);
  if (respose.status == 200) {
    return await respose.json();
  } else {
    throw new console.error();
  }
}
loadJsonAsync("https://javascript.info/no-such-user.json").catch(console.log);
