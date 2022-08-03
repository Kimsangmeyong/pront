'use strict';

// const $div = $('.slide_container div');

// let $imgIdx = [
//     'https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995__340.jpg',
//     'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113__340.jpg',
//     'https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029__340.jpg',
//     'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg',
//     'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815__340.jpg',
//     'https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501__340.jpg',
//     'https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239__340.jpg'
// ];

// console.log($imgIdx[0]);
// $div.eq(0).css({ background: `url(${$imgIdx[0]}) no-repeat center / 100% 100%` });

// let before = 0,
//     img = 0,
//     end;

// $('.slide_container').on('mouseenter', function () {
//     end = setInterval(function () {
//         before == 0 ? before++ : before--
//         if (before == 0) {
//             $div.eq(0).fadeIn(2000);
//             $div.eq(1).fadeOut(2000);

//         } else {
//             $div.eq(0).fadeOut(2000);
//             $div.eq(1).fadeIn(2000);
//         }

//         img++;
//         img %= $imgIdx.length;
//         $div.eq(before).css({ background: `url(${$imgIdx[img]}) no-repeat center / 100% 100%` });

//     }, 2000);
// }).on('mouseleave', function () {
//     clearInterval(end);
// })

let $slide_container = $('.slide_container'),
    $imgFrame = $slide_container.find('div');

let imgList = [
    'https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995__340.jpg',
    'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113__340.jpg',
    'https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029__340.jpg',
    'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg',
    'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815__340.jpg',
    'https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501__340.jpg',
    'https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239__340.jpg'
];

let currentIdx = 0,
    sw = 0,
    timeOut;

function setBg() {
    // if (sw) {
    //     $imgFrame.eq(sw--).css({background: `url(${imgList[currentIdx]}) center/cover`})
    // } else {
    //     $imgFrame.eq(sw++).css({background: `url(${imgList[currentIdx]}) center/cover`})
    // }

    $imgFrame.eq(sw ? sw-- : sw++).css({ background: `url(${imgList[currentIdx]}) center/cover` })
    $imgFrame.eq(sw ? 0 : 1).fadeIn(1500);
    $imgFrame.eq(sw ? 1 : 0).fadeOut(1500);
    currentIdx = (currentIdx + 1) % imgList.length;
}

setBg();

$slide_container.on('mouseenter', () => {
    timeOut = setInterval(() => {
        setBg();
    }, 3000);
})
    .on('mouseleave', () => {
        clearInterval(timeOut);
    });