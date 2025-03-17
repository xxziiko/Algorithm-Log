const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


function run() {
    const [firstLine, ...rest] = input;
    const n = Number(firstLine);
    const cost = rest.map((el) => el.split(" ").map(Number));
	// 각 집을 특정 색으로 칠했을 때의 최소 비용(이전 계산에 필요한 것. 특정색, 이전까지 계산한 최소비용 -> 2개 -> 2차원 배열)
	const dp = Array.from({ length: n }, () => Array(3).fill(-1));

	dp[0][0] = cost[0][0];
	dp[0][1] = cost[0][1];
	dp[0][2] = cost[0][2];

	for (let i = 1; i < n; i++) {
		// i 번째 집을 특정 색 c로 칠하는 비용 + i-1번째 집을 c가 아닌 다른 색으로 칠했을때 최소 비용(이전의 계산 값)
		dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
		dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
		dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
	}

	return Math.min(...dp[n - 1]);
}

console.log(run());
