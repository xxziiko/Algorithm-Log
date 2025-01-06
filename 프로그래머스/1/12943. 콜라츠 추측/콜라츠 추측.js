function solution(num) {
  const go = (n) => {
    if (n <= 1) return 0;

    const newNumber = n % 2 === 0 ? n / 2 : n * 3 + 1;
    return go(newNumber) + 1;
  };

return go(num) <= 500 ? go(num) : -1
}