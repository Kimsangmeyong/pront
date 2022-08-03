'use strict';

// const img = document.querySelector('img'),
//     nationbox = document.getElementsByClassName('nationBox');

// let before = nationbox[0];

// for (let i = 0; i < nationbox.length; i++) {
//     nationbox[i].addEventListener('click', () => {
//         nationbox[i].style.opacity = 1;
//         if (before != nationbox[i]) {
//             before.style.opacity = "0.5";
//             before = nationbox[i];
//         }
//         img.src = "../../image/" + (i + 1) + ".jpg";
//     })
// }

// const img = document.querySelector('#main_container img'),
//     nationBox = document.querySelectorAll('.nationBox');

// let beforeNation = nationBox[0];

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', function () { //정의만 된 상태
//         //이벤트가 걸렸을 때 실행이 된다.
//         img.src = `../../image/${this.textContent}.jpg`;

//         beforeNation.style.opacity = .5;
//         this.style.opacity = 1;
//         beforeNation = this
//     });
// }


///// 파일경로 지정을 통한 비통일버전
// const img = document.querySelector('#main_container img'),
//     nationBox = document.querySelectorAll('.nationBox');


// let beforeNation = nationBox[0];
// let imgindex = ['../../image/sky.jpg',
//     '../../image/paper.jpg',
//     '../../image/girl.jpg',
//     '../../image/camera.jpg',
//     '../../image/flower.jpg'];


// function changeImg() {
//     img.src = imgindex[this.textContent - 1]; //a태그 값과 인덱스 시작 값의 차를 계산해서 넣어준다.
//     beforeNation.style.opacity = .5;
//     this.style.opacity = 1;
//     beforeNation = this;
// }

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', changeImg);
// }


//// 자바스크립트 동적 버튼 활용
// const main_container = document.getElementById('main_container'),
//     img = main_container.querySelector('img'),
//     nation_container = main_container.querySelector('.nation_container');


// const imgindex = ['../../image/sky.jpg',
//     '../../image/paper.jpg',
//     '../../image/girl.jpg',
//     '../../image/camera.jpg',
//     '../../image/flower.jpg'];

// for (let i = 0; i < imgindex.length; i++) {
//     nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`
// }

// const nationBox = nation_container.getElementsByClassName('nationBox');
// let beforeNation = nationBox[0];

// function changeImg() {
//     img.src = imgindex[this.textContent - 1]; //a태그 값과 인덱스 시작 값의 차를 계산해서 넣어준다.
//     beforeNation.style.opacity = .5;
//     this.style.opacity = 1;
//     beforeNation = this;
// }

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', changeImg);
// }

//setInterval 활용
// const main_container = document.getElementById('main_container'),
//     img = main_container.querySelector('img'),
//     nation_container = main_container.querySelector('.nation_container');


// const imgindex = ['../../image/sky.jpg',
//     '../../image/paper.jpg',
//     '../../image/girl.jpg',
//     '../../image/camera.jpg',
//     '../../image/flower.jpg'];

// for (let i = 0; i < imgindex.length; i++) {
//     nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`
// }

// const nationBox = nation_container.getElementsByClassName('nationBox');
// let beforeNation = nationBox[0];

// let n = 0, Clocks;
// function time() {
//     n++
//     if (n >= imgindex.length) { n = 0; }
//     img.src = imgindex[n];

//     beforeNation.style.opacity = '.5';
//     nationBox[n].style.opacity = 1;
//     beforeNation = nationBox[n];
// }
// function start() {
//     Clocks = setInterval(time, 1000);
// }

// function end() {
//     clearInterval(Clocks);
//     Clocks = 0;
// }

// main_container.addEventListener('click', function () {
//     if (Clocks == 0) {
//         start();
//     } else {
//         end();
//     }
// });

// main_container.addEventListener('click', () => { start() ? end() : start() });


const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector('.nation_container');


const imgindex = ['../../image/sky.jpg',
    '../../image/paper.jpg',
    '../../image/girl.jpg',
    '../../image/camera.jpg',
    '../../image/flower.jpg'];

for (let i = 0; i < imgindex.length; i++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`
}

const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNation = nationBox[0];

function changeImg() {
    let nationBoxIdx = beforeNation.textContent % imgindex.length; //a태그 값을 활용
    img.src = imgindex[nationBoxIdx];

    beforeNation.style.opacity = .5;
    nationBox[nationBoxIdx].style.opacity = 1;
    
    beforeNation = nationBox[nationBoxIdx];
}

let stop = setInterval(changeImg, 2000);
let state = true;         //돌아가고 있는 상태

main_container.addEventListener('click', () => {
    if (state) {
        clearInterval(stop);
        state = false;
    } else {
        stop = setInterval(changeImg, 2000);
        state = true;
    }
});