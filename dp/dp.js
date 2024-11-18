// 动态规划训练

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。



// 示例 1：

// 输入：nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出：6
// 解释：连续子数组[4, -1, 2, 1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [0]
// 输出：0
// 示例 4：

// 输入：nums = [-1]
// 输出：-1
// 示例 5：

// 输入：nums = [-100000]
// 输出：-100000


// 提示：

// 1 <= nums.length <= 3 * 104
//     - 105 <= nums[i] <= 105

//思路1：
//第i个数时，最大自连续数：opt(i);opt最优解
//选(和其他的opt有关系)：(这种思路找不出关系)
//不选：opt(i-i);

//思路2：以某一个数结尾
//以nums[i]结束的最大连续数（选）：opt(i);
//opt(i-1)如果为负数，则opt(i) = nums[i],否则opt(i)=opt(i-i)+nums[i];
//转移方程：Math.max(nums[i],opt(i-1)+nums[i]);
var maxSubArray = function (nums) {
    let len = nums.length;
    let opt;
    let res = -1000001;
    for (let i = 0; i < len; i++) {
        if (i === 0) {
            opt = nums[i];
            res = res > opt ? res : opt;
        } else {
            opt = Math.max(nums[i], opt + nums[i]);
            res = res > opt ? res : opt;
        }
    }
    return res;
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), maxSubArray([-5, 4]), maxSubArray([-1]), maxSubArray([100, -1]))

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/climbing-stairs
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//求最优解，可以用动态规划或者贪心
//刚好走到第i阶的方法为opt(i);（最后肯定是刚好走到，没有超过一说）
//动态方程opt(i-1)+opt(i-2);

//题目等于 契波那切数列

//动态规划
var climbStairs = function (n) {
    let res;
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        optPrePre = 1;
        optPre = 2;
        for (let i = 3; i <= n; i++) {
            res = optPre + optPrePre;
            optPrePre = optPre;
            optPre = res;
        }
    }
    return res;
};
//console.log(climbStairs(50))

// 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

// 实现 NumArray 类：

// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j]) ）


// 示例：

// 输入：
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// 输出：
// [null, 1, -1, -3]

// 解释：
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/range-sum-query-immutable
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.arr = JSON.parse(JSON.stringify(nums));
    this.len = nums.length;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let res = 0;
    for (let i = left; i <= right; i++) {
        res += this.arr[i];
    }
    return res;
};

// let obj = new NumArray([-2, 0, 3, -5, 2, -1]);
// console.log(obj)
// console.log(obj.sumRange(0, 2))


// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

// 致谢：

// 特别感谢 @pbrother 添加此问题并且创建所有测试用例。



// 示例 1：

// 输入：s = "abc", t = "ahbgdc"
// 输出：true
// 示例 2：

// 输入：s = "axc", t = "ahbgdc"
// 输出：false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/is-subsequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var isSubsequence = function (s, t) {
    let sLen = s.length;
    let tLen = t.length;
    let start = 0;
    for (let i = 0; i < sLen; i++) {
        let con = false;
        for (let j = start; j < tLen; j++) {
            if (s[i] === t[j]) {
                start = j + 1;
                con = true;
                break;
            }
        }
        if (!con) {
            return false;
        }
    }
    return true;
};

// 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

// 示例1:

// 输入：n = 3
// 输出：4
// 说明: 有四种走法
// 示例2:

// 输入：n = 5
// 输出：13
// 提示:

// n范围在[1, 1000000]之间

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/three-steps-problem-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//状态：刚好走到第i阶时的步数：dp(i);//每一阶都走过，步数最多
//动态方程：dp(i)=dp(i-1)+dp(i-2)+dp(i-3)
//n>3的时候，后一个数等于前3个数的和
var waysToStep = function (n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (n === 3) {
        return 4;
    }
    let dpPre = 4;
    let dpPrePre = 2;
    let dpprePrePre = 1;
    let res;
    if (n > 3) {
        for (let i = 4; i <= n; i++) {
            res = dpPre + dpPrePre + dpprePrePre;
            dpprePrePre = dpPrePre;
            dpPrePre = dpPre;
            dpPre = res;
        }
    }
    return res;
};
// console.log(waysToStep(5))


// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

// 注意：本题相对原题稍作改动



// 示例 1：

// 输入：[1, 2, 3, 1]
// 输出： 4
// 解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
// 示例 2：

// 输入：[2, 7, 9, 3, 1]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。
// 示例 3：

// 输入：[2, 1, 4, 5, 3, 1, 1, 3]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约、 5 号预约和 8 号预约，总时长 = 2 + 4 + 3 + 3 = 12。

//至第i个预约 的最长时长为dp(i),
//动态方程：dp(i)=Math.max(i+dp(i-2),dp(i-1));
var massage = function (nums) {
    let len = nums.length;
    let res;
    if (len === 0) {
        return 0
    }
    if (len < 3) {
        return Math.max(...nums);
    } else {
        let a = nums[0];//dp(0)=nums[0],dp(1) = Math.max(nums[0], nums[1]) dp(2)=Math.max(dp(0)+nums[2],dp(1))
        let b = Math.max(nums[0], nums[1]);
        for (let i = 2; i < len; i++) {
            res = Math.max((nums[i] + a), b);
            a = b;
            b = res;
        }
    }
    return res;
};

// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n) 。

// 示例1:

// 输入: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出: 6
// 解释: 连续子数组[4, -1, 2, 1] 的和最大，为 6。


// 提示：

// 1 <= arr.length <= 10 ^ 5
//     - 100 <= arr[i] <= 100

//子数组肯定以某个数组结束；
//dp(i):以第i个数结束的最大子数组;
//动态方程：Math.max(dp(i-1)+nums[i],nums[i])
var maxSubArray = function (nums) {
    let len = nums.length;
    let res = -100001;
    let a = nums[0];
    for (let i = 1; i < len; i++) {
        res = Math.max(res, a);
        a = Math.max(a + nums[i], nums[i]);
    }
    return Math.max(res, a);
};


// 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

// 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

// 选出任一 x，满足 0 < x < N 且 N % x == 0 。
// 用 N - x 替换黑板上的数字 N 。
// 如果玩家无法执行这些操作，就会输掉游戏。

// 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 False。假设两个玩家都以最佳状态参与游戏。



// 示例 1：

// 输入：2
// 输出：true
// 解释：爱丽丝选择 1，鲍勃无法进行操作。
// 示例 2：

// 输入：3
// 输出：false
// 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。


// 提示：

// 1 <= N <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/divisor-game
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//1.n是偶数的时候，I拿1，则下一个数肯定是奇数
//2.奇数的约数只能是奇数或者 1，因此下一个一定是偶数；
//3.此时I拿到的又是偶数，重复上述步骤。
//4.最终I拿到的是是偶数，2，所以必赢

//同理。N是奇数的时候，B能拿到偶数，因而能一直拿到偶数，I必输
var divisorGame = function (n) {

};


// 给你一个字符串 s，找到 s 中最长的回文子串。



// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"


// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和 / 或小写）组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//寻找最优解，可以尝试用动态规划
//第i个数字时，最长回文子串dp(i);
//dp(i)=Math.max(dp(i-1),以i结束的回文子串);

var longestPalindrome = function (s) {
    let len = s.length;
    let a = s[0];
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {//计算以i结束的最长回文子串
            var sonLen = 0;
            let left = j;
            let right = i;
            let con = true;
            while (left <= right) {
                if (s[left] === s[right]) {
                    sonLen += (left === right ? 1 : 2);//两个数在同一位置的时候，加1
                    left++;
                    right--;
                } else {
                    sonLen = 0;
                    con = false;
                    break;
                }
            }
            if (con) {//第j个如果是回文子串，则j后面的即使是，长度也比j的时候小，所以打断
                break;
            }
        }
        console.log(s.slice(i - sonLen + 1, i + 1))
        a = a.length > sonLen ? a : s.slice(i - sonLen + 1, i + 1);
    }
    return a;
};