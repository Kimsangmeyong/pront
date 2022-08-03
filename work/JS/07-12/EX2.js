'use strict';

let score1, score2, score3;

score1 = +prompt('정수1 :');
score2 = +prompt('정수2 :');
score3 = score1 + score2;

if (Number(score3) == score3) {
    alert(`${score1} + ${score2} = ${score3}`);
}
else { alert('두 수중 하나는 숫자가 아닙니다.'); }
