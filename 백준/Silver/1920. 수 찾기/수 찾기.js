const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
    return false;
    
}

function run(inputs) {
  const arr1 = inputs[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const arr2 = inputs[3].split(' ').map(Number);
  const result = [];

  for (const number of arr2) {
    if (binarySearch(arr1, number)) result.push(1);
    else result.push(0);
  }

  return result.join('\n');
}


console.log(run(inputs))