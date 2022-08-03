'use strict'

// let n = +prompt('줄 수 : ');;
// let m = (n + 1) / 2;


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j <= 5 - i + 1 && j <= i) {
            document.write('* ');
        } else if (j >= 5 - i + 1 && j >= i) {
            document.write('* ');
        } else {
            document.write('&nbsp;&nbsp;');
        }
    }
    document.write('</br>');
}