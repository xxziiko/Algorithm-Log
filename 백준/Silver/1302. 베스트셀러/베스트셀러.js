const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const books = inputs.slice(1);
  const bookMap = new Map();

  books.forEach((book) => {
    bookMap.set(book, (bookMap.get(book) ?? 0) + 1);
  });

  const maxValue = Math.max(...bookMap.values());
  return [...bookMap]
    .filter(([_, value]) => value === maxValue)
    .sort((a, b) => a[0].localeCompare(b[0]))[0][0];
};

console.log(run(input));
