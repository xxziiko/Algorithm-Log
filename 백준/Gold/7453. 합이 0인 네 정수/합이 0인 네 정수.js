const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = [], B = [], C = [], D = [];

for (let i = 1; i <= N; i++) {
    const [a, b, c, d] = input[i].split(" ").map(Number);
    A.push(a);
    B.push(b);
    C.push(c);
    D.push(d);
}

// 1. A, B의 모든 합을 저장
const sumAB = new Map();
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const sum = A[i] + B[j];
        sumAB.set(sum, (sumAB.get(sum) || 0) + 1);
    }
}

// 2. C, D의 모든 합을 구하고, -sum을 sumAB에서 찾음
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const sum = C[i] + D[j];
        if (sumAB.has(-sum)) {
            count += sumAB.get(-sum);
        }
    }
}

// 정답 출력
console.log(count);