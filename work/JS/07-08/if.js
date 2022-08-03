'use strict';

// let input;

// input = prompt();
// alert(input);

// input = prompt('입력');
// alert(input);

// input = prompt('입력', '기본데이터');
// alert(input);

// 삼항 조건 연산자
// 조건식 ? 참 : 거짓 → 표현식 (좌변, 우변 모두 확용 가능)

// console.log(`당신은 ${age >= 19 ? '성인' : '미성년', age >= 15 ? '미성년' : '청소년'}입니다.`)

//if(조건식) {
//    참 실행 블럭;
//} else {
//    거짓 실행 블럭;
//}

// if(조건식) {
//     참 실행 블럭;
// }

// if(조건식) {
//     참 실행 블럭;
// } else if(조건식) {
//     거짓 실행 블럭;
// } else {

// }

let age = 19;
let str;
if (age >= 19) {
    str = '성인';
} else if (age >= 15) {
    str = '미성년';
} else {
    str = '청소년';
}

console.log(`당신은 ${str}입니다.`)

