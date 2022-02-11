// Question 1
const getRemainder = (a, b) => {
    return a % b;
}

// Question 2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f5a00b2306a9486f99a67272cfdd7b1f";

const resultsContainer = document.querySelector(".results")

async function getData() {

    const response = await fetch(url);

    const results = await response.json();

    console.log(results.results)

    const name = results.results[0].name;

    const rating = results.results[0].rating;

    const numberOfTags = results.results[0].tags.length;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < rating.length, name.length, numberOfTags; i++) {

        if (i === 8) {
            break;
        }
        console.log(results.results[i].name);
        console.log(results.results[i].rating);
        console.log(results.results[i].numberOfTags);
        
        resultsContainer.innerHTML += `<div class="results">${results.results[i].name}<div><div class="results">${results.results[i].rating}<div><div class="results">${results.results[i].numberOfTags}<div>`
    }
}

getData();