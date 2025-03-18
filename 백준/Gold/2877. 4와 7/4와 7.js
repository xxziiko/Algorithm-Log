const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run() {
	const k = Number(input);
	const baseNumber = [4, 7];
	let n = 1;

	//1. k 번째 수의 자리수(n)를 구한다.
	while (2 ** n - 2 < k) n += 1; // 실제 속한 자리수보다 +1
	n -= 1; //조정

	//2. n자리수 범위에서 k가 몇번째 인덱스인지 구한다.
	const nth = k - (2 ** n - 2) - 1;

	//3.  이진수로 변환한다.
	const binary = nth.toString(2).padStart(n, "0").split("");

	// 4. 4와 7로 매핑
	return binary.map((digit) => baseNumber[Number(digit)]).join("");
}

console.log(run());