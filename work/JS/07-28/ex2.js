'use strict'

const header = document.querySelector('header'),
    main = document.querySelector('main'),
    btn = header.getElementsByTagName('a');

let bef = btn[0];

function setMaTop() {
    main.style.marginTop = header.offsetHeight + 'px';
}

function setconVi(event) {
    document.getElementById(
        bef.getAttribute('href').replace('#', ''))
        .style.display = 'none';

    document.getElementById(
        event.getAttribute('href').replace('#', ''))
        .style.display = 'block';
}

//최초동작 : 1) 컨텐츠 보이기 2) 헤더의 높이
setconVi(bef);
setMaTop();



// 버튼을 클릭했을 때 동작 구현
// 1)색 변경 2) 헤더 높이 3) 컨텐츠 디스플레이 설정
header.addEventListener('click', (e) => {
    const event = e.target;

    if (event.tagName === 'A') {
        bef.classList.remove('selected');
        event.classList.add('selected');
        //색 변경

        setMaTop(bef);
        //헤더 높이

        setconVi(event);
        //디스플레이 설정
        bef = event;
    }
});

// 브라우저 창 크기가 변했을 때 동작 구현

window.addEventListener('resize', setMaTop);