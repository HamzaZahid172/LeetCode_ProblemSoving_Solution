/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let numLength = nums.length;
  let currenArrayValueJumpEnd = (jumpsRequired = newMax = 0);
  for (let i = 0; i < numLength - 1; i++) {
    newMax = Math.max(nums[i] + i, newMax);
    if (i === currenArrayValueJumpEnd) {
      jumpsRequired++;
      currenArrayValueJumpEnd = newMax;
    }
    console.log(`newMax: ${newMax}`);
    console.log(`currenArrayValueJumpEnd: ${currenArrayValueJumpEnd}`);
    console.log(`jumpsRequired: ${jumpsRequired}`);
  }
  return jumpsRequired;
};
