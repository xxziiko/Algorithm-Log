const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function lowerBound(arr, target) {
	let left = 0;
	let right = arr.length;

	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] < target) left = mid + 1;
		else right = mid;
	}

	return left;
}

function upperBound(arr, target) {
	let left = 0;
	let right = arr.length;

	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] <= target) left = mid + 1;
		else right = mid;
	}

	return left;
}

function run(input) {
	const [n, m] = input[0].split(" ").map(Number);
	const xs = input[1]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	const results = [];

	for (let i = 2; i < 2 + m; i++) {
		const [start, end] = input[i].split(" ").map(Number);
		const left = lowerBound(xs, start);
		const right = upperBound(xs, end);
		results.push(right - left);
	}

	return results.join("\n");
}

console.log(run(input));
