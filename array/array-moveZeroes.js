// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。



// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0]


// 提示:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length;
    let l = 0;
    let r = 0;
    while (r < n) {
        if (nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }
    return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]), moveZeroes([0]), moveZeroes([1, 2, 3, 0, 4, 5, 0, 6]))