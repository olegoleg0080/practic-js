const BASE_URL = `https://yesno.wtf/api`;
const refs = {
    questForm: document.querySelector('.quest'),
    answerBox: document.querySelector('.answer-box'),
    questInput: document.querySelector('.quest__input'),
    questBtn: document.querySelector('.quest__btn'),
};
refs.questForm.addEventListener("submit", onSendForm);
function onSendForm(e) {
    e.preventDefault();
    const options = ["yes", "no", "maybe"]
    const value = refs.questInput.value.trim();
    if(!value || !options.includes(value)){
        alert('error')
        return;
    }
    fetch(`${BASE_URL}?force=${value}`)
    .then((res) => res.json())
    .then((res) => populateAnswerBox(res));
}
    function populateAnswerBox({answer, image}) {
        refs.answerBox.innerHTML = '';
        const answerEl = `<p class="answer-box__text">${answer}</p>
        <img class="answer-box__img" src="${image}" alt="${answer} - gif">`;
        refs.answerBox.insertAdjacentHTML('beforeend', answerEl)
    }
    