function solution(numbers) {
  let count = 0;
  const combinations = combination(numbers);

  for (const [num1, num2, num3] of combinations) {
    if (num1 + num2 + num3 === 0) count++;
  }

  return count;
}

function* combination(numbers, pick =3) {
  if (pick === 0) {
    yield [];
    return;
  }

  if (numbers.length === 0) return;

  const [x, ...rest] = numbers;

  yield* combination(rest, pick);
  for (const combi of combination(rest, pick - 1)) yield [x, ...combi];
}