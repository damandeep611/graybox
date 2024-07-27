const apiKey = "2d40f7cb4ef4484786054148242507";
const baseUrl = "http://api.weatherapi.com/v1";
const city = "London";

// fetch(`${baseUrl}/timezone.json?key=${apiKey}&q=${city}`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not okay: Error occured");
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   });
const newCity = "tokyo";
function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Error occured fetching data");
    } else {
      return response.json();
    }
  });
}
fetchData(`${baseUrl}/timezone.json?key=${apiKey}&q=${newCity}`)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("error occured here so", error);
  });

// ?==================== now fetching data with the async await functionality
const localCity = "himachal";
async function fetchNewCity(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Himchal data could not fetch");
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error("Error occured  fetching data:", error);
  }
  throw error;
}
fetchNewCity(`${baseUrl}/timezone.json?key=${apiKey}&q=${localCity}`)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error occred:", error);
  });
