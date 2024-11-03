// 338. 比特位计数
// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。



// 示例 1：

// 输入：n = 2
// 输出：[0,1,1]
// 解释：
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 示例 2：

// 输入：n = 5
// 输出：[0,1,1,2,1,2]
// 解释：
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101


// 提示：

// 0 <= n <= 105

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let s = [];
    for (let i = 0; i < n + 1; i++) {
        let strArr = i.toString(2).split('');
        let num = 0;
        for (j = 0; j < strArr.length; j++) {
            if (strArr[j] === '1') {
                num += 1;
            }
        }
        s.push(num);
    }
    return s;
};
// console.log(countBits(0));
// console.log(countBits(2));
// console.log(countBits(5));
