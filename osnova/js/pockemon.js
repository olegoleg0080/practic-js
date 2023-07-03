const KITSU_BASE_URL = `https://pokeapi.co/api/v2`;
const refs = {
    animeForm: document.querySelector(".header__search"),
    animeList: document.querySelector(".pages"),
    animeInput: document.querySelector(".header__search-input"),
    retings: document.querySelector(".rating__active"),
    backPageBtn: document.querySelector(".back-page"),
    forwardPageBtn: document.querySelector(".forward-page"),
    thisPageBtn: document.querySelector(".this-page"),
};
let page = 1;
let totalPages = 1;
refs.animeForm.addEventListener("submit", onSendForm);
refs.backPageBtn.addEventListener("click", onBackPage);
refs.forwardPageBtn.addEventListener("click", onForwardPage);
fetchStartAnime();
function onSendForm(e) {
    e.preventDefault();
    const value = refs.animeInput.value.trim();
    if (!value) {
        return;
    }
    page = 1;
    fetchAnime(value);
}

function fetchAnime(value) {
    let url = `${KITSU_BASE_URL}/pokemon/${value}`;
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((data) => {
            populatePokemon(data);
        })
        .catch((error) => {
            if (error instanceof Response && error.status === 404) {
                console.log("404 Not Found - Покемон не найден");
            } else {
                console.error("Ошибка при выполнении запроса:", error);
            }
        });
}


function populatePokemonList(data) {
    refs.animeList.innerHTML = "";
    let pokemonList = data.results;

    let promises = pokemonList.map((pokemon) => {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = data.sprites.front_default;
                const pokemonEl = `
                <li class="card">
                    <img src="${imageUrl}" class="card-img-top" alt="${pokemon.name}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.name}</h5>
                    </div>
                </li>`;
                return pokemonEl;
            });
    });

    Promise.all(promises).then((cardList) => {
        refs.animeList.innerHTML = cardList.join("");
    });
}
function populatePokemon(data) {
    refs.animeList.innerHTML = "";
    const imageUrl = data.sprites.front_default;
    const pokemonEl = `
        <li class="card">
            <img src="${imageUrl}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
            </div>
        </li>`;
    refs.animeList.innerHTML = pokemonEl;
}


function onBackPage() {
    if (page > 1) {
        page--;
        fetchAnime(refs.animeInput.value.trim());
    }
}

function onForwardPage() {
    if (page < totalPages) {
        page++;
        fetchAnime(refs.animeInput.value.trim());
    }
}

function updatePagination() {
    refs.thisPageBtn.textContent = page;
    if (page === 1) {
        refs.backPageBtn.disabled = true;
    } else {
        refs.backPageBtn.disabled = false;
    }
    if (page === totalPages) {
        refs.forwardPageBtn.disabled = true;
    } else {
        refs.forwardPageBtn.disabled = false;
    }
}

