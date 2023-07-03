console.clear
function dqs(selector) {
    return document.querySelector(selector);
}
const refs = {
    clickerBtn: dqs('.clicker-btn'),
    createName: dqs('.name-create'),
    createColor: dqs('.color-input'),
    basts: dqs('.basts'),
    btnCreate: dqs('.create'),
    timer: dqs('.timer'),
    accountList: dqs('.list-account'),
    scoreList: dqs('.list-score'),
    scoreAccount: dqs('.score-account'),
    place: dqs('.place'),
    try: dqs('.try-Again'),
}
let nameS;
let nameP;
let bestS = 0;
let clicks = 0;
refs.basts.textContent = localStorage.getItem('Best Score')
if (!localStorage.getItem('Best Score')) {
    refs.basts.textContent = 0
}
refs.clickerBtn.addEventListener('click', clickerStart);
refs.try.addEventListener('click', tryAgain);
function clickerTimer(){
    let seconds = 9;
    const timerInterval = setInterval(() => {
        refs.timer.textContent = seconds;
        seconds -= 1;
        if (seconds < 0) {
            clearInterval(timerInterval);
            clickerStop();
            refs.clickerBtn.removeEventListener('click', clickCach)
            refs.try.style= "display: block;";
        }
    }, 1000);
}
function clickerStart() {
    if (!document.querySelector('.select')) {
        alert('выберите акаунт')
        return;
    }
    refs.clickerBtn.textContent = clicks;
    refs.clickerBtn.removeEventListener('click', clickerStart);
    refs.clickerBtn.addEventListener('click', clickCach)
    clickerTimer()
}
function clickCach() {
    clicks+=1;
    refs.clickerBtn.textContent = clicks;
}
function clickerStop() {
    if (clicks > localStorage.getItem('Best Score')) {
        bestS = clicks;
        localStorage.setItem('Best Score', bestS);
        refs.basts.textContent = bestS
    }
    nameP.textContent = clicks;
    updateScore(nameS, clicks)
    sortAccount()
    clicks = 0;
}
function tryAgain() {
    refs.timer.textContent = 10;
    refs.clickerBtn.textContent = 'start';
    refs.clickerBtn.addEventListener('click', clickerStart);
    refs.try.style= "display: none;";
}
populateAccounts();
function dataSave() {   
    const name = refs.createName.value;
    const color = refs.createColor.value;
    let scoreResult = refs.clickerBtn.textContent;
    if (name === '') {
        alert('Введите имя');
        return;
    }
    let userList = JSON.parse(localStorage.getItem('userList')) || {};

    if (userList[name]) {
        alert('такое имя уже существует');
        return;
    }
    if (scoreResult == 'start') {
        scoreResult = 0;
    }
    userList[name] = {
        name: name,
        color: color,
        score: scoreResult,
    };
    localStorage.setItem('userList', JSON.stringify(userList));
    populateAccounts()
    refs.createName.value = '';
}
function createAccount(name, color, scoreResult) {
    const user = `
    <div class="account delete-account">
    <h2 class="name-account">${name}</h2>
    <div class="color" style="background-color: ${color};"></div>
    <button class="delete">
        <svg class="account-svg">
            <use href="../img/svg/delete-accaunt.svg#Layer_1"></use>
        </svg>
    </button>
    </div>`
    const scoreUser = `
    <div class="score-account">
        <div class="place"></div>
        <div class="score  ${name}">${scoreResult}</div>
        <div class="color" style="background-color: ${color};"></div>
        <div class="name-account name-score">${name}</div>
    </div>`
    refs.accountList.insertAdjacentHTML('beforeend', user);
    refs.scoreList.insertAdjacentHTML('beforeend', scoreUser);
}
function populateAccounts() {
    const userList = JSON.parse(localStorage.getItem('userList'));
    if (userList) {
    refs.accountList.innerHTML = '';
    refs.scoreList.innerHTML = '';
    const sortedAccounts = Object.values(userList).sort((a, b) => b.score - a.score);
    sortedAccounts.forEach((account) => {
        const { name, color, score } = account;
        createAccount(name, color, score);
    });
    }
}
function select(accountEl) {
    const selectedAccount = refs.accountList.querySelector('.select');
    if (selectedAccount) {
        selectedAccount.classList.remove('select');
        tryAgain()
    }
    nameS =  accountEl.querySelector('.name-account').textContent;
    nameP = document.querySelector(`.${nameS}`)
    console.log(nameP);
    accountEl.classList.add('select');
}
function deleteAccount(event) {
    const deleteBtn = event.target.closest('.delete');
    if(!deleteBtn) return;

    const accountEl = deleteBtn.closest('.account')
    const nameEl = accountEl.querySelector('.name-account')
    const name = nameEl.textContent;
    accountEl.remove();

    const userList = JSON.parse(localStorage.getItem('userList'));
    if(userList && userList[name]){
        delete userList[name];
        localStorage.setItem('userList', JSON.stringify(userList));
    }

    const scoreAccounts = document.querySelectorAll('.score-account');
    scoreAccounts.forEach((scoreAccount) => {
        const scoreNameEl = scoreAccount.querySelector('.name-account');
        if (scoreNameEl.textContent === name) {
            scoreAccount.remove();
        }
    });
}
function accountClick(event) {
    const accountEl = event.target.closest('.account');
    if (!accountEl) return;

    select(accountEl);
}
function updateScore(nameS, newScore) {
    let userList = JSON.parse(localStorage.getItem('userList')) || {};
    if (userList[nameS]) {
    userList[nameS].score = newScore;
    localStorage.setItem('userList', JSON.stringify(userList));
    }
}
function sortAccount() {
    const scoreAccounts = Array.from(document.querySelectorAll('.score-account'));
    scoreAccounts.sort((a, b) => {
        const scoreA = parseInt(a.querySelector('.score').textContent);
        const scoreB = parseInt(b.querySelector('.score').textContent);
        return scoreB - scoreA;
    });
    const scoreList = document.querySelector('.list-score');
    scoreAccounts.forEach((account) => {
        scoreList.appendChild(account);
    });
}
refs.accountList.addEventListener('click', accountClick);
refs.btnCreate.addEventListener('click', dataSave);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        dataSave()
    }
});
refs.accountList.addEventListener('click', deleteAccount);
