'use strict'

let $model2021 = $('.model2021 li');

// $model2021.each(function (i) {
//     setTimeout(() => {
//         $(this).css({ color: 'red' });
//     }, 500 * i);
// });

for (let i = 0; i < $model2021.length; i++) {
    setTimeout(() => {
        $model2021.eq(i).css({ color: 'red' });
    }, 500 * i);
}

let $model2020 = $('.model2020 li');

// for (let i = 0; i < $model2020.length; i++) {
//     setTimeout(() => {
//         $model2020.eq(i).animate({ opacity: 0 }, 1000)
//     }, 1000 * i);

//     setTimeout(() => {
//         $model2020.eq(i).animate({ opacity: 1 }, 1000);
//     }, 2000 * i);
// }

for (let i = 0; i < $model2020.length; i++) {
    setTimeout(() => {
        $model2020.eq(i).fadeOut(1000);
    }, 1000 * i);

    setTimeout(() => {
        $model2020.eq(i).fadeIn(1000);
    }, 2000 * i);
}