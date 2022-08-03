'use strict'

let named, korean, english, math, average, score;

named = prompt('이름 :');
korean = prompt('국어점수 :');
english = prompt('영어점수 :');
math = prompt('수학점수 :');
average = korean, english, math / 3;
if (average >= 90) {
    score = 'A';
} else if (average >= 80) {
    score = 'B';
} else if (average >= 70) {
    score = 'C';
} else {
    score = 'F';
}

alert(`<성적>\n학생명 : ${named}, 학점 : ${score}, 평균 : ${average}`);