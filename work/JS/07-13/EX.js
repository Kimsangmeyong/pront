'use strict'

let fir, sec, small, big;
let sum = 0;

fir = +prompt('정수1 :');
sec = +prompt('정수2 :');

if (fir > sec) {
    big = fir, small = sec;
}
else {
    small = fir, big = sec;
}

for (let i = small; i <= big; i++) {
    sum += i;
}

alert(`${small}부터 ${big}까지의 합 : ${sum}`);

// n1 n2 작은 수에서 큰수까지 합
// 비교 필요
// 작은 수 큰 수 결정
// 작은 수 큰 수를 담을 변수 필요
// 시작점과 끝 점 확인 가능