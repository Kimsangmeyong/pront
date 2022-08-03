'use strict'

    // 함수에는 연산만 처리 입출력 밖에서

    let un, up;

    function power(un, up) {
        let p = 1;
        for (let i = 0; i < up; i++) {
            p *= un
        }

        return p;
    }

    un = +prompt('밑수 : ');
    up = +prompt('지수 : ');

    alert(`${un}의 ${up}승은 : ${power(un, up)}`);