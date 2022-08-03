'use strict'

let li = document.getElementsByTagName('li');

window.addEventListener('load', () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'yellow';
    }
});

let scrollBox = document.querySelector('.scrollBox');

let stop;

document.addEventListener('scroll', () => {
    let posX = parseInt(window.scrollX),
        posY = parseInt(window.scrollY);
    // let posX = Math.trunc(window.scrollX),
    //     posY = Math.trunc(window.scrollY);

    scrollBox.style.display = 'block';
    scrollBox.innerHTML = `스크롤량<br> { x = ${posX}, y = ${posY}`;

    if (posX > 500 || posY > 500) {
        window.scroll(0, 0);
        // window.scrollTo(0, 0);
    }

    if (posX > 500) {
        let stopTimeout = setInterval(() => {
            window.scroll(posX -= 5, posY);
            if (posX <= 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }

    if (posY > 500) {
        let stopTimeout = setInterval(() => {

            window.scroll(posX, posY -= 5);

            if (pasY <= 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }

    // if (posX > 500) {
    //     backScroll(() => window.scroll(posX -= 5, posY));
    // }

    // if (posY > 500) {
    //     backScroll(() => window.scroll(posX, posY -= 5));
    // }

    // function backScroll(backSc) {
    //     let stopTimeout = setInterval(() => {
    //         backSc();

    //         if (posX < 0 || posY < 0) {
    //             clearInterval(stopTimeout);
    //         }
    //     }, 5);
    // }
    clearTimeout(stop);

    stop = setTimeout(() => {
        scrollBox.style.display = 'none';
    }, 5000);
});