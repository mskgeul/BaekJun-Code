let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = inputData[0];

let pattern = /[A-Z]/g;                   // 대문자 체크
let count = 0;                            // NOP의 개수

let str = input.replace(pattern, '1');    // 대문자를 모두 "1" 으로 바꿈
let idx = 0;                              // "1"의 위치 (대문자의 인덱스)
let mod = 0;

for (let i=1; i<str.length; i++) {        // 0번째는 항상 대문자이기 때문에 1부터 시작
    if (str[i] == 1) {
        idx = i + count;
        mod = idx % 4;
        if (mod != 0) {
            count += 4 - mod;
        }
    }
}

console.log(count);