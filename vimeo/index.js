// vimeo.js
const Player = require('@vimeo/player');

// Отримання елементів
const refs = {
    openModalButton: document.querySelector('.open-modal'),
    modal: document.querySelector('.modal'),
    playerElement: document.querySelector('.player'),
    closeModalButton: document.querySelector('.close-modal'),
    rewindButton: document.querySelector('.rewind'),
    forwardButton: document.querySelector('.forward'),
    volumeUpButton: document.querySelector('.volume-up'),
    volumeDownButton: document.querySelector('.volume-down'),
    playbackRateSelect: document.querySelector('.playback-rate'),
    adModal: document.querySelector('.ad-modal'),
    closeAdButton: document.querySelector('.close-ad'),
    donateButton: document.querySelector('.donate')
};

// Створення Vimeo.Player
const player = new Player(refs.playerElement);

// Змінні для збереження стану
let adCount = 0;
let adDisabled = false;

// Функції для управління плеєром
function saveTime() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem('vimeoTime', seconds);
    });
}

function loadTime() {
    const time = localStorage.getItem('vimeoTime');
    if (time) {
        player.setCurrentTime(time);
    }
}

function rewind() {
    player.getCurrentTime().then(function(seconds) {
        player.setCurrentTime(Math.max(0, seconds - 10));
    });
}

function forward() {
    player.getCurrentTime().then(function(seconds) {
        player.getDuration().then(function(duration) {
            player.setCurrentTime(Math.min(duration, seconds + 10));
        });
    });
}

function volumeUp() {
    player.getVolume().then(function(volume) {
        player.setVolume(Math.min(1, volume + 0.1));
    });
}

function volumeDown() {
    player.getVolume().then(function(volume) {
        player.setVolume(Math.max(0, volume - 0.1));
    });
}

function setPlaybackRate() {
    const rate = parseFloat(refs.playbackRateSelect.value);
    player.setPlaybackRate(rate);
}

function checkAd(seconds) {
    if (adDisabled) return;
    player.getDuration().then(function(duration) {
        if (seconds >= duration * 0.25 * (adCount + 1)) {
            adCount++;
            showAd();
        }
    });
}

function showAd() {
    player.pause();
    refs.adModal.style.display = 'block';
}

function hideAd() {
    refs.adModal.style.display = 'none';
    if (adCount >= 3) {
        adDisabled = true;
    } else {
        player.play();
    }
}

function donate() {
    adDisabled = true;
    hideAd();
}

// Обробка подій
refs.openModalButton.addEventListener('click', function() {
    refs.modal.style.display = 'block';
    loadTime();
});

refs.closeModalButton.addEventListener('click', function() {
    refs.modal.style.display = 'none';
    saveTime();
});

refs.rewindButton.addEventListener('click', rewind);
refs.forwardButton.addEventListener('click', forward);
refs.volumeUpButton.addEventListener('click', volumeUp);
refs.volumeDownButton.addEventListener('click', volumeDown);
refs.playbackRateSelect.addEventListener('change', setPlaybackRate);
refs.closeAdButton.addEventListener('click', hideAd);
refs.donateButton.addEventListener('click', donate);

player.on('timeupdate', function(data) {
    checkAd(data.seconds);
});

