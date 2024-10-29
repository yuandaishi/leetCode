// 给你一个正整数 n。

// 如果一个二进制字符串 x 的所有长度为 2 的
// 子字符串
// 中包含 至少 一个 "1"，则称 x 是一个 有效 字符串。

// 返回所有长度为 n 的 有效 字符串，可以以任意顺序排列。



// 示例 1：

// 输入： n = 3

// 输出： ["010","011","101","110","111"]

// 解释：

// 长度为 3 的有效字符串有："010"、"011"、"101"、"110" 和 "111"。

// 示例 2：

// 输入： n = 1

// 输出： ["0","1"]

// 解释：

// 长度为 1 的有效字符串有："0" 和 "1"。



// 提示：

// 1 <= n <= 18
/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    if (n === 1) {
        return ['0', '1'];
    }
    let strArr = [];//全部数字组合
    let total = Math.pow(2, n);//总共有多少个种组合
    for (let i = 0; i < total; i++) {
        let str = i.toString(2);//十进制转化为二进制
        if (str.length < n) {
            str = repeatZero(str, n - str.length);
        }
        strArr.push(str);
    }
    return strArr.filter((item) => {
        return checkData(item, 2, '1')
    })
};
let repeatZero = (str, n) => {//位数不够补0
    for (let i = 0; i < n; i++) {
        str = '0' + str;
    }
    return str;
}

let checkData = (str, n, pointStr) => {//检查长度为n的子字符传是否包含相应字符
    let strArr = str.split('');
    let include = false;
    for (let i = 0; i < strArr.length - n + 1; i++) {
        include = false;
        for (let j = i; j < i + n; j++) {
            if (strArr[j] === pointStr) {
                include = true;
                break;
            }
        }
        if (!include) return;
    }
    return include;
}

console.log(validStrings(4))
