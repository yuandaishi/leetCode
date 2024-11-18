// LCR 088. 使用最小花费爬楼梯
// 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

// 每当爬上一个阶梯都要花费对应的体力值，一旦支付了相应的体力值，就可以选择向上爬一个阶梯或者爬两个阶梯。

// 请找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。



// 示例 1：

// 输入：cost = [10, 15, 20]
// 输出：15
// 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
//  示例 2：

// 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// 输出：6
// 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。


// 提示：

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const dp = []
    // 边界值
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let index = 2; index < cost.length; index++) {
        dp[index] = Math.min(dp[index - 1], dp[index - 2]) + cost[index]
    }
    // 注意可能是从最后一个 或者 倒数第二个 跳出
    return Math.min(dp[cost.length - 1], dp[cost.length - 2])

};
//console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100])); 1
console.log(minCostClimbingStairs([1, 100, 1])); 1
console.log(minCostClimbingStairs([1, 100, 1, 1])); 2[1, 100, 1, 1, 99]
console.log(minCostClimbingStairs([1, 100, 1, 1, 1])); 3
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100])); 3
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1])); 4
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1])); 5
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100])); 5
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); 6