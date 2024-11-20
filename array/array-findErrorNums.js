// 645. 错误的集合
// 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。

// 给定一个数组 nums 代表了集合 S 发生错误后的结果。

// 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。



// 示例 1：

// 输入：nums = [1,2,2,4]
// 输出：[2,3]
// 示例 2：

// 输入：nums = [1,1]
// 输出：[1,2]


// 提示：

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let map = new Map();
    let r = new Array(2);
    let l = nums.length;
    for (let i = 0; i < l; i++) {
        if (map.has(nums[i])) {
            r[0] = nums[i];
        } else {
            map.set(nums[i], 1)
        }
    }
    for (let i = 0; i < l; i++) {
        if (!map.has(i + 1)) {
            r[1] = i + 1;
            return r;
        }
    }
};
// var findErrorNums = function (nums) {
//     let l = nums.length;
//     // if (l === 2 && nums[0] === 1 && nums[1] === 1) {
//     //     return [1, 2]
//     // }
//     // if (l === 2 && nums[0] === 2 && nums[1] === 2) {
//     //     return [2, 1]
//     // }
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < l - 1; i++) {
//         if (nums[i] === nums[i + 1]) {
//             return nums[i] === i + 1 ? [nums[i], nums[i] + 1] : [nums[i], nums[i] - 1]
//         }
//     }
// };
console.log(findErrorNums([3, 2, 2]));
console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
console.log(findErrorNums([2, 2]));
console.log(findErrorNums([1, 3, 3]));
console.log(findErrorNums([1, 1, 3]));
console.log(findErrorNums([8, 7, 3, 5, 3, 6, 1, 4]));
console.log(findErrorNums([2, 3, 3, 4, 5, 6]));
console.log(findErrorNums([2, 3, 4, 5, 5, 6]))