const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f5a00b2306a9486f99a67272cfdd7b1fx";

const resultsContainer = document.querySelector(".results");

async function getData() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    // console.log(results.results)

    const name = results.results[0].name;

    const rating = results.results[0].rating;

    const numberOfTags = results.results[0].tags;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < rating.length, name.length, numberOfTags.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="resultsInfo">${results.results[i].name}<div><div class="resultsInfo">${results.results[i].rating}<div><div class="resultsInfo">${results.results[i].numberOfTags}<div>`;
    }
  } catch (error) {
    console.log("An error has occured");
    resultsContainer.innerHTML = errorMessage("An Error has Occured");
  }
}

getData();

// Would normally put this in a "components" folder, but assignment asked for otherwise
function errorMessage(message) {
  return `<div class="error">${message}</div>`;
}