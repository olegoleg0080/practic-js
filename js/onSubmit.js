import { createCard } from "./create-card.js";
import localStorageApi from "./localStorage.js";
export function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const saveData = localStorageApi.load() ? localStorageApi.load() : [];
  const arrData = saveData;
  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });
  arrData.push(data);
  localStorageApi.save(arrData);
  console.clear();
  createCard(data)
  e.currentTarget.reset();
}
