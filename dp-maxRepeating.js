// 1668. 最大重复子字符串
// 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。

// 给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。



// 示例 1：

// 输入：sequence = "ababc", word = "ab"
// 输出：2
// 解释："abab" 是 "ababc" 的子字符串。
// 示例 2：

// 输入：sequence = "ababc", word = "ba"
// 输出：1
// 解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
// 示例 3：

// 输入：sequence = "ababc", word = "ac"
// 输出：0
// 解释："ac" 不是 "ababc" 的子字符串。


// 提示：

// 1 <= sequence.length <= 100
// 1 <= word.length <= 100
// sequence 和 word 都只包含小写英文字母。

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
// var maxRepeating = function (sequence, word) {//会把非连续的也计入总数
//     let reg = new RegExp(word, 'g');
//     if (sequence.match(reg)) {
//         return sequence.match(reg).length;
//     }
//     return 0
// };

// 暴力，每个数开始，子字符串的长度
var maxRepeating = function (sequence, word) {
    let sL = sequence.length;
    let wL = word.length;
    let s = 0;
    let st = 0;
    let i = 0;
    let bi = 0;
    while (i < sL) {
        if (sequence.substring(i, i + wL) === word) {
            //console.log(i)
            s += 1;
            i += wL;
            //console.log(st);
        } else {
            st = Math.max(s, st);
            s = 0;
            bi += 1;
            i = bi;
        }
    }
    return Math.max(s, st);
};


console.log(maxRepeating('ababcab', 'ab'));
// console.log(maxRepeating('ababc', 'ba'));
// console.log(maxRepeating('ababc', 'ac'));
console.log(maxRepeating('ababcab', 'ab'));
//'aaaba aaaba aaba aaaba aaaba aaaba aaaba'
console.log(maxRepeating('ababababababababa', 'aba'));
console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'))