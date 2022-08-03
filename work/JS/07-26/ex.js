'use strict'
// slide_list 찾기
// const slide_list = document.querySelector('.slide_list');

// slide_list 안에 리스트 만들기
//  리스트를 imgindex 만큼 생성
//  imgindex 크기 만큼 반복
//  slide_list 안에 리스트를 생성(innerHtml)
//  for (let i = 0; i < imgindex.length; i++) {
//    slide_list.innerHTML += `<li></li>`;}

// 리스트에 백그라운드 이미지 넣기
//  슬라이드 리스트 찾기(배열)
//  배열접근(인덱스 접근 → 반복문 활용)
//  해당 리스트에 백그라운드를 스타일 지정
// const li = document.getElementsByTagName('li');
// for (let i = 0; i < li.length; i++) {
//     li[i].style.background = `url(${imgindex[i]}) center/100% 100%`;}

// 동작구현
// 최초 요소의 인덱스 = 0 → +1 다음요소
// 최초 이미지 left 0(첫 번째 요소)
// 현재요소는 오른쪽 배치, opacity 0
// 인덱스 ++;
// 다음 요소는 왼쪽 배치, opacity 1
// let i = 0;
// setInterval(() => {
//     li[i].style.left = '100%';
//     li[i].style.opacity = 0;
//     i++
//     li[i].style.left = 0;
//     li[i].style.opacity = 1;
// }, 1500);



const imgindex = ['../../image/1.jpg',
    '../../image/2.jpg',
    '../../image/3.jpg',
    '../../image/4.jpg',
    '../../image/5.jpg'];
const slide_list = document.querySelector('.slide_list');

for (let i = 0; i < imgindex.length - 1; i++) {
    slide_list.appendChild(document.createElement('li'))
        .style.background = `url(${imgindex[i]}) center/100% 100%`;
}

const li = document.getElementsByTagName('li');

let i = 0;

setInterval(() => {
    li[i].style.left = '100%';
    li[i].style.opacity = 0;

    i++
    i %= li.length;

    li[i].style.left = 0;
    li[i].style.opacity = 1;

}, 1500);