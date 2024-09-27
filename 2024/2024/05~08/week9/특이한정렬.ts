// https://school.programmers.co.kr/learn/courses/30/lessons/120880
function solution(numList: number[], n: number) {
	return numList.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);
}

// function solution(numList: number[], n: number) {
// 	return numList
// 		.map((num) => {
// 			const distance = Math.abs(n - num);
// 			return [num, distance];
// 		})
// 		.sort(([numA, distanceA], [numB, distanceB]) =>
// 			distanceA === distanceB ? numB - numA : distanceA - distanceB,
// 		)
// 		.map(([num, distance]) => num);
// }
