// ? Graceful Error handling in Fetch
// fetch("https://invalid-url")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

async function fetchData() {
  try {
    const response = await fetch("https://invalid-url");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
