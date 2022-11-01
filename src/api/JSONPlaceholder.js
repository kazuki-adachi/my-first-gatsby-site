//api呼び出し
async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log("-------API--------");
    console.log(users)
    console.log('出力結果: ' + users.length);
    console.log("---------------");
  };
  callApi();
  