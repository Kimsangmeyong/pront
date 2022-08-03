'use strict'

let n1, n2

n1 = +prompt('정수1 :', 0);
n2 = +prompt('정수2 :', 0);

alert(`${n1}과(와) ${n2}의 차는 ${n1 > n2 ? n1 - n2 : n2 - n1}입니다.`);

if (confirm('창을 닫을까요?')) {
    close();
};
// if (n1 >= n2) {
//     alert(`${n1}과(와) ${n2}의 차는 ${n1 - n2}입니다.`);
// } else {
//     alert(`${n2}과(와) ${n1}의 차는 ${n2 - n1}입니다.`);
// }