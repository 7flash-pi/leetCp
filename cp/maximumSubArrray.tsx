// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

function maxSubArray(nums: number[]): number {
  let maxSum: number = nums[0];
  let currentMax: number = nums[0];

  for (let item of nums.slice(1)) {
    currentMax = maxBetweenTwo(item, currentMax + item);
    maxSum = maxBetweenTwo(maxSum, currentMax);
  }

  return maxSum;
}

function maxBetweenTwo(one: number, two: number): number {
  return one > two ? one : two;
}
