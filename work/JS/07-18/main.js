'use strict'

let nav = document.getElementById('nav'),
    menu = document.getElementsByClassName('menu'),
    li = document.getElementsByTagName('li'),
    paragraph = document.querySelector('div p'),
    paragraphAll = document.querySelectorAll('div p');

nav.style.backgroundColor = 'burlywood';
menu[2].style.fontSize = '30px';
li[1].style.listStyle = 'none';
paragraph.style.color = 'red';
paragraphAll[1].style.color = 'bule';

let inputTag = document.getElementsByTagName('input');
console.log(inputTag[0].value);
if (inputTag[0].value);
if (inputTag[0].value == '다음') {
    inputTag[0].value = 'Next';
}

console.log(menu[1].textContent);
if (menu[1].textContent == '카페') {
    menu[1].textContent = 'Cafe'; //textContent의 경우 콘텐트의 값만 출력한다.
}

console.log(li[1].innerHTML = '<h3><a href="#" class="menu cafe">다락방</a><h3>')
//innerHTML의 경우 코드를 모두 출력할 수 있어서 직접 바꿀 수 있다.
for (let i = 0; i < paragraphAll.length; i++) {
    paragraphAll[i].style.opacity = '.3';
}