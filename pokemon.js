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
    displayPokemons(allPokemons);
});

async function fetchPokemonDatabeforeRedirect(id) {                 // enabling non-blocking behavior for the API call //
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

function displayPokemons(pokemon) {                         // emptying the list wrapper so if pg reloads it's not adding PM on top of the
    listWrapper.innerHTML = "";                             //  existing ones //

    pokemon.forEach((pokemon) => {
        const pokemonID = pokemon.url.split("/")[6];            // this is asking after the 6th slash '/' is what we are asking for ex: 
        const listItem = document.createElement("div");         //'https://pokeapi.co/api/v2/pokemon/ditto' has a total of 6 '/' before 
        listItem.className = "list-item";                       // getting to ditto //
        listItem.innerHTML =                                    // cretaing the html structure and targeting each with it's id's //
        `
        <div class="number-wrap">                               
        <p class="caption-fonts">#${pokemonID} </p>
        </div>
        <div class="img-wrap">
        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg" alt="${pokemon.name}" />
        </div>
        <div class="name-wrap">
        <p class="body3-fonts">#${pokemon.name} </p>
        </div>
        `;

        listItem.addEventListener("click", async () => {                    // adding a click event that takes us to the details pg of every 
            const success = await fetchPokemonDatabeforeRedirect(pokemonID);//PM that we click on from the main pg.
            if (success) {                                                  // keeping the same html pg while loading different PM id's //
                window.location.href = `./detail.html?id=${pokemonID}`;
            }
        });

        listWrapper.appendChild(listItem);                                  // adding all theses to the list wrapper //
    });                                                         
}
