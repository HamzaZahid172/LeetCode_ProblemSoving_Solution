/**
 * @param {number} n
 * @return {number}
 */

// Solution: for Loop
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


// Solution: while Loop
var climbStairs = function(n) {
  if (n <= 3){
      return n;
  }
  distinctWays = [1,2,3];
  waysLength = distinctWays.length;
  while (waysLength < n) {
      distinctWays[waysLength] = distinctWays[waysLength-1] + distinctWays[waysLength-2];
      console.log(distinctWays[waysLength]);
      waysLength++
  }
  return distinctWays[n-1];

};