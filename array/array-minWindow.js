// 76. 最小覆盖子串
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。



// 注意：

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。


// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
// 解释：整个字符串 s 是最小覆盖子串。
// 示例 3:

// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。


// 提示：

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s 和 t 由英文字母组成

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let sLength = s.length;
    let tLength = t.length;
    if (sLength < tLength) {
        return '';
    }
    let left = sLength + 1;
    let sMap = new Map();
    let tMap = new Map();
    let result = s + t;//随意设定一个比s长度大的字符串
    for (let i = 0; i < tLength; i++) {
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }
    for (let j = 0; j < sLength; j++) {
        if (tMap.has(s[j])) {//设置left的初始值
            left = j;
            break;
        }
    }
    if (left > sLength) {//没有字符串相同。直接返回""
        return ""
    }
    for (let j = left; j < sLength; j++) {
        if (!tMap.has(s[j])) {//没有目标字符的，继续循环
            continue;
        }
        sMap.set(s[j], (sMap.get(s[j]) || 0) + 1);
        let con = true;//遍历到某个字母时，是否存在符合条件的子字符串
        for (const [key, value] of tMap) {//只需遍历tMap的长度
            if ((sMap.get(key) || 0) < value) {
                con = false;
                break;
            }
        }
        if (con) {//符合条件的话，做相应的处理
            //console.log('result', result, s.substring(left, j + 1))
            while ((!tMap.has(s[left]) || sMap.get(s[left]) > tMap.get(s[left])) && left < sLength) {
                sMap.has(s[left]) && sMap.set(s[left], sMap.get(s[left]) - 1);
                left++;
            }
            result = s.substring(left, j + 1).length > result.length ? result : s.substring(left, j + 1);
            //console.log(result.length, tLength)
            if (result.length === tLength) {// 如果目标字符串长度等于t字符串长度，则直接返回
                return s.substring(left, j + 1);
            }
            sMap.set(s[left], sMap.get(s[left]) - 1);
            left++;
            while (!tMap.has(s[left]) && left < sLength) {
                left++;
            }
        }
    }
    //console.log('result', result);
    return result.length > sLength ? '' : result;
};
console.log(minWindow("ABDAOBECODEBBANC", "ABC"));
console.log(minWindow("aaaaaaaaaaaaaa", "aa"));
console.log(minWindow("a", "aa"));
console.log(minWindow("AABECODEBANC", "ABC"));
console.log(minWindow("DDAABECODEBANC", "ABC"));
console.log(minWindow("DDABKCODEBANNC", "ABC"));