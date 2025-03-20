const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let lineIdx = 0;
const T = Number.parseInt(input[lineIdx++]);
const result = [];

for (let tc = 0; tc < T; tc++) {
    const [n, m] = input[lineIdx++].split(" ").map(Number);

    // 초기 도로 정보 (태초의 세계)
    const edges = [];
    for (let i = 1; i < n; i++) {
        const [u, c] = input[lineIdx++].split(" ").map(Number);
        edges.push([u, i, c]);
    }

    // 추가 도로 정보 (조물주가 놓은 도로)
    let xorResult = 0n;
    for (let j = 0; j < m; j++) {
        const [u, v, c] = input[lineIdx++].split(" ").map(Number);
        edges.push([u, v, c]); // 새 도로 추가

        // 매번 MST 다시 계산
        xorResult ^= getMST(n, edges);
    }

    result.push(xorResult.toString());
}

console.log(result.join("\n"));

function getMST(n, edges) {
    edges.sort((a, b) => a[2] - b[2]); // 가중치 기준 정렬
    const parent = Array.from({ length: n }, (_, i) => i);

    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };

    const union = (x, y) => {
        const px = find(x);
        const py = find(y);
        if (px !== py) parent[px] = py;
    };

    let weight = 0n;
    let count = 0;
    for (const [u, v, c] of edges) {
        if (find(u) !== find(v)) {
            union(u, v);
            weight += BigInt(c);
            count++;

            if (count === n - 1) break;
        }
    }

    return weight;
}