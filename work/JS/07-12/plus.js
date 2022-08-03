'use strict'

// console.log(2 ** 4);
// console.log(5 % 3);
// console.log(6 % 2 == 0);
// console.log(6 % 2 == 1);
// console.log(6 % 3 == 0);

// console.log('String' + 'operator');
// console.log('String' + 3);
// console.log('6' + '4');
// console.log('6' + 3);

// console.log('6' * 3);
// console.log('65' / '3');
// console.log(8 - '3');
// console.log('6' * 1 + '4');
// console.log('6' * 1 + '4' * 1);

// console.log(+'6'+ +'4');
// console.log(-'6' + -'4');

// console.log('a' * 3);
// console.log(isNaN(5));
// console.log(isNaN('a'));
// console.log(isNaN('a' * 3));
// console.log(isNaN('6'))


// 복합 대입 연산자

let n1 = 5, n2 = 10, n3;

n1 = n1 + 5;
n1 += 5;
n1 -= 5;
n1 *= 5;
n1 /= 5;
n1 %= 5;

//  증감 연산자

n2 = n2 + 1;
n2 += 1;
++n2;       //전위형
n2++;       //후위형
--n2;
console.log(n2);
n2--; // 1씩 가능. 증/감만 가능
console.log(n2);
n3 = --n2; //연산을 먼저 진행한다.
console.log(n2);
console.log(n3);
n3 = n2--; //값을 먼저 반환한 후 계산
console.log(n2);
console.log(n3);