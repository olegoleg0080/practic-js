const KITSU_BASE_URL = `https://kitsu.io/api/edge`;
const refs = {
    animeCont: document.querySelector(".container"),
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
    let url = `${KITSU_BASE_URL}/anime?page[limit]=9&page[offset]=${
        (page - 1) * 9
    }&sort=-averageRating`;
    if (value) {
        url = `${KITSU_BASE_URL}/anime?filter[text]=${value}&page[limit]=9&page[offset]=${
            (page - 1) * 9
        }&sort=-averageRating`;
    }
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((res) => {
            totalPages = Math.ceil(res.meta.count / 9);
            populateAnimeList(res);
            updatePagination();
        })
        .catch((error) => {
            if (error instanceof Response && error.status === 404) {
                console.log("404 Not Found - Аниме не найдено");
            } else {
                console.error("Ошибка при выполнении запроса:", error);
            }
        });
}

function populateAnimeList(data) {
    refs.animeList.innerHTML = "";

    const loaderEl = document.createElement("span");
    loaderEl.classList.add("loader");
    refs.animeCont.appendChild(loaderEl);

    let animeList = data.data;

    animeList.sort((a, b) => {
        const ratingA = a.attributes.averageRating || 0;
        const ratingB = b.attributes.averageRating || 0;
        return ratingB - ratingA;
    });

    let cardList = [];
    let promises = animeList.map((anime) => {
        return fetch(`${KITSU_BASE_URL}/anime/${anime.id}/genres`)
            .then((response) => response.json())
            .then((data) => {
                const genres = data.data.map((genre) => genre.attributes.name);
                let a = anime.attributes.averageRating;
                let b = 0;
                if (anime.attributes.averageRating) {
                    b = a;
                }
                const animeEl = `<li class="anime-card">
                    <a href="https://www.google.com.ua/search?q=${anime.attributes.canonicalTitle}">
                        <div class="anime-img">
                            <div class="anime-reting-img">
                                <div class="reting">
                                    <div class="reting__body">
                                        <div class="reting__active" style="width: ${b}%;"></div>
                                        <div class="reting__items"></div>
                                    </div>
                                </div>
                                <img class="anime-1-img" src="${anime.attributes.posterImage.small}" alt="${anime.attributes.canonicalTitle}" />
                                <div class="plot-block">
                                    <p class="plot">${anime.attributes.synopsis}</p>
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <h3 class="name">${anime.attributes.canonicalTitle}</h3>
                            <p class="genres">${genres.join(", ")}</p>
                        </div>
                    </a>
                </li>   `;
                cardList.push(animeEl);
            });
    });
    Promise.all(promises).then(() => {
        if (cardList.length === 0) {
            console.log('аниме не найдено');
        } else {
            loaderEl.remove();
            refs.animeList.insertAdjacentHTML("beforeend", cardList.join(``));
            console.log(cardList);
        }
    });
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

function fetchStartAnime() {
    let url = `${KITSU_BASE_URL}/anime?page[limit]=9&page[offset]=${(page - 1) * 9}&sort=-averageRating`;
    
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw res;
            }
            return res.json();
        })
        .then((res) => {
            const animeList = res.data;
            animeList.sort((a, b) => {
                const ratingA = a.attributes.averageRating || 0;
                const ratingB = b.attributes.averageRating || 0;
                return ratingB - ratingA;
            });
            
            totalPages = Math.ceil(res.meta.count / 9);
            populateAnimeList(res);
            updatePagination();
        })
        .catch((error) => {
            if (error instanceof Response && error.status === 404) {
                console.log('404 Not Found - Аниме не найдено');
            } else {
                console.error("Ошибка при выполнении запроса:", error);
            }
        });
}

