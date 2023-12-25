// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

function twoSum(nums, target) {
    let numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (numsMap.has(diff)) {
            return [numsMap.get(diff), i]
            break;
        } else {
            numsMap.set(nums[i], i);
        }
    }
}