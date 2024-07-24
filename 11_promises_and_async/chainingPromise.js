// ? create a sequence of promises that simulate fetching data from a server, chain the promises to log messages in specific order

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data1 = "Data 1 fetched form the server";
      resolve(data1);
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data fetched, Depending on data1 ${data1}`);
    }, 500);
  });
}

function processesData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${Data1} + ${Data2}`;
      resolve(processedData);
    }, 1500);
  });
}

fetchData1()
  .then((data1) => {
    console.log(`Data from fetch data 1 recived, ${data1}`);
    return fetchData2(data1);
  })
  .then((data2) => {
    console.log(`Data recieved from data 2, ${data2}`);
    return processesData(data1, data2);
  })
  .then((processedData) => {
    console.log(`processed data Recieved, ${processedData}`);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
