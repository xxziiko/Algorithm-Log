const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, d, k, c] = input[0].split(' ').map(Number)
	const sushi = input.slice(1).map(Number)
	
	const visited = Array(d+1).fill(0)
	let kindCount = 0
	
	// 초기 윈도우 설정
	for(let i = 0; i <k; i++) {
		const index = sushi[i]
		if(!visited[index]) kindCount++
		visited[index]++
	}
	
	let maxCount = !visited[c] ? kindCount +1 : kindCount
	
	for(let end = 1; end <n; end++) {
		const start = (end+k-1) % n
		const currentStart = sushi[start]
		const currentEnd =sushi[end -1]
		
		visited[currentEnd] -=1
		if(!visited[currentEnd]) kindCount -=1
		
		if(!visited[currentStart]) kindCount+=1
		visited[currentStart] +=1
		
		const totalKinds = !visited[c] ? kindCount+1 : kindCount
		maxCount = Math.max(maxCount, totalKinds)
	}
	
	
	// 초밥 가짓수의 최댓값
	
	return maxCount

}

console.log(run(input));
