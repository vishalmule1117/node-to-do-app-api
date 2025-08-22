console.log("This is From Client");

let backendData = fetch("http://localhost:3001/todos");

backendData
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log("This is From Finally"));
