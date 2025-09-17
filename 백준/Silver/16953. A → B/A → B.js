const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()

function run(input) {
	const [A, B] = input.split(" ").map(Number)
	let result = 1
	let current  = B
	

	
	while(current > A) {
		
		if(current % 2 === 0) {
			current = Math.floor(current / 2)	
		} 
		else if(current % 10 === 1) {
			current = Math.floor(current / 10)	
		} else {
			return -1
		}
		
		result +=1
	}
	
	
	return current === A  ? result : -1
}

console.log(run(input));
