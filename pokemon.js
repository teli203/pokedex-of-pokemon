const MAX_POKEMON = 151;                    // the max amount of pokemon's to retrieve //
const listWrapper = document.querySelector(".list-wrapper");
const searchInput = document.querySelector("#search-input");
const numberFilter = document.querySelector("#number");
const nameFilter = document.querySelector("#name");
const notFoundMessage = document.querySelector("#not-found-message");

let allPokemons = [];                      // empty array to store all the pokemons //

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)     // first: fetching the pokemons
.then((response) => response.json())                                // then you receive the obj. w/ an array of 151 results for pokemons //
.then((data) => {                                                   // then you take that data //
    allPokemons = data.results;
});

async function fetchPokemonDatabeforeRedirect(id) {
    try {
        
    }
}
