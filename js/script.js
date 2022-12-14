document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const petBreed = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://pet-breeds-api.herokuapp.com/api/${petBreed}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h3").innerText = data.facts;
  } catch (error) {
    console.log(error);
  }
}
