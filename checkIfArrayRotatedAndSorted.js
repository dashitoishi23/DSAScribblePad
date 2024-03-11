/**
 * @param {number[]} nums
 * @return {boolean}
 */
// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
var check = function (nums) {
  let strikes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) strikes++;
  }

  if (strikes === 0 || (strikes <= 1 && nums[nums.length - 1] <= nums[0]))
    return true;
  return false;
};
