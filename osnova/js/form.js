import { refs } from "./refs.js";
import localStorageApi from "./localStorage.js";
import { onSubmitForm } from "./onSubmit.js";
import {populateMarkup} from "./opulateMarkap.js"
refs.form.addEventListener("submit", onSubmitForm);

populateMarkup();
