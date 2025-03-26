const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solve() {
    // 1) 입력 처리
    const [N, Q] = input[0].split(" ").map(Number);

    // x, y 좌표를 1-based로 다루기 위해 배열 앞쪽에 더미(0)을 넣어둠
    const x = [0];
    const y = [0];

    // 1번 줄 (x좌표) 읽어와서 x[1..N] 채우기
    const xs = input[1].split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        x.push(xs[i]);
    }
    
    // 2번 줄 (y좌표) 읽어와서 y[1..N] 채우기
    const ys = input[2].split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        y.push(ys[i]);
    }

    // 2) 누적합 배열 준비
    // u[i] = 1번 산장에서 i번 산장까지 (왼→오) 이동 비용
    // v[i] = N번 산장에서 i번 산장까지 (오른→왼) 이동 비용
    const u = new Array(N+1).fill(0);
    const v = new Array(N+1).fill(0);

    // 2-1) u 배열 계산 (왼쪽→오른쪽)
    // u[1] = 0, i=2..N
    for (let i = 2; i <= N; i++) {
        const dx = x[i] - x[i-1];
        const dy = y[i] - y[i-1];
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        // 오르막/평지/내리막
        let cost;
        if (y[i-1] < y[i]) cost = 3 * dist;   // 오르막
        else if (y[i-1] > y[i]) cost = dist;  // 내리막
        else cost = 2 * dist;                 // 평지
        
        u[i] = u[i-1] + cost;
    }

    // 2-2) v 배열 계산 (오른쪽→왼쪽)
    // v[N] = 0, i=N-1..1 (역순)
    for (let i = N-1; i >= 1; i--) {
        const dx = x[i+1] - x[i];
        const dy = y[i+1] - y[i];
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        // 거꾸로 보았을 때의 오르막/내리막 계산
        // 즉, (i+1)→i 방향에서 y[i+1]<y[i]면 오르막
        let cost;
        if (y[i+1] < y[i]) cost = 3 * dist;   // 오르막
        else if (y[i+1] > y[i]) cost = dist;  // 내리막
        else cost = 2 * dist;                 // 평지
        
        v[i] = v[i+1] + cost;
    }

    // 3) 쿼리 처리
    let output = "";
    let idx = 0;
    for (let i = 0; i < Q; i++) {
        const line = input[3 + i].split(" ");
        let start = Number(line[0]);
        let end = Number(line[1]);

        if (start === end) {
            // 같은 산장 → 비용 0
            output += "0.000000000000\n";
            continue;
        }

        if (start < end) {
            // 왼쪽→오른쪽
            // 비용 = u[end] - u[start]
            const ans = u[end] - u[start];
            output += ans.toFixed(12) + "\n";
        } else {
            // start > end → 오른쪽→왼쪽
            // 비용 = v[end] - v[start]
            const ans = v[end] - v[start];
            output += ans.toFixed(12) + "\n";
        }
    }

    console.log(output.trim());
}

solve();