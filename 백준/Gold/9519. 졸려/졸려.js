const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run() {
	const x = Number(input[0]);
	const original = input[1].split("");

	// 원래 문자열로 돌아오는 주기를 찾음
	const cycle = getCycle(original);

	// X번이 아니라 X % cycle 번만 실행
	const times = x % cycle;
	let current = [...original];

	for (let i = 0; i < times; i++) {
		current = blink(current);
	}

	return current.join("");
}

function getCycle(word) {
	const seen = new Set();
	let current = [...word];
	let count = 0;

	while (!seen.has(current.join(""))) {
		seen.add(current.join(""));
		current = blink(current);
		count += 1;

		if (current.join("") === word.join("")) return count;
	}

	return count;
}

function blink(word) {
	const len = word.length;
	const newWord = Array(len);

	for (let i = 0; i < len; i++) {
		if (i % 2 === 1) newWord[len - (i + 1) / 2] = word[i];
		else newWord[i / 2] = word[i];
	}

	return newWord;
}

console.log(run());
