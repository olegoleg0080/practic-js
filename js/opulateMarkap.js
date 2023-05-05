import localStorageApi from "./localStorage.js";
import { refs } from "./refs.js";
export function populateMarkup() {
    const saveData =  localStorageApi.load();
    if(!saveData){
        return
    }
    console.log(saveData)
    const dataItemsEl = saveData.map(({title, text}) => {
        return `<li  class="card-list-item">
        <button class="card-list-item-btn">delete</button>
        <h2 class="card-list-item-title">${title}</h2>
        <p class="card-list-item-text">${text}</p>
    </li>`
    })
    .join();
    refs.cards.insertAdjacentHTML('beforeend', dataItemsEl);
}