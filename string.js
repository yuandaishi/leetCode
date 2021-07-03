
// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

// 示例 1:

// 输入: "abab"

// 输出: True

// 解释: 可由子字符串 "ab" 重复两次构成。
// 示例 2:

// 输入: "aba"

// 输出: False
// 示例 3:

// 输入: "abcabcabcabc"

// 输出: True

// 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
//#endregion
var repeatedSubstringPattern = function (s) {
    for (let i = 1; i <= s.length / 2; i++) {
        let k = t = s.slice(0, i);
        while (k === s.slice(0, k.length)) {
            //console.log(k);
            k += t;
        }
        if (k === s + t) {
            return true;
        }
    }
    return false;
};
// console.log(repeatedSubstringPattern('abab'))
// console.log(repeatedSubstringPattern('aba'))
// console.log(repeatedSubstringPattern('abcabcabcabc'))
// console.log(repeatedSubstringPattern('ababab'))
// 给你一个字符串 s ，请你根据下面的算法重新构造字符串：

// 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
// 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
// 重复步骤 2 ，直到你没法从 s 中选择字符。
// 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
// 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
// 重复步骤 5 ，直到你没法从 s 中选择字符。
// 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
// 在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。

// 请你返回将 s 中字符重新排序后的 结果字符串 。

//  

// 示例 1：

// 输入：s = "aaaabbbbcccc"
// 输出："abccbaabccba"
// 解释：第一轮的步骤 1，2，3 后，结果字符串为 result = "abc"
// 第一轮的步骤 4，5，6 后，结果字符串为 result = "abccba"
// 第一轮结束，现在 s = "aabbcc" ，我们再次回到步骤 1
// 第二轮的步骤 1，2，3 后，结果字符串为 result = "abccbaabc"
// 第二轮的步骤 4，5，6 后，结果字符串为 result = "abccbaabccba"
// 示例 2：

// 输入：s = "rat"
// 输出："art"
// 解释：单词 "rat" 在上述算法重排序以后变成 "art"
// 示例 3：

// 输入：s = "leetcode"
// 输出："cdelotee"
// 示例 4：

// 输入：s = "ggggggg"
// 输出："ggggggg"
// 示例 5：

// 输入：s = "spo"
// 输出："ops"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/increasing-decreasing-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var sortString = function (s) {
    let sArr = [...s].sort();
    let len = s.length;
    let res = '';
    let con = true;
    while (res.length < len) {
        if (con) {
            let i = 0;
            res += sArr[0];
            sArr.splice(0, 1);
            while (i < sArr.length && res.length < len) {
                if (res[res.length - 1] !== sArr[i]) {
                    res += sArr[i];
                    sArr.splice(i, 1);
                } else {
                    i++;
                }
            }
            con = false;
        } else {
            let i = sArr.length - 1;
            res += sArr[i];
            sArr.splice(i, 1);
            i--;
            while (i >= 0 && res.length < len) {
                if (res[res.length - 1] !== sArr[i]) {
                    res += sArr[i];
                    //console.log(res, sArr, i)
                    sArr.splice(i, 1);
                    i--;
                    //console.log(res, sArr)
                } else {
                    i--;
                }
            }
            con = true;
        }

    }
    return res;
};
// console.log(sortString('aaaabbbbcccc'));
// console.log(sortString('rat'));
// console.log(sortString('leetcode'));
// console.log(sortString('ggggggg'));
// console.log(sortString('spo'));


// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

// 示例1:

//  输入："aabcccccaaa"
//  输出："a2b1c5a3"
// 示例2:

//  输入："abbccd"
//  输出："abbccd"
//  解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
// 提示：

// 字符串长度在[0, 50000]范围内。
var compressString = function (S) {
    let res = '';
    let len = S.length;
    for (let i = 0; i < len; i++) {
        res += S[i];
        let num = 1;
        while (S[i + 1] === S[i]) {
            num++;
            i++
        }
        res += num;
    }
    return res.length >= S.length ? S : res;
};
// console.log(compressString('aabcccccaaa'));
// console.log(compressString('abbccd'));