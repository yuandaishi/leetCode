// 2900. 最长相邻不相等子序列 I
// 给你一个下标从 0 开始的字符串数组 words ，和一个下标从 0 开始的 二进制 数组 groups ，两个数组长度都是 n 。

// 你需要从 words 中选出 最长
// 子序列
// 。如果对于序列中的任何两个连续串，二进制数组 groups 中它们的对应元素不同，则 words 的子序列是不同的。

// 正式来说，你需要从下标 [0, 1, ..., n - 1] 中选出一个 最长子序列 ，将这个子序列记作长度为 k 的 [i0, i1, ..., ik - 1] ，对于所有满足 0 <= j < k - 1 的 j 都有 groups[ij] != groups[ij + 1] 。

// 请你返回一个字符串数组，它是下标子序列 依次 对应 words 数组中的字符串连接形成的字符串数组。如果有多个答案，返回 任意 一个。

// 注意：words 中的元素是不同的 。



// 示例 1：

// 输入：words = ["e","a","b"], groups = [0,0,1]
// 输出：["e","b"]
// 解释：一个可行的子序列是 [0,2] ，因为 groups[0] != groups[2] 。
// 所以一个可行的答案是 [words[0],words[2]] = ["e","b"] 。
// 另一个可行的子序列是 [1,2] ，因为 groups[1] != groups[2] 。
// 得到答案为 [words[1],words[2]] = ["a","b"] 。
// 这也是一个可行的答案。
// 符合题意的最长子序列的长度为 2 。
// 示例 2：

// 输入：words = ["a","b","c","d"], groups = [1,0,1,1]
// 输出：["a","b","c"]
// 解释：一个可行的子序列为 [0,1,2] 因为 groups[0] != groups[1] 且 groups[1] != groups[2] 。
// 所以一个可行的答案是 [words[0],words[1],words[2]] = ["a","b","c"] 。
// 另一个可行的子序列为 [0,1,3] 因为 groups[0] != groups[1] 且 groups[1] != groups[3] 。
// 得到答案为 [words[0],words[1],words[3]] = ["a","b","d"] 。
// 这也是一个可行的答案。
// 符合题意的最长子序列的长度为 3 。


// 提示：

// 1 <= n == words.length == groups.length <= 100
// 1 <= words[i].length <= 10
// groups[i] 是 0 或 1。
// words 中的字符串 互不相同 。
// words[i] 只包含小写英文字母。

/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */

// 题目理解：
// 从数组groups中找出子字数组groups-s,使得groups-s[i] != groups-s[i + 1] 。这个过程，可能要删除一些元素，比如删除（groups[1],groups[3]),得到删除数组的下标[1,3];
// 删除words数组中的word[1],word[3];

//[1,0,1,1,1,0] [1,0,1,0]

var getLongestSubsequence = function (words, groups) {
    let n = 0;
    for (let i = 0; i < groups.length - 1; i++) {
        if (groups[i] === groups[i + 1]) {
            console.log(i)
            words.splice(i - n, 1);
            n += 1;
        }
    }
    return words;
};
console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]))
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 1]))
console.log(getLongestSubsequence(["a", "b", "c", "d", "j", "x"], [1, 0, 1, 1, 1, 0]))
console.log(getLongestSubsequence(["a", "b", "c", "d"], [1, 0, 1, 0]))
console.log(getLongestSubsequence(["hh", "svj", "a", "nr"], [1, 1, 1, 1]))