// 598. 区间加法 II
// 给你一个 m x n 的矩阵 M 和一个操作数组 op 。矩阵初始化时所有的单元格都为 0 。ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。

// 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。



// 示例 1:



// 输入: m = 3, n = 3，ops = [[2,2],[3,3]]
// 输出: 4
// 解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
// 示例 2:

// 输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// 输出: 4
// 示例 3:

// 输入: m = 3, n = 3, ops = []
// 输出: 9


// 提示:


// 1 <= m, n <= 4 * 104
// 0 <= ops.length <= 104
// ops[i].length == 2
// 1 <= ai <= m
// 1 <= bi <= n

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let l = ops.length;
    if (l === 0) {
        return m * n;
    }
    let a = Infinity;
    let b = Infinity;
    for (let i = 0; i < l; i++) {
        ops[i][0] < a && (a = ops[i][0]);
        ops[i][1] < b && (b = ops[i][1]);
    }
    // console.log(a, b, a * b);
    return a * b;
};
maxCount(3, 3, [[2, 3], [3, 2]]);
maxCount(3, 3, [[2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3]]);
maxCount(3, 3, []);
maxCount(3, 2, [[2, 2], [3, 2]]);
maxCount(3, 2, [[2, 2], [3, 2], [1, 2]]);