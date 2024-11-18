// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。



// 示例 1：

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2：

// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。


// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
// let map = new Map();
// var rob = function (nums) {
//     let len = nums.length;
//     if (len === 1) {
//         return nums[0];
//     }
//     if (len === 2) {
//         return Math.max(nums[0], nums[1]);
//     }
//     if (map.has(len)) {
//         return map.get(len);
//     };
//     let preNums = nums.slice(0, -1), prePreNums = nums.slice(0, -2);
//     let result = Math.max(rob(preNums), rob(prePreNums) + nums[len - 1])
//     map.set(len, result);
//     //console.log(map)
//     return result;//通用函数
// };
// //console.log(rob([2, 7, 9, 3, 1]));
// console.log(rob([2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1]))

var rob = function (nums) {
    let len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    if (len === 2) {
        return Math.max(nums[0], nums[1]);
    }
    let q = 0, r = nums[0], s = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        q = r;
        r = s;
        s = Math.max(r, q + nums[i]);//通用函数
    }
    return s;
};
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1, 2, 7, 9, 3, 1]));
console.log(rob([99, 25, 8, 9, 7, 8, 5, 96]));
console.log(rob([99, 25, 8]));