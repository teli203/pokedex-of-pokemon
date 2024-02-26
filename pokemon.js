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
        const [pokemon, pokemonSpecies] = await Promise.all
        ([fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => 
            res.json()
        ),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => 
            res.json()
        ),
    ])
    return true
    } catch (error) {
        console.error("Failed to fetch Pokemon data before redirect");
    }
}

function displayPokemons(pokemon) {
    listWrapper.innerHTML = "";

    pokemon.forEach((pokemon) => {
        const pokemonID = pokemon.url.split("/")[6];            // this is asking after the 6th slash '/' is what we are asking for ex: 'https://pokeapi.co/api/v2/pokemon/ditto' has a total of 6 '/' before getting to ditto //
        const listItem = document.createElement("div");
        listItem.className = "list-item";
        listItem.innerHTML = `
        <div class="number-wrap">
        <p class="caption-fonts">#${pokemonID} </p>
        </div>
        <div class="img-wrap">
        <<img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg" alt="${pokemon.name}" /> 
        </div>
        <div class="name-wrap">
        <p class="body3-fonts">#${pokemon.name} </p>
        </div>
        `;

        listItem.addEventListener("click", async () => {
            const success = await fetchPokemonDatabeforeRedirect(pokemonID);
            if (success) {
                window.location.href = `./detail.html?id=${pokemonID}`;
            }
        })

    });                                                         
}
