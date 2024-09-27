function* map<T, U>(callback: (value: T) => U, iter: Iterable<T>) {
  for (const a of iter) yield callback(a);
}

function* permutationG<T>(xs: T[]): Generator<T[]> {
  if (!xs.length) {
    yield [];
    return;
  }

  if (!xs.length) return;

  for (const [i, x] of xs.entries()) {
    const rest = [...xs.slice(0, i), ...xs.slice(i + 1)];
    yield* map((permutation) => [x, ...permutation], permutationG(rest));
  }
}

function solution(numbers: string) {
  const numArr = numbers.split("");
  const permutationsSet = new Set<number>();

  const isPrime = (num: number) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return true;
  };

  for (let i = 1; i <= numArr.length; i++) {
    for (const number of permutationG(numArr)) {
      permutationsSet.add(parseInt(number.slice(0, i).join("")));
    }
  }

  let count = 0;
  for (const num of permutationsSet) {
    if (isPrime(num)) count++;
  }

  return count;
}
