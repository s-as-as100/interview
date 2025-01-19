// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

const nums = [1, 2, 3, 3];

function isNumRepeated(nums) {
  let object = {};
  for (const val of nums) {
    if (object[val]) {
      return true;
    }
    // {1:true}
    object[val] = true;
  }
  return false;
}

console.log(isNumRepeated(nums));


// 2nd approach

const data = nums.some((val) => val>1);
console.log(data,"daaa")

