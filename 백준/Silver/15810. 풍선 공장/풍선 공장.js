const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, m] = input[0].split(' ').map(Number)
	const times = input[1].split(' ').map(Number)
	
	// 풍선을 다 만드는데 걸리는 최소 시간
	let start = 0
	let end = Math.max(...times) * m
	let result = Number.MAX_SAFE_INTEGER
	
	while(start <= end) {
		const mid = Math.floor((start + end)/2)
		let count = 0
		
		for(const time of times) {
			count+= Math.floor(mid/time)
		}
	
		if(count < m) {
			start = mid+1
		} else {
			end = mid-1
			result = Math.min(mid, result)
		}
	}
	
	return result
}

console.log(run(input));
