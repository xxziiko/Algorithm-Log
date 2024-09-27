//  https://school.programmers.co.kr/learn/courses/30/lessons/17681
import _ from "lodash";

const replaceString = (n: number, arr: number[]) => {
	const result = [];

	for (const number of arr) {
		let string = "";
		for (const char of number.toString(2)) {
			if (char === "1") string += "#";
			else string += " ";
		}

		result.push(string.padStart(n).split(""));
	}
	return result;
};

function solution(n: number, arr1: number[], arr2: number[]) {
	const map1 = replaceString(n, arr1);
	const map2 = replaceString(n, arr2);

	const answer = _.zipWith(map1, map2, (str1, str2) =>
		str1.map((char, index) => (char !== str2[index] ? "#" : char)).join(""),
	);

	return answer;
}
