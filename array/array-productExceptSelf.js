// 238. 除自身以外数组的乘积
// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。



// 示例 1:

// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:

// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]


// 提示：

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内


// 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     let l = nums.length;
//     let s = new Array(l);
//     let zeroNum = 0;
//     let total = 1;
//     let total2 = 1;
//     for (let i = 0; i < l; i++) {
//         if (nums[i] === 0) {
//             zeroNum += 1;
//         }
//         total *= nums[i];
//         total2 *= nums[i] || 1;//等于0的按1处理
//     }
//     if (zeroNum > 1) {
//         return s.fill(0);
//     }
//     for (let i = 0; i < l; i++) {
//         if (nums[i] !== 0) {
//             s[i] = total / nums[i]
//         } else {
//             s[i] = total2
//         }
//     }
//     return s;
// };
var productExceptSelf = function (nums) {
    let m = nums.length;
    let L = new Array(m);
    let R = new Array(m);
    let S = new Array(m);
    L[0] = 1;
    R[m - 1] = 1;
    for (let i = 1; i < m; i++) {
        L[i] = L[i - 1] * nums[i - 1]
    }
    for (let i = m - 2; i >= 0; i--) {
        R[i] = R[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < m; i++) {
        S[i] = L[i] * R[i];
    }
    // console.log(L, R)
    return S;
};
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]))