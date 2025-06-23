const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, l, w, h] = input[0].split(' ').map(Number)

	let start = 0
	let end = Math.min(l, w, h)
	let a = 0
	
	for(let i = 0; i <= 100 ; i++) {
		const mid = (start + end) / 2
		const count = Math.floor(l / mid) * Math.floor(w / mid) * Math.floor(h / mid)
		
		if(count >= n){
			start = mid
			a = mid
		} else end = mid
	}
	
	return a.toFixed(10)
}

console.log(run(input));

