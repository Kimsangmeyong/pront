'use strict'

let url = 'http://daum.net';
let step1, step2, step3;

console.log(step1 = url.slice(url.indexOf('/') + 2));
console.log(step2 = step1.slice('', step1.indexOf('.')));
console.log(step3 = '$' + step2.substring(0, 3) + step2.length + `${url.length >= 14 ? url.substring(13, 14) : '?'}`);