// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize: number, cities: string[]) {
	const cache: string[] = [];
	let result = 0;

	for (const city of cities) {
		const lowerCaseCity = city.toLocaleLowerCase();
		const index = cache.indexOf(lowerCaseCity);

		if (index !== -1) {
			result += 1;
			cache.splice(index, 1);
		} else result += 5;

		cache.push(lowerCaseCity);
		if (cache.length > cacheSize) cache.shift();
	}

	return result;
}
