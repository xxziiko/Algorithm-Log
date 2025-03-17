const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run() {
	const [firstLine, ...rest] = input;
	const n = Number(firstLine);
	const cost = rest.map((el) => el.split(" ").map(Number));
	let minCost = Number.MAX_SAFE_INTEGER;

	for (let firstColor = 0; firstColor < 3; firstColor++) {
		const dp = Array.from({ length: n }, () =>
			Array(3).fill(Number.MAX_SAFE_INTEGER),
		);

		// 1번집의 색을 고정한다.
		dp[0][firstColor] = cost[0][firstColor];

		for (let i = 1; i < n; i++) {
			// i 번째 집을 특정 색 c로 칠하는 비용 + i-1번째 집을 c가 아닌 다른 색으로 칠했을때 최소 비용(이전의 계산 값)
			dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
			dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
			dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
		}

		// 3. n번 집에서 1번집 색을 제외
		for (let lastColor = 0; lastColor < 3; lastColor++) {
			if (lastColor !== firstColor)
				minCost = Math.min(minCost, dp[n - 1][lastColor]);
		}
	}

	return minCost;
}

console.log(run());
