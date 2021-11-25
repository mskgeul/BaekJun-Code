const inputData = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = inputData[0];                         // 테스트케이스 개수

for (let i=1; i<=T*4; i+=4) {                   // 테스트케이스 하나마다 4줄씩 입력받기 때문에 T*4
    let n = inputData[i];                       // 한 문장의 단어 수
    let pk1 = inputData[i+1].split(' ');        // 1공개키
    let pk2 = inputData[i+2].split(' ');        // 2공개키
    let ans = [];                               // 평문
    let secret = inputData[i+3].split(' ');     // 암호문

    for (let j=0; j<n; j++) {
        for (let k=0; k<n; k++) {
            if (pk1[j] == pk2[k]) {             // 1공개키와 2공개키의 위치가 같을 경우 평문과 암호문의 위치도 일치 시킴
                ans[j] = secret[k];
            }
        }
    }

    console.log(ans.join(' '));                 // 평문을 배열로 담았기 때문에 join을 이용하여 문자열로 출력
}