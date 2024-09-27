// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function nlcm(num) {
	return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
	const value = a % b;
	return value ? gcd(b, value) : b;
}
