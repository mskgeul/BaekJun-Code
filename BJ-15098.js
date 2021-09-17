//============= Set 이용 =================//
let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let str = inputData[0];
let arr = str.split(" ");                   // 문자를 공백을 기준으로 잘라서 배열에 담기
let set = new Set();                        // Set 객체 생성

for (let i=0; i<arr.length; i++) {          // Set 객체에 중복된 값이 있으면 "no"를 출력하고, 중복된 값이 없으면 set 객체에 값을 담기
    if (set.has(arr[i])) {
        console.log("no");
        return
    } else {
        set.add(arr[i]);
    }
}
console.log("yes");

//============= 배열 이용 =================//
let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let str = inputData[0];
let arr = str.split(" ");                   // 문자를 공백을 기준으로 잘라서 배열에 담기

for (let i=0; i<arr.length; i++) {          // 배열의 요소를 서로 비교해서 중복된 값이 있으면 "no"를 출력 
    for (let j=0; j<i; j++) {
        if (arr[i] == arr[j]) {
            console.log("no");
        } 
    }
}
console.log("yes");