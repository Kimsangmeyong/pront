'use strict'

let $btn = $('input');

// $btn.click(function () {
//     $(this).css({ color: 'red' });
// });

// $btn.click(function () {
//     $(this).css({ fontSize: '2em' });
// });

$btn.on('click', function () {
    $(this).css({ backgroundColor: 'green' });
});

$btn.on('click', function () {
    $(this).css({ width: '100px', height: '100px' });
});

let $main = $('main');

$main.on('mouseenter', function () {
    $(this).css({ backgroundColor: 'yellow' });
})
    .on('mouseleave', function () {
        $(this).css({ textTransform: 'uppercase' });
    });

let delTarget = $('.mail, .knowledge'),
    emphasizeTarget = $('p:first-child, p:last-child');

delTarget.on('mouseover', function () {
    delTarget.css({ textDecoration: 'line-through' });
});

emphasizeTarget.on('mouseover', function () {
    $(this).css({ color: 'red', fontWeight: 'bold' });
});