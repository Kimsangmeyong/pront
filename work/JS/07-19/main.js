'use strict';

let body = document.querySelector('body'),
    h1 = document.querySelector('h1');

let blackBg_Btn = document.getElementById('blackBg_Btn'),
    whiteBg_Btn = document.getElementById('whiteBg_Btn'),
    blackBgGreenColor_Btn = document.getElementById('blackBgGreenColor_Btn'),
    whiteBgRedColor_Btn = document.getElementById('whiteBgRedColor_Btn'),
    blackBgChangeText_Btn = document.getElementById('blackBgChangeText_Btn'),
    commit_Btn = document.getElementById('commit_Btn');

function changeBlackBg() {
    body.style.backgroundColor = 'black';
}

function changeWhiteBg() {
    body.style.backgroundColor = 'white';
}

blackBg_Btn.addEventListener('click', () => {
    changeBlackBg();
    body.style.color = 'yellow';
});

whiteBg_Btn.addEventListener('click', () => {
    changeWhiteBg();
    body.style.color = 'blue';
});

blackBgGreenColor_Btn.addEventListener('click', () => {
    changeBlackBg();
    body.style.color = 'green';
});

whiteBgRedColor_Btn.addEventListener('click', () => {
    changeWhiteBg();
    body.style.color = 'red'
});

blackBgChangeText_Btn.addEventListener('click', () => {
    if (blackBgChangeText_Btn.value === '블랙배경') {
        changeBlackBg();
        body.style.color = 'white';
        blackBgChangeText_Btn.value = '화이트배경';
    } else {
        changeWhiteBg();
        blackBgChangeText_Btn.value = '블랙배경';
        body.style.color = 'black';
    }
});

commit_Btn.addEventListener('click', () => {
    h1.textContent = h1
        .textContent.concat(' 완료');
    h1.style.color = 'blue';
});

commit_Btn.addEventListener('click', () => {
    body.style.backgroundColor = 'yellow';
});