// 704. 二分查找
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1


// 提示：

// 你可以假设 nums 中的所有元素是不重复的。
// n 将在 [1, 10000]之间。
// nums 的每个元素都将在 [-9999, 9999]之间。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力方法
// var search = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i
//         }
//     }
//     return -1
// };
// 二分查找
var search = function (nums, target) {
    let len = nums.length;
    let left = 0;
    let right = len;
    let h = right / 2 | 0;//len为奇数的话，会往前找一位
    while (nums[h] !== target && h !== left && h !== right) {//二分查找终止条件：找到，或者h=左边或者右边
        if (nums[h] > target) {
            right = h;
            h = left + (right - left) / 2 | 0;
        } else {
            left = h;
            h = left + (right - left) / 2 | 0;
        }
        //console.log(h, left, right)
    }
    return nums[h] === target ? h : -1
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 0));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 0, 3, 5, 9, 12, 13], 13));
console.log(search([-1, 0, 3, 5, 9, 12, 13], -1));