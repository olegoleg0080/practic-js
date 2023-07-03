import { refs } from "./refs.js";

export function createCard(data){const card = `<li class="card-list-item">
  <button class="card-list-item-btn">delete</button>
  <h2 class="card-list-item-title">${data.title}</h2>
  <p class="card-list-item-text">${data.text}</p>
</li>`
refs.cards.insertAdjacentHTML('beforeend', card);}

function deleteCard(event) {
  if (event.target.classList.contains('card-list-item-btn')) {
    const card = event.target.closest('.card-list-item');
    card.remove();
    const cards = JSON.parse(localStorage.getItem('cardsKey')) || [];
    const cardIndex = Array.from(refs.cards.children).indexOf(card);
    cards.splice(cardIndex, 1);
    localStorage.setItem('cardsKey', JSON.stringify(cards));
  }
}
const cardList = document.querySelector('.card-list');
cardList.addEventListener('click', deleteCard);