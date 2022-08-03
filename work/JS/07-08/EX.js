'use strict'


// for (let fir; ;) {
//     fir = prompt('첫 번째 숫자 입력');
// }
// for (let sec; ;) {
//     sec = prompt('두 번째 숫자 입력');
// }

let n1, n2

// alert('숫자 더하기')
// n1 = +prompt('첫 번째 숫자 입력');
// n2 = +prompt('두 번째 숫자 입력');
// alert(`${n1}과(와) ${n2}의 합은 ${n1 + n2}입니다.`);

let fir, sec
let thr = 0

alert('숫자 더하기')
while (true) {
    fir = +prompt('첫 번째 숫자 입력')
    if (fir === 5) {
        (sec = +prompt('두 번째 숫자 입력'))
    }
    if (sec >= 0) {
        thr = fir + sec;
    }
    break;
}

alert(`${fir}과(와) ${sec}의 합은 ${thr} 입니다.`)