'use strict'

let n1;

n1 = +prompt('숫자 입력 :');
if (confirm('입력된 값이 숫자가 맞습니까?')) {
    if (Number(n1) === n1)
        // !isNaN(n1) 다른 조건
    {
        alert('입력된 값이 숫자가 맞습니다.');
    } else {
        alert('입력된 값이 숫자가 아닌 거 같습니다. 프로그램을 종료합니다.');
    }
} else { alert('이후 반복문을 학습한 후에는 재입력 상태를 구현 가능할 것입니다.'); }