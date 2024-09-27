const fs = require("fs");
export const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
