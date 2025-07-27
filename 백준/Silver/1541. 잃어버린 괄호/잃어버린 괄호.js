const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()

function run(input) {
// 적절한 괄호를 쳐서 식을 최소값으로 만들기
// 20 - 30 + 40
// - 연산 뒤에 있는 것을 크게 만들자? -> 먼저계산??
// 30 - 10 - 50  = 70 or -30
// - 다음이 + 일때 + 먼저 계산
// + 먼저 계산, - 나중 계산

const getPlusResults = input.split('-').map((char) => char.split("+").reduce((cur, acc) => Number(cur) + Number(acc) , 0))
let result = getPlusResults[0]

for(const numbers of getPlusResults.slice(1)){
	result -= numbers
}

return result
}

console.log(run(input));

