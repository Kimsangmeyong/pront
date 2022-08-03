'use strict'

console.log(null == undefined);
console.log(null === undefined);

console.log(null + 1);
console.log(undefined + 1);
console.log(null * 1);
console.log(undefined * 1);

const i1 = 5;
const i2 = undefined;
const i3 = null;
let i4;

console.log(i1 == null);
console.log(i2 == null);
console.log(i3 == null);
console.log(i4 == null);

console.log(i1 == undefined);
console.log(i2 == undefined);
console.log(i3 == undefined);
console.log(i4 == undefined);

console.log(i1 === null);
console.log(i2 === null);
console.log(i3 === null);
console.log(i4 === null);

console.log(i1 === undefined);
console.log(i2 === undefined);
console.log(i3 === undefined);
console.log(i4 === undefined);