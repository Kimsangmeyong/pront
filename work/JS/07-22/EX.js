'use strict'

// let scrollTop = document.querySelector('.scrollTop'),
//     body = document.querySelector('body');


// scrollTop.addEventListener('mousemove', event => {
//     event.target.style.cursor = 'pointer';
// })

// // scrollTop.addEventListener('click', () => {
// //     this.open('EX.html', self);
// // })


// window.addEventListener('scroll', () => {

//     if (window.scrollY > (body.scrollHeight * 0.3)) {
//         scrollTop.classList.add('second')
//     } else {
//         scrollTop.classList.remove('second')
//     }
// });

// scrollTop.addEventListener('click', () => {
//     let posY = parseInt(window.scrollY)

//     let stopTimeout = setInterval(() => {
//         window.scroll(0, posY -= 10);

//         if (posY <= 0) {
//             clearInterval(stopTimeout);
//         }
//     }, 2)
// });

const scTop = document.querySelector('.scrollTop');

document.addEventListener('scroll', () => {
    if (scrollY > window.innerHeight / 3) {
        scTop.classList.add('visible');
    } else {
        scTop.classList.remove('visible');
    }
});

scTop.addEventListener('click', () => {
    let timeout = setInterval(() => {
        window.scrollBy(scrollX, -5)

        if (scrollY <= 0) {
            clearInterval(timeout);
        }
    }, 5);
})