'use strict'

// console.log('string'.charAt(5));
// console.log();

// const n1 = new Number('5');
// const n2 = Number('5');

// console.log(n1);
// console.log(n2);
// console.log(n1 + 5);
// console.log(n2 + 5);

// console.log(n1 == 5);
// console.log(n2 == 5);
// console.log(n1 === 5);
// console.log(n2 === 5);
// console.log(typeof n1);
// console.log(typeof n2);

// if (typeof n1 === 'object') {
//     console.log('타입 일치');
// } else {
//     console.log('타입 불일치');
// }

// const n3 = new Number('a');
// const n4 = Number('a');

// console.log(n3);
// console.log(n4);

// const n5 = '8';
// const n6 = '10';

// console.log(n5 + n6);
// console.log(Number(n5) + n6);
// console.log(Number(n5) + Number(n6));

// console.log(8 / 0);
// console.log(-8 / 0);
// console.log('string' / 0);
// console.log();

// console.log(NaN === NaN);
// console.log(typeof NaN);

// console.log(typeof + '1234' === 'number');
// console.log(typeof + 'string' === 'number');

// console.log(isNaN(NaN));
// isNaN 문자열로 해석하는 게 좋음

console.log(Number(undefined));  // undefined는 비교 연산 시 false로 평가되지만 Number 사용 시 숫자로 변환할 수 없기 때문에 NaN값이 뜬다.
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number('  123  '));   // 자동 trim적용 
console.log(Number('  12 3  '));  // 중간 공백은 NaN값이 나온다 
console.log(Number('        '));
console.log();

let n7;
let n8 = null;
let n9 = true;

console.log(n7 + 5);
// undefined는 연산 시 숫자형식으로 변환이 불가하므로 NaN반환.
console.log(n8 + 5);
console.log(n9 + 5);
console.log('' + 5);
// 공백은 래퍼 객체를 통한 명시적 변환인 경우 0을 반환하지만
// 연산 시에는 자동 형변환되지 않고 공백으로 자리를 차지한다.
console.log();

const n10 = 4;
const n11 = 10;

console.log(String(n10) + String(n11));
console.log(String(n7) + String(n8));
// Sring 래퍼 객체를 통한 문자열 변환이 됐기에 undefinednull로 문자열이 붙어서 나온다