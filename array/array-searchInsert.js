// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。



// 示例 1:

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
// 示例 2:

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1
// 示例 3:

// 输入: nums = [1,3,5,6], target = 7
// 输出: 4


// 提示:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums 为 无重复元素 的 升序 排列数组
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let len = nums.length;
    let left = 0;
    let right = len;
    let middle = (right - left) / 2 | 0;
    while (nums[middle] !== target && middle !== left && middle !== right) {
        console.log(left, right)
        if (nums[middle] > target) {
            right = middle;
            middle = left + (right - left) / 2 | 0;
        } else {
            left = middle;
            middle = left + (right - left) / 2 | 0;
        }
    }
    if (nums[middle] > target) {
        return 0;
    }
    return nums[middle] === target ? middle : middle + 1;
};
// searchInsert([1, 3, 5, 6], 5);
// searchInsert([1, 3, 5, 6], 2);
// searchInsert([1, 3, 5, 6], 7);
// searchInsert([1, 3, 5, 6], 0);
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));