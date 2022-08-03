'use strict';

// let value1 = null;
// let value2;

// console.log(value1);
// console.log(value2 === undefined ? 'initialize':'')

let value1 = 123;
let value2 = 234;

if (isNaN(value1 + value2)) {
    if (value1 === undefined) {
        value1 = 'initialize'
    };

    if (value2 === undefined) {
        value2 = 'initialize';
    }
} else {
    console.log('모든 변수에 초기화가 이미 되어있습니다.')
}
console.log(`${value1}, ${value2}`);