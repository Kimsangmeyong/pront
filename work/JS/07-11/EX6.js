'use strict'

let fir;
fir = prompt('주민번호');
if (fir.includes('-')) {
    if (confirm('하이픈(-)을 공백으로 변경을 원하십니까?')) {
        fir.replace('-', ' ');
    }
}
alert(fir);

