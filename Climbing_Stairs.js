/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }
  distinctWays = [1, 2, 3];
  for (x = 3; x < n; x++) {
    distinctWays[x] = distinctWays[x - 1] + distinctWays[x - 2];
    console.log(distinctWays[x]);
  }
  return distinctWays[n - 1];
};
