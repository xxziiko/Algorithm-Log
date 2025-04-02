const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [firstLine, ...lines] = input;
	const [n, L, f] = firstLine.split(" ");
	const F = Number(f);

	const [days, time] = L.split("/");
	const [hour, min] = time.split(":").map(Number);
	const limitMinutes = Number(days) * 24 * 60 + hour * 60 + min;

	const rentalMap = new Map();
	const returnMap = new Map();

	// 분 단위로 바꿔서 계산
	const changeMinutes = (datetime) => {
		const [date, time] = datetime.split(" ");
		const [yyyy, mm, dd] = date.split("-").map(Number);
		const [hour, minutes] = time.split(":").map(Number);
		const now = new Date(yyyy, mm - 1, dd, hour, minutes);

		return now.getTime() / 60000;
	};

	for (const line of lines) {
		const [date, time, part, user] = line.split(" ");
		const minutes = changeMinutes([date, time].join(" "));

		if (!rentalMap.has(user)) {
			rentalMap.set(user, new Map());
		}

		const userInfo = rentalMap.get(user);

		if (userInfo.has(part)) {
			const rentTime = userInfo.get(part);

			const diff = minutes - rentTime;

			if (diff > limitMinutes) {
				const late = diff - limitMinutes;

				const penalty = late * F;
				returnMap.set(user, (returnMap.get(user) ?? 0) + penalty);
			}

			userInfo.delete(part);
		} else {
			userInfo.set(part, minutes);
		}
	}

	const sorted = [...returnMap.entries()].sort((a, b) =>
		a[0].localeCompare(b[0]),
	);

	return returnMap.size === 0
		? -1
		: sorted.map((userInfo) => userInfo.join(" ")).join("\n");
}

console.log(run(input));
