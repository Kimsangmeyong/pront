'use strict'

let n1, n2;

n1 = +prompt('정수1 :', 0);
n2 = +prompt('정수2 :', 0);

// if (n1 > n2) {
//     alert(`큰 수는 정수1 : (${n1})`)
// } else if (n1 < n2) {
//     alert(`큰 수는 정수2 : (${n2})`)
// } else {
//     alert(`두 수(${n1}, ${n2})는 같음`)
// }


if (n1 == n2) {
    alert('두 수는 같음');
} else {
    alert(`큰 수는 ${n1 > n2 ? n1 : n2}`);
}