'use strict';

// ex.01 - 01
// 내 풀이 -javascript
// const
//     aside = document.querySelector('aside'),
//     div = document.querySelectorAll('div'),
//     img = document.querySelectorAll('img');
/*
div[3].addEventListener('click', function () {

    if (img[3].getAttribute('src') == '../image/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg') {

        aside.style.left = '-40px';
        img[3].src = '../image/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg';
        aside.style.transition = '.5s';

    }
    else {
        aside.style.left = '0px';
        img[3].src = '../image/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg';
    }
}
); */

// ex.01 - 01
// 강사님 풀이 -jquery

// const $aside = $('aside'),
//     $btn = $aside.find('div:nth-child(4) img');

// $btn.on('click', function () {
//     $aside.toggleClass('menuClose'); // toggleClass : 클래스 추가

//     if ($aside.hasClass('menuClose')) {  // hasClass : class를 포함하는지 확인
//         $btn.attr('src', '../../image/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg');  // attr : getAttribute 와 동일
//     } else {
//         $btn.attr('src', '../../image/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg');
//     }
// });

// ex.01 - 02

// const $aside = $('aside'),
//     $btn = $aside.find('div:nth-child(4) img');

//     $aside.on('mouseenter', function () {
//         $aside.addClass('clickMenu');

//     }).on('mouseleave', function () {
//         $aside.removeClass('clickMenu');
//         $aside.removeClass('menuClose');
//     })

//     $btn.on('click', function () {
//         $aside.toggleClass('menuClose');
//     })

const $aside = $('aside'),
    $btn = $aside.find('div:nth-child(4) img');

$aside.on('mouseenter', function () {
    $aside.addClass('btnOver');
}).on('mouseleave', function () {
    $aside.removeClass('btnOver menuOpen');
});

$btn.on('click', function () {
    $aside.toggleClass('menuOpen');
    $aside.removeClass('btnOver');
});