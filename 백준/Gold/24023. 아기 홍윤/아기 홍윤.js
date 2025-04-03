const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


function run(input) {
	const [N, K] = input[0].split(" ").map(Number);
	const A = input[1].split(" ").map(Number);

	for (let start = 0; start < N; start++) {
		let sum = 0;

		for (let end = start; end < Math.min(start+31 , N); end++) {
			sum |= A[end];


			if (sum === K) {
				return [start + 1, end + 1].join(" ");
			}
            if (sum > K) break;
		}
	}
	return -1;
}

console.log(run(input));

