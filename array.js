/**
 * @param {number[]} nums
 * @return {number}
 */

// 输入：[2,2,1,1,1,2,2] //2

var majorityElement = function (nums) {
    let len = nums.length;
    let arrN = [];
    let map = {};//作为参考的map
    for (let i = 0; i < len; i++) {
        if (arrN.indexOf(nums[i]) === -1) {
            arrN.push(nums[i]);
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
    }
    for (let key in map) {
        if (map[key] > len / 2) {
            return key;
        }
    }
    return -1;
};
//#endregion
//arr = [1,4,2,5,3]
//58
//子数组 定义为原数组中的一个连续子序列。
var sumOddLengthSubarrays = function (arr) {
    let len = arr.length;
    let num = 0;
    for (let i = 0; i < len; i++) {
        num += arr[i];
        let j = i;
        while (arr[j + 2]) {
            for (let k = i; k <= j + 2; k++) {
                num += arr[k];
            }
            j += 2;
        }
    }
    return num;
}

//求解变为寻找每个数字出现的次数，数字会出现在序号连续的奇数个数子数组中。
var sumOddLengthSubarrays = function (arr) {
    let len = arr.length;
    let res = 0
    for (let i = 0; i < len; i++) {
        let left = i + 1;//左边的选法，从i往两边延伸，不是奇数就是偶数，因为没有数字的时候，相当于0，是偶数，所以要加1（左边剩余数加1）。
        let right = len - i;//5 4 右边剩余数加1
        let left_odd = Math.floor(left / 2);
        let left_even = Math.ceil(left / 2);
        let rigth_odd = Math.floor(right / 2);
        let right_even = Math.ceil(right / 2);
        res += (left_odd * rigth_odd + left_even * right_even) * arr[i];
    }
    return res;
}

//给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
// 输入: [1,2,3]
// 输出: 6

// 示例 2:
// 输入: [1,2,3,4]
// 输出: 24

// [-100,-98,-1,2,3,4]
var maximumProduct = function (nums) {//,负，负，正，则最小的两个负数乘以最大的正数，其他则是三个最大的数相乘
    // 三个最大的数相乘
    let arrN = [nums[0], nums[1], nums[2]];
    let maxNum = Math.max(...nums);
    let arrM = [];
    for (let i = 0; i < nums.length; i++) {
        let num_min = Math.min(...arrN);
        if (i > 2 && nums[i] > num_min) {
            arrN.splice(arrN.indexOf(num_min), 1, nums[i]);
        }
        // 负负正的情况
        if (nums[i] < 0 && arrM.length < 2) {
            arrM.push(nums[i]);
        } else if (nums[i] < 0) {
            let num_max = Math.max(...arrM);
            if (nums[i] < num_max) {
                arrM.splice(arrM.indexOf(num_max), 1, nums[i]);
            }
        }
    }
    console.log(arrM, arrN);
    if (arrM.length < 2) {
        return arrN[0] * arrN[1] * arrN[2];
    }

    return arrN[0] * arrN[1] * arrN[2] > arrM[0] * arrM[1] * maxNum ? arrN[0] * arrN[1] * arrN[2] : arrM[0] * arrM[1] * maxNum;
};


// 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
// 示例 1：

// 输入：arr = [2,6,4,1]
// 输出：false
// 解释：不存在连续三个元素都是奇数的情况。
// 示例 2：

// 输入：arr = [1,2,34,3,4,5,7,23,12]
// 输出：true
// 解释：存在连续三个元素都是奇数的情况，即 [5,7,23] 。

var threeConsecutiveOdds = function (arr) {
    let len = arr.length - 2
    for (let i = 0; i < len; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
            return true
        }
    }
    return false;
};

// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
// 输入: nums = [1,2,3,1], k = 3
// 输出: true
// 1 找出相等的两个元素，2，两元素索引相减的绝对值小于K
var containsNearbyDuplicate = function (nums, k) {//复杂度On2
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= i + k; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// 1：维护一个长度为k的数组，2.这个数组到达最大长度的时候，如果没有相同的，则移除第一个数字，有相同的则返回ture
var containsNearbyDuplicate = function (nums, k) {//复杂度On
    let arrN = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (arrN.includes(nums[i])) {
            return true
        }
        arrN.push(nums[i]);
        if (arrN.length > k) {
            arrN.shift();
        }
    }
    return false;
};
//#endregion给定一个无重复元素的有序整数数组 nums 。

// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

// "a->b" ，如果 a != b
// "a" ，如果 a == b
//  

// 示例 1：

// 输入：nums = [0,1,2,4,5,7]
// 输出：["0->2","4->5","7"]
// 解释：区间范围是：
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

var summaryRanges = function (nums) {
    let len = nums.length;
    let res = [];
    if (len === 0) {
        return [];
    }
    if (len === 1) {
        return [`${nums[0]}`];
    }
    let k = nums[0];
    for (let i = 0; i < len; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {//出现不相连的时候
            if (nums[i] === k) {//和第一个数相同的时候
                res.push(`${k}`);
                k = nums[i + 1];
            } else {
                res.push(`${k}->${nums[i]}`);
                k = nums[i + 1];
            }
        }
    }
    return res;
};

// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

// 示例 1:

// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True
// 示例 2:

// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False

// 1.遍历，如果一个元素前后都是0（不是1.因为第一个的0的前面是undefined，最后一个0的后面是undefined），则n-1，并且这个元素置为1
var canPlaceFlowers = function (flowerbed, n) {
    let len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            n -= 1;
            flowerbed[i] = 1;
        }
    }
    return n <= 0
};
//#endregion
// A 和 B 在一个 3 x 3 的网格上玩井字棋。

// 井字棋游戏的规则如下：

// 玩家轮流将棋子放在空方格 (" ") 上。
// 第一个玩家 A 总是用 "X" 作为棋子，而第二个玩家 B 总是用 "O" 作为棋子。
// "X" 和 "O" 只能放在空方格中，而不能放在已经被占用的方格上。
// 只要有 3 个相同的（非空）棋子排成一条直线（行、列、对角线）时，游戏结束。
// 如果所有方块都放满棋子（不为空），游戏也会结束。
// 游戏结束后，棋子无法再进行任何移动。
// 给你一个数组 moves，其中每个元素是大小为 2 的另一个数组（元素分别对应网格的行和列），它按照 A 和 B 的行动顺序（先 A 后 B）记录了两人各自的棋子位置。

// 如果游戏存在获胜者（A 或 B），就返回该游戏的获胜者；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。

// 你可以假设 moves 都 有效（遵循井字棋规则），网格最初是空的，A 将先行动。

//  

// 示例 1：

// 输入：moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// 输出："A"
// 解释："A" 获胜，他总是先走。
// "X  "    "X  "    "X  "    "X  "    "X  "
// "   " -> "   " -> " X " -> " X " -> " X "
// "   "    "O  "    "O  "    "OO "    "OOX"
// 示例 2：

// 输入：moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
// 输出："B"
// 解释："B" 获胜。
// "X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
// "   " -> " O " -> " O " -> " O " -> "XO " -> "XO " 
// "   "    "   "    "   "    "   "    "   "    "O  "

//1. 行获胜方式，子数组隔一个元素，第一个元素3次相同(不需要连续)出现3个0，或者1.，或者2
//2. 列获胜方式，子数组隔一个元素，第二个元素3次相同(不需要连续)出现3个0，或者1.，或者2
//3. 斜线获胜方式1.隔一个元素，出现00，11,22(不需要连续)
//4. 斜线获胜方式2.隔一个元素，出现02,11,20(不需要连续)
var tictactoe = function (moves) {
    let len = moves.length;
    let obj_a_col = { 0: 0, 1: 0, 2: 0 };//key代表列号，value代表该列有几个a
    let obj_a_row = { 0: 0, 1: 0, 2: 0 };//key代表行号，value代表该行有几个a
    let obj_b_col = { 0: 0, 1: 0, 2: 0 };
    let obj_b_row = { 0: 0, 1: 0, 2: 0 };
    let obj_slash_one_a = 0;
    let obj_slash_two_a = 0;
    let obj_slash_one_b = 0;
    let obj_slash_two_b = 0;
    if (len < 5) {
        return 'Pending';
    }
    for (let i = 0; i < len; i += 2) {
        obj_a_col[moves[i][0]] += 1;
        obj_a_row[moves[i][1]] += 1;
        if (moves[i].toString() === '0,2' || moves[i].toString() === '1,1' || moves[i].toString() === '2,0') {
            obj_slash_one_a += 1;
        }
        if (moves[i].toString() === '0,0' || moves[i].toString() === '1,1' || moves[i].toString() === '2,2') {
            obj_slash_two_a += 1;
        }

    }
    for (let i = 1; i < len; i += 2) {
        obj_b_col[moves[i][0]] += 1;
        obj_b_row[moves[i][1]] += 1;
        if (moves[i].toString() === '0,2' || moves[i].toString() === '1,1' || moves[i].toString() === '2,0') {
            obj_slash_one_b += 1;
        }
        if (moves[i].toString() === '0,0' || moves[i].toString() === '1,1' || moves[i].toString() === '2,2') {
            obj_slash_two_b += 1;
        }
    }
    console.log(Object.values(obj_a_col).includes(3), Object.values(obj_a_row).includes(3), obj_slash_one_a, obj_slash_two_a);
    console.log(Object.values(obj_b_col).includes(3), Object.values(obj_b_row).includes(3), obj_slash_one_b, obj_slash_two_b);
    if (Object.values(obj_a_col).includes(3) || Object.values(obj_a_row).includes(3) || obj_slash_one_a === 3 || obj_slash_two_a === 3) {
        return 'A';
    } else if (Object.values(obj_b_col).includes(3) || Object.values(obj_b_row).includes(3) || obj_slash_one_b === 3 || obj_slash_two_b === 3) {
        return 'B';
    } else if (len < 9) {
        return 'Pending';
    } else {
        return 'Draw';
    }
};

// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

//  

// 说明：

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//  

// 示例：

// 输入：
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出：[1,2,2,3,5,6]

// 可采用合并后排序，时间复杂度较差
//一般而言，对于有序数组可以通过 双指针法 达到O(n + m)O(n+m)的时间复杂度。

var merge = function (nums1, m, nums2, n) {//双指针
    let i = 0;
    let j = 0;
    let k = 0;
    nums1.length = m;
    let arrN = [];
    while (k < m + n) {//循环的次数
        if (nums1[i] <= nums2[j]) {
            arrN[k] = nums1[i];
            i++;
            k++;
        } else {
            arrN[k] = nums2[j];
            j < n - 1 && j++;
            k++
        }

    }
    return arrN;
};

// 给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。

// 如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// 其中 |x| 表示 x 的绝对值。

// 返回 好三元组的数量 。

//  

// 示例 1：

// 输入：arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// 输出：4
// 解释：一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。
// 示例 2：

// 输入：arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// 输出：0
// 解释：不存在满足所有条件的三元组。

//1.不能排序
var countGoodTriplets = function (arr, a, b, c) {
    let len = arr.length;
    let res = 0;
    for (let i = 0; i < len - 2; i++) {
        let j = i + 1;
        while (j < len - 1) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                let k = j + 1;
                while (k < len) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        res += 1;
                        console.log(i, j, k)
                    }
                    k++;
                }
            }
            j++;
        }
    }
    return res;
};

// 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。

// 序号代表了一个元素有多大。序号编号的规则如下：

// 序号从 1 开始编号。
// 一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
// 每个数字的序号都应该尽可能地小。
//  

// 示例 1：

// 输入：arr = [40,10,20,30] [10,20,30,40]
// 输出：[4,1,2,3]
// 解释：40 是最大的元素。 10 是最小的元素。 20 是第二小的数字。 30 是第三小的数字。
// 示例 2：

// 输入：arr = [100,100,100]
// 输出：[1,1,1]
// 解释：所有元素有相同的序号。
// 示例 3：

// 输入：arr = [37,12,28,9,100,56,80,5,12]arrC  [5,9,12,28,37,56,80,100] setA []
// 输出：[5,3,4,2,8,6,7,1,3]

//解题：
//序号返回的数据长度等于arr的长度
//序号的最大值不一定等于arr的长度（有数字相同的时候）
var arrayRankTransform = function (arr) {
    let res = [];
    let arrC = JSON.parse(JSON.stringify(arr));
    let len = arrC.length;
    //开始查找的位置
    let setA = Array.from(new Set(arr.sort((a, b) => (a - b))));//去重，从小到大排序，查找数组中的数字在setA中的位置，即可得到结果
    for (let i = 0; i < len; i++) {
        let start = 0;
        let end = setA.length - 1;
        let mid = (end - start) / 2 | 0;
        //console.log(i);
        while (start <= end) {//循环的次数条件。可以用递归来实现，一样的逻辑(start增大，end减小)
            //console.log(arrC[i], setA[mid])
            if (arrC[i] > setA[mid]) {//目标数大于开始查找的位置
                start = mid + 1;//开始的位置重置
                // start+(end-start)/2|0 逻辑是这样的，简化之后得到目标式子
                mid = (start + end) / 2 | 0;
            } else if (arrC[i] < setA[mid]) {//目标数小于开始查找的位置
                end = mid - 1;
                mid = (start + end) / 2 | 0;
            } else {
                res.push(mid + 1);
                break;
            }
        }

    }
    return res;
};

// 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

// 注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。

// 返回词汇表 words 中你掌握的所有单词的 长度之和。

//  

// 示例 1：

// 输入：words = ["cat","bt","hat","tree"], chars = "atach"
// 输出：6
// 解释： 
// 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
// 示例 2：

// 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// 输出：10
// 解释：
// 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。

var countCharacters = function (words, chars) {//暴力解法
    let res = 0;
    for (let i = 0; i < words.length; i++) {
        let chars_arr = [...chars];
        let con = true;
        for (let j = 0; j < words[i].length; j++) {
            //console.log(chars_arr)
            if (chars_arr.indexOf(words[i][j]) !== -1) {
                chars_arr.splice(chars_arr.indexOf(words[i][j]), 1);
            } else {
                con = false;
                break;
            }
        }
        con && (res += words[i].length);
    }
    return res;
};

var countCharacters = function (words, chars) {//map解法 1.统计word中每个单词每个字母出现的次数。2.统计chars中每个字母出现的次数。3.比较word中单词的次数，少于chars，就表示可以掌握
    let res = 0;
    let mapArr = [];//存储map的数组
    let charsMap = {};
    for (let i = 0; i < words.length; i++) {
        let map = {};
        for (let j = 0; j < words[i].length; j++) {
            if (map[words[i][j]] === undefined) {
                map[words[i][j]] = 1;
            } else {
                map[words[i][j]] += 1;
            }
        }
        mapArr.push(map);
    }
    //console.log(mapArr);
    for (let i = 0; i < chars.length; i++) {
        if (charsMap[chars[i]] === undefined) {
            charsMap[chars[i]] = 1;
        } else {
            charsMap[chars[i]] += 1;
        }
    }
    //console.log(charsMap);
    for (let i = 0; i < mapArr.length; i++) {
        let con = true;
        for (var key in mapArr[i]) {
            if (charsMap[key] === undefined || charsMap[key] < mapArr[i][key]) {//chars中不包含相应字母，或者相应字母的数量小于字符串字母的数量
                con = false;
                break;
            }
        }
        con && (res += words[i].length);
    }
    return res;
};

// 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。

// 你可以按照下面的规则在平面上移动：

// 每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
// 必须按照数组中出现的顺序来访问这些点。

//1.按顺序走
//2.最快的路径是斜线加直线
//3.斜线最多+直线最少等于最短路径
//4.步数都是整数
var minTimeToVisitAllPoints = function (points) {
    let res = 0;
    for (let i = 0; i < points.length - 1; i++) {
        if (points[i + 1][0] - points[i][0] === 0) {//x轴相同,同在一条竖线上
            res += Math.abs(points[i + 1][1] - points[i][1])
        } else if (points[i + 1][1] - points[i][1] === 0) {//x轴相同,同在一条横线线上
            res += Math.abs(points[i + 1][0] - points[i][0])
        } else {
            // Math.min(Math.abs(points[i + 1][1] - points[i][1]), Math.abs(points[i + 1][0] - points[i][0])) 斜线走的步数
            // Math.abs(Math.abs(points[i + 1][1] - points[i][1]) - Math.abs(points[i + 1][0] - points[i][0]) 直线走的步数
            res += Math.min(Math.abs(points[i + 1][1] - points[i][1]), Math.abs(points[i + 1][0] - points[i][0])) + Math.abs(Math.abs(points[i + 1][1] - points[i][1]) - Math.abs(points[i + 1][0] - points[i][0]))
        }
    }
    //console.log(res);
    return res;
};
//minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])
// minTimeToVisitAllPoints([[3, 2], [-2, 2]])

// 给你一个由一些多米诺骨牌组成的列表 dominoes。

// 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。

// 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。

// 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

//  

// 示例：

// 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
// 输出：1
//  

// 提示：

// 1 <= dominoes.length <= 40000
// 1 <= dominoes[i][j] <= 9

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var numEquivDominoPairs = function (dominoes) {
    let map = {};
    let len = dominoes.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        let key = dominoes[i].sort().toString();
        //console.log(map)
        if (map[key] === undefined) {
            map[key] = 1;
        } else {
            map[key] += 1;
        }
    }
    //console.log(map)
    for (var key in map) {
        res += map[key] * (map[key] - 1) / 2;
    }
    return res;
};
//console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]))


// 珠玑妙算游戏（the game of master mind）的玩法如下。

// 计算机有4个槽，每个槽放一个球，颜色可能是红色（R）、黄色（Y）、绿色（G）或蓝色（B）。例如，计算机可能有RGGB 4种（槽1为红色，槽2、3为绿色，槽4为蓝色）。
// 作为用户，你试图猜出颜色组合。打个比方，你可能会猜YRGB。要是猜对某个槽的颜色，则算一次“猜中”；要是只猜对颜色但槽位猜错了，则算一次“伪猜中”。注意，“猜中”不能算入“伪猜中”。

// 给定一种颜色组合solution和一个猜测guess，编写一个方法，返回猜中和伪猜中的次数answer，其中answer[0]为猜中的次数，answer[1]为伪猜中的次数。

// 示例：

// 输入： solution="RGBY",guess="GGRR"
// 输出： [1,1]
// 解释： 猜中1次，伪猜中1次。
// 提示：

// len(solution) = len(guess) = 4
// solution和guess仅包含"R","G","B","Y"这4种字符

//1.先排除猜中的
var masterMind = function (solution, guess) {
    let answer = [0, 0];
    let solutionArr = [...solution];
    let guessArr = [...guess];
    //猜中的次数
    for (let i = 0; i < solutionArr.length; i++) {
        if (solutionArr[i] === guessArr[i]) {
            answer[0] += 1;
        }
    }
    //伪猜中和猜中次数和
    for (let i = 0; i < solutionArr.length; i++) {
        if (guessArr.indexOf(solutionArr[i]) !== -1) {
            answer[1] += 1;
            guessArr.splice(guessArr.indexOf(solutionArr[i]), 1);
            //console.log(guessArr)
        }
    }
    answer[1] = answer[1] - answer[0];
    return answer;
};
//console.log(masterMind('RGBY', 'GGRR'));
//console.log(masterMind('BRBB', 'RBGY'));[0, 2]
//console.log(masterMind('BGBG', 'RGBR'));//[2,0]

// 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

// 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，
// 都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

//  

// 示例 1：

// 输入：nums = [1,3,5,4,7]
// 输出：3
// 解释：最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 
// 示例 2：

// 输入：nums = [2,2,2,2,2]
// 输出：1
// 解释：最长连续递增序列是 [2], 长度为1。
//  

// 提示：

// 0 <= nums.length <= 104
// -109 <= nums[i] <= 109

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var findLengthOfLCIS = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let len = nums.length;
    let res = 1;
    let num = 1;
    for (let i = 0; i < len; i++) {
        if (nums[i + 1] > nums[i]) {
            //num += 1;
            res = ((num += 1) > res ? num : res);
            //console.log(res, num);
        } else {
            num = 1;
        }
    }
    return res;
};
// console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
// console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));

// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

//  

// 示例 1:

// 给定 nums = [3,2,2,3], val = 3,

// 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

// 你不需要考虑数组中超出新长度后面的元素。
// 示例 2:

// 给定 nums = [0,1,2,2,3,0,4,2], val = 2,

// 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

// 注意这五个元素可为任意顺序。

// 你不需要考虑数组中超出新长度后面的元素。
//  

// 说明:

// 为什么返回数值是整数，但输出的答案是数组呢?

// 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

// 你可以想象内部操作如下:

// // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
// int len = removeElement(nums, val);

// // 在函数里修改输入数组对于调用者是可见的。
// // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-element
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var removeElement = function (nums, val) {
//     let i = 0;
//     while (i < nums.length) {
//         if (nums[i] === val) {
//             nums.splice(i, 1);
//         } else {
//             i += 1;
//         }
//     }
//     return nums.length;
// }
// console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));


// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12] [1,0,0,3,12] [1,3,0,0,12] [1,3,0,12,0]
// 输出: [1,3,12,0,0]
//[0,1,0,5] [1,5,0,0]
//[0,0,0,5,4] [5,4,0,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

//数组，坑位变化
//等于0的数和非0的数交换位置
var moveZeroes = function (nums) {
    let len = nums.length;
    let i = 0;
    while (i < len) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            len--;
        } else {
            i++;
        }
    }
    return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 1, 0, 5]));
// console.log(moveZeroes([0, 0, 0, 5, 4]));

// 在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。

// 给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。

// 重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。

// 如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

// 示例 1:

// 输入: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 1, c = 4
// 输出: 
// [[1,2,3,4]]
// 解释:
// 行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 用之前的元素值一行一行填充新矩阵。
// 示例 2:

// 输入: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 2, c = 4
// 输出: 
// [[1,2],
//  [3,4]]
// 解释:
// 没有办法将 2 * 2 矩阵转化为 2 * 4 矩阵。 所以输出原矩阵。
// 注意：

// 给定矩阵的宽和高范围在 [1, 100]。
// 给定的 r 和 c 都是正数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reshape-the-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var matrixReshape = function (nums, r, c) {
    //let numsN = nums.reduce((current, val, key, array) => current.concat(val), []);
    let numsN = [].concat(...nums);
    let len = numsN.length;
    let res = [];
    if (r * c !== len) {
        return nums;
    } else {
        for (let i = 0; i < len; i += c) {
            let sonA = [];
            for (let j = 0; j < c; j++) {
                sonA.push(numsN[i + j]);
            }
            //console.log(sonA);
            res.push(sonA);
        }
    }
    return res;
};
// console.log(matrixReshape([[1, 2], [3, 4]], 4,));
// console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));

// 给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。

// 注意：你 不能 修改非 '?' 字符。

// 题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。

// 在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。

//  

// 示例 1：

// 输入：s = "?zs"
// 输出："azs"
// 解释：该示例共有 25 种解决方案，从 "azs" 到 "yzs" 都是符合题目要求的。只有 "z" 是无效的修改，因为字符串 "zzs" 中有连续重复的两个 'z' 。
// 示例 2：

// 输入：s = "ubv?w"
// 输出："ubvaw"
// 解释：该示例共有 24 种解决方案，只有替换成 "v" 和 "w" 不符合题目要求。因为 "ubvvw" 和 "ubvww" 都包含连续重复的字符。
// 示例 3：

// 输入：s = "j?qg??b"
// 输出："jaqgacb"
// 示例 4：

// 输入：s = "??yw?ipkj?"
// 输出："acywaipkja"
//  

// 提示：

// 1 <= s.length <= 100

// s 仅包含小写英文字母和 '?' 字符

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。
var modifyString = function (s) {
    let map = [...'abcdefghijklmnopqrstuvwxyz'];
    let maps = [...s];
    for (let i = 0; i < maps.length; i++) {
        if (maps[i] === '?') {
            for (let j = 0; j < map.length; j++) {
                //console.log(map[j], maps[i + 1], maps[i - 1])
                if (map[j] !== maps[i + 1] && map[j] !== maps[i - 1]) {
                    maps[i] = map[j];
                    break;
                }
            }
        }
    }
    return maps.join('');
};
// console.log(modifyString('?zs'));
// console.log(modifyString('ubv?w'));
// console.log(modifyString('j?qg??b'));
// console.log(modifyString('??yw?ipkj?'));

// 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。

// 完成所有替换操作后，请你返回这个数组。

//  

// 示例：

// 输入：arr = [17,18,5,4,6,1] [18,17,6,5,4,1]
// 输出：[18,6,6,6,1,-1]
//  

// 提示：

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var replaceElements = function (arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = Math.max.apply(null, arr.slice(i + 1));
//     }
//     arr[arr.length - 1] = -1;
//     return arr;
// };
var replaceElements = function (arr) {
    let len = arr.length;
    let res = [];
    let rightMax = arr[len - 1];
    for (let i = len - 2; i > -1; i--) {
        res[i] = rightMax;
        if (arr[i] > rightMax) {
            rightMax = arr[i];
        }
    }
    res[len - 1] = -1;
    return res;
}
// console.log(replaceElements([17, 18, 5, 4, 6, 1]));

// 给你两个数组，arr1 和 arr2，

// arr2 中的元素各不相同
// arr2 中的每个元素都出现在 arr1 中
// 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

//  

// 示例：

// 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// 输出：[2,2,2,1,4,3,3,9,6,7,19]
//  

// 提示：

// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// arr2 中的元素 arr2[i] 各不相同
// arr2 中的每个元素 arr2[i] 都出现在 arr1 中

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/relative-sort-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// map方法
var relativeSortArray = function (arr1, arr2) {
    let map = new Map();
    let lastArr = [];
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], []);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.get(arr1[i]).push(arr1[i])
        } else {
            lastArr.push(arr1[i]);
        }
    }
    for (let [key, value] of map) {
        res = res.concat(value);
    }
    res = res.concat(lastArr.sort((a, b) => (a - b)));
    return res;
};
// console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));

// 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

// 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

// 以数组形式返回答案。

//  

// 示例 1：

// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3]
// 解释： 
// 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
// 对于 nums[1]=1 不存在比它小的数字。
// 对于 nums[2]=2 存在一个比它小的数字：（1）。 
// 对于 nums[3]=2 存在一个比它小的数字：（1）。 
// 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
// 示例 2：

// 输入：nums = [6,5,4,8]
// 输出：[2,1,0,3]
// 示例 3：

// 输入：nums = [7,7,7,7]
// 输出：[0,0,0,0]
//  

// 提示：

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var smallerNumbersThanCurrent = function (nums) {
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         let num = 0
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[j] < nums[i]) {
//                 num++;
//             }
//         }
//         res[i] = num
//     }
//     return res;
// };
// 桶排序法
var smallerNumbersThanCurrent = function (nums) {
    let map = new Map();
    let res = [];
    for (let i = 0; i < 101; i++) {
        map.set(i, 0);
    }
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    for (let i = 0; i < nums.length; i++) {
        let num = 0;
        for (let [key, value] of map) {
            (key === nums[i]) ? (res[i] = num) : (num += value);
        }
    }
    return res;
}
// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// 数轴上放置了一些筹码，每个筹码的位置存在数组 chips 当中。

// 你可以对 任何筹码 执行下面两种操作之一（不限操作次数，0 次也可以）：

// 将第 i 个筹码向左或者右移动 2 个单位，代价为 0。
// 将第 i 个筹码向左或者右移动 1 个单位，代价为 1。
// 最开始的时候，同一位置上也可能放着两个或者更多的筹码。

// 返回将所有筹码移动到同一位置（任意位置）上所需要的最小代价。

//  

// 示例 1：

// 输入：chips = [1,2,3]
// 输出：1
// 解释：第二个筹码移动到位置三的代价是 1，第一个筹码移动到位置三的代价是 0，总代价为 1。
// 示例 2：

// 输入：chips = [2,2,2,3,3]
// 输出：2
// 解释：第四和第五个筹码移动到位置二的代价都是 1，所以最小总代价为 2。
//  

// 提示：

// 1 <= chips.length <= 100
// 1 <= chips[i] <= 10^9

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-cost-to-move-chips-to-the-same-position
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var minCostToMoveChips = function (position) {

};
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }
    }
    //console.log(nums);
    return nums.length;
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

//二分法
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        var mid = (start + end) / 2 | 0;
        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    //console.log(mid)
    return (nums[mid] > target ? (mid === 0 ? 0 : mid) : mid + 1);
};
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([1, 3], 2));

// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。



// 示例 1：

// 输入：nums = [1, 2, 3, 4]
// 输出：[1, 3, 6, 10]
// 解释：动态和计算过程为[1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]。
// 示例 2：

// 输入：nums = [1, 1, 1, 1, 1]
// 输出：[1, 2, 3, 4, 5]
// 解释：动态和计算过程为[1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1]。
// 示例 3：

// 输入：nums = [3, 1, 2, 10, 1]
// 输出：[3, 4, 6, 16, 17]


// 提示：

// 1 <= nums.length <= 1000
//     - 10 ^ 6 <= nums[i] <= 10 ^ 6
var runningSum = function (nums) {
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        nums[i + 1] += nums[i];
    }
    return nums;
};
// console.log(runningSum([1, 2, 3, 4]))
// console.log(runningSum([1, 1, 1, 1, 1]))
// console.log(runningSum([3, 1, 2, 10, 1]))
//#endregion
//#endregion
// 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

// 更正式地，检查是否存在两个下标 i 和 j 满足：

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
//  

// 示例 1：

// 输入：arr = [10,2,5,3]
// 输出：true
// 解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。
// 示例 2：

// 输入：arr = [7,1,14,11]
// 输出：true
// 解释：N = 14 是 M = 7 的两倍，即 14 = 2 * 7 。
// 示例 3：

// 输入：arr = [3,1,7,11]
// 输出：false
// 解释：在该情况下不存在 N 和 M 满足 N = 2 * M 。
//  

// 提示：

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3
// 通过次数10,788提交次数24,568

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/check-if-n-and-its-double-exist
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


var checkIfExist = function (arr) {
    let len = arr.length;
    let map = {};
    let zero = 0;
    for (let i = 0; i < len; i++) {
        if (!map[arr[i]] && arr[i] % 2 === 0) {//存储双数
            (arr[i] === 0) ? zero++ : map[arr[i]] = arr[i];
        }
    }
    if (zero > 1) {
        return true;
    }
    for (let i = 0; i < len; i++) {
        if (Object.values(map).includes(arr[i] * 2)) {
            return true;
        }
    }
    return false;
};
// console.log(checkIfExist([10, 2, 5, 3]))
// console.log(checkIfExist([7, 1, 14, 11]))
// console.log(checkIfExist([3, 1, 7, 11]))
// console.log(checkIfExist([-16, -13, 8]))
// console.log(checkIfExist([4, -7, 11, 4, 18]))
// console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -0]))
//#endregion
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

//  

// 示例 1:

// 输入: [0,1,3]
// 输出: 2
// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8
//  

// 限制：

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof
// // 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var missingNumber = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i !== nums[i]) {
            return i
        }
    }
    return nums[len - 1] + 1;
};
//#endregion
// 给你个整数数组 arr，其中每个元素都 不相同。

// 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

//  

// 示例 1：

// 输入：arr = [4,2,1,3]
// 输出：[[1,2],[2,3],[3,4]]
// 示例 2：

// 输入：arr = [1,3,6,10,15]
// 输出：[[1,3]]
// 示例 3：

// 输入：arr = [3,8,-10,23,19,-4,-14,27]
// 输出：[[-14,-10],[19,23],[23,27]]
//  

// 提示：

// 2 <= arr.length <= 10^5
// -10^6 <= arr[i] <= 10^6
// 通过次数13,276提交次数19,555

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-absolute-difference
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 两个相邻的元素，绝对差最小
var minimumAbsDifference = function (arr) {
    let len = arr.length;
    let res = [];
    arr.sort((a, b) => a - b);
    // console.log(arr);
    let min = Math.abs(arr[0] - arr[1]);
    for (let i = 0; i < len - 1; i++) {
        let current = Math.abs(arr[i + 1] - arr[i]);
        if (min > current) {
            res = [];
            min = current;
            res.push([arr[i], arr[i + 1]])
        } else if (min === current) {
            res.push([arr[i], arr[i + 1]])
        }
    }
    return res;
};
// console.log(minimumAbsDifference([4, 2, 1, 3]));
// console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
// console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
//#endregion
//#endregion
// 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

// 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

//  

// 示例 1：

// 输入：nums = [2,5,1,3,4,7], n = 3
// 输出：[2,3,5,4,1,7] 
// 解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]
// 示例 2：

// 输入：nums = [1,2,3,4,4,3,2,1], n = 4
// 输出：[1,4,2,3,3,2,4,1]
// 示例 3：

// 输入：nums = [1,1,2,2], n = 2
// 输出：[1,2,1,2]
//  

// 提示：

// 1 <= n <= 500
// nums.length == 2n
// 1 <= nums[i] <= 10^3
// 通过次数37,063提交次数43,591

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shuffle-the-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var shuffle = function (nums, n) {
    let len = nums.length / 2;
    if (n < 2) {
        return nums;
    }
    let nums_x = nums.slice(0, n);
    let numx_y = nums.slice(n);
    let res = [];
    for (let i = 0; i < len; i++) {
        res.push(nums_x[i]);
        res.push(numx_y[i]);
    }
    console.log(res);
    return res;
};
// shuffle([2, 5, 1, 3, 4, 7], 3);
// shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
// shuffle([1, 1, 2, 2], 2);
//#endregion
//#endregion
//#endregion
// 爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。

// 因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

// 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

// 如果有多个答案，你可以返回其中任何一个。保证答案存在。

//  

// 示例 1：

// 输入：A = [1,1], B = [2,2]
// 输出：[1,2]
// 示例 2：

// 输入：A = [1,2], B = [2,3]
// 输出：[1,2]
// 示例 3：

// 输入：A = [2], B = [1,3]
// 输出：[2,3]
// 示例 4：

// 输入：A = [1,2,5], B = [2,4]
// 输出：[5,4]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/fair-candy-swap
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 一定有解答
//两数之差为 A，B总和差的一半，则为答案
var fairCandySwap = function (A, B) {
    let sum_A = A.reduce((current, value, key) => (current + value), 0);
    let sum_B = B.reduce((current, value, key) => (current + value), 0);
    let num = sum_A - sum_B;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] - B[j] === num / 2) {
                return [A[i], B[j]];
            }
        }
    }
};
// console.log(fairCandySwap([1, 1], [2, 2]))
// console.log(fairCandySwap([1, 2], [2, 3]))
// console.log(fairCandySwap([2], [1, 3]))
// console.log(fairCandySwap([1, 2, 5], [2, 4]))
//#endregion
//#endregion
// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

//  

// 进阶：

// 你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
//  

// 示例 1：

// 输入：nums = [3,0,1]
// 输出：2
// 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
// 示例 2：

// 输入：nums = [0,1]
// 输出：2
// 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
// 示例 3：

// 输入：nums = [9,6,4,2,3,5,7,0,1]
// 输出：8
// 解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
// 示例 4：

// 输入：nums = [0]
// 输出：1
// 解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
//  

// 提示：

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// nums 中的所有数字都 独一无二

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/missing-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// var missingNumber = function (nums) {
//     let len = nums.length;
//     let mySet = new Set();
//     for (let i = 0; i < len; i++) {
//         mySet.add(nums[i]);
//     }
//     for (let i = 0; i < len; i++) {
//         if (!mySet.has(i)) {
//             return i;
//         }
//     }
//     return len;
// };
var missingNumber = function (nums) {
    //0-n的和
    let len = nums.length;
    let sum = (0 + len) / 2 * (len + 1);
    let num = 0;
    for (let i = 0; i < len; i++) {
        num += nums[i];
    }
    return sum - num;
};
// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// console.log(missingNumber([0]));
//#endregion
//#endregion
// 给出一个整数数组 A 和一个查询数组 queries。

// 对于第 i 次查询，有 val = queries[i][0], index = queries[i][1]，我们会把 val 加到 A[index] 上。然后，第 i 次查询的答案是 A 中偶数值的和。

// （此处给定的 index = queries[i][1] 是从 0 开始的索引，每次查询都会永久修改数组 A。）

// 返回所有查询的答案。你的答案应当以数组 answer 给出，answer[i] 为第 i 次查询的答案。

//  

// 示例：

// 输入：A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
// 输出：[8,6,2,4]
// 解释：
// 开始时，数组为 [1,2,3,4]。
// 将 1 加到 A[0] 上之后，数组为 [2,2,3,4]，偶数值之和为 2 + 2 + 4 = 8。
// 将 -3 加到 A[1] 上之后，数组为 [2,-1,3,4]，偶数值之和为 2 + 4 = 6。
// 将 -4 加到 A[0] 上之后，数组为 [-2,-1,3,4]，偶数值之和为 -2 + 4 = 2。
// 将 2 加到 A[3] 上之后，数组为 [-2,-1,3,6]，偶数值之和为 -2 + 6 = 4。
//  

// 提示：

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// 1 <= queries.length <= 10000
// -10000 <= queries[i][0] <= 10000
// 0 <= queries[i][1] < A.length

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sum-of-even-numbers-after-queries
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var sumEvenAfterQueries = function (A, queries) {
    let answer = [];
    for (let i = 0; i < queries.length; i++) {
        A[queries[i][1]] += queries[i][0];
        answer[i] = A.filter((val) => (val % 2 === 0)).reduce((current, val) => (current + val), 0);
    }
    return answer;
};
// console.log(sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0]]))

// 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。

// 请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。

// 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。

// 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。

//  

// 示例 1：

// 输入：mat = 
// [[1, 1, 0, 0, 0],
// [1, 1, 1, 1, 0],
// [1, 0, 0, 0, 0],
// [1, 1, 0, 0, 0],
// [1, 1, 1, 1, 1]],
// k = 3
// 输出：[2,0,3]
// 解释：
// 每行中的军人数目：
// 行 0 -> 2 
// 行 1 -> 4 
// 行 2 -> 1 
// 行 3 -> 2 
// 行 4 -> 5 
// 从最弱到最强对这些行排序后得到 [2,0,3,1,4]
// 示例 2：

// 输入：mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// 输出：[0,2]
// 解释： 
// 每行中的军人数目：
// 行 0 -> 1 
// 行 1 -> 4 
// 行 2 -> 1 
// 行 3 -> 1 
// 从最弱到最强对这些行排序后得到 [0,2,3,1]
//  

// 提示：

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var kWeakestRows = function (mat, k) {
    let m = mat.length;
    let n = mat[0].length;
    let res = [];
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            // console.log(mat[j][i], !res.includes(i))
            if (mat[j][i] === 1 && !res.includes(j)) {
                // console.log(j)
                res.unshift(j);
            }
        }
    }
    // console.log(res);
    for (let i = m - 1; i >= 0; i--) {
        if (!res.includes(i)) {
            res.unshift(i);
        }
    }
    // console.log(res)
    return res.slice(0, k);
};
// console.log(kWeakestRows(
//     [[1, 0, 0, 0],
//     [1, 1, 1, 1],
//     [1, 0, 0, 0],
//     [1, 0, 0, 0]], 2))
// console.log(kWeakestRows(
//     [[1, 1, 0, 0, 0],
//     [1, 1, 1, 1, 0],
//     [1, 0, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 1, 1, 1]], 3))
//#endregion
//#endregion

//数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？

// 注意：本题相对书上原题稍作改动

// 示例 1：

// 输入：[3, 0, 1]
// 输出：2


// 示例 2：

// 输入：[9, 6, 4, 2, 3, 5, 7, 0, 1]
// 输出：8

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/missing-number-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var missingNumber = function (nums) {
    let n = nums.length;
    let sum = nums.reduce((current, val) => (current + val), 0);
    let sumgs = (0 + n) * (n + 1) / 2; // 高斯定理求和
    return sumgs - sum;
};
// console.log(missingNumber([3, 0, 1]))
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
//#endregion
//#endregion

//给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。

// 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。

//  

// 示例 1：

// 输入：salary = [4000,3000,1000,2000]
// 输出：2500.00000
// 解释：最低工资和最高工资分别是 1000 和 4000 。
// 去掉最低工资和最高工资以后的平均工资是 (2000+3000)/2= 2500
// 示例 2：

// 输入：salary = [1000,2000,3000]
// 输出：2000.00000
// 解释：最低工资和最高工资分别是 1000 和 3000 。
// 去掉最低工资和最高工资以后的平均工资是 (2000)/1= 2000
// 示例 3：

// 输入：salary = [6000,5000,4000,3000,2000,1000]
// 输出：3500.00000
// 示例 4：

// 输入：salary = [8000,9000,2000,3000,6000,1000]
// 输出：4750.00000
//  

// 提示：

// 3 <= salary.length <= 100
// 10^3 <= salary[i] <= 10^6
// salary[i] 是唯一的。
// 与真实值误差在 10^-5 以内的结果都将视为正确答案。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var average = function (salary) {
    let len = salary.length;
    let max = salary[0];
    let min = salary[0];
    let res = 0;
    for (let i = 0; i < len; i++) {
        if (salary[i] > max) {
            max = salary[i]
        }
        if (salary[i] < min) {
            min = salary[i]
        }
        res += salary[i];
    }
    return (res - max - min) / (len - 2);
};
// console.log(average([1000, 2000, 3000]))
// console.log(average([4000, 3000, 1000, 2000]))
// console.log(average([6000, 5000, 4000, 3000, 2000, 1000]))
// console.log(average([8000, 9000, 2000, 3000, 6000, 1000]))
//#endregion
//#endregion
// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 3
// 输出: [1,3,3,1]
// 进阶：

// 你可以优化你的算法到 O(k) 空间复杂度吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/pascals-triangle-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//#endregion
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1, 1];
    }
    let pre = [1, 1];
    for (let i = 2; i <= rowIndex; i++) {
        pre = common(pre);
    }
    return pre;
};

var common = function (pre) {
    let current = [];
    current[0] = 1;
    current[pre.length] = 1;
    for (let i = 0; i < pre.length - 1; i++) {
        current[i + 1] = pre[i] + pre[i + 1]
    }
    return current;
}
// console.log(getRow(4))
// console.log(getRow(3))
// console.log(getRow(5))
// console.log(getRow(20))
//#endregion
//#endregion
//#endregion
// 给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。

//  

// 示例 1：



// 输入：nums = [1,0,0,0,1,0,0,1], k = 2
// 输出：true
// 解释：每个 1 都至少相隔 2 个元素。
// 示例 2：



// 输入：nums = [1,0,0,1,0,1], k = 2
// 输出：false
// 解释：第二个 1 和第三个 1 之间只隔了 1 个元素。
// 示例 3：

// 输入：nums = [1,1,1,1,1], k = 0
// 输出：true
// 示例 4：

// 输入：nums = [0,1,0,1], k = 1
// 输出：true
//  

// 提示：

// 1 <= nums.length <= 10^5
// 0 <= k <= nums.length
// nums[i] 的值为 0 或 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/check-if-all-1s-are-at-least-length-k-places-away
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var kLengthApart = function (nums, k) {
    let stepArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1 && stepArr.length < 2) {
            stepArr.push(i);
        } else if (nums[i] !== 0) {
            stepArr[0] = stepArr[1];
            stepArr[1] = i;
        }
        //console.log(stepArr)
        if (stepArr.length === 2 && (stepArr[1] - stepArr[0] < k + 1)) {
            return false;
        }
    }
    return true;
};
// console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
// console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
// console.log(kLengthApart([1, 1, 1, 1, 1], 0));
// console.log(kLengthApart([0, 1, 0, 1], 1));
//#endregion
//#endregion
// 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为[1, 2, 3, 1]。

// 给定非负整数 X 的数组形式 A，返回整数 X + K 的数组形式。



// 示例 1：

// 输入：A = [1, 2, 0, 0], K = 34
// 输出：[1, 2, 3, 4]
// 解释：1200 + 34 = 1234
// 示例 2：

// 输入：A = [2, 7, 4], K = 181
// 输出：[4, 5, 5]
// 解释：274 + 181 = 455
// 示例 3：

// 输入：A = [2, 1, 5], K = 806
// 输出：[1, 0, 2, 1]
// 解释：215 + 806 = 1021
// 示例 4：

// 输入：A = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], K = 1
// 输出：[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 解释：9999999999 + 1 = 10000000000


// 提示：

// 1 <= A.length <= 10000
// 0 <= A[i] <= 9
// 0 <= K <= 10000
// 如果 A.length > 1，那么 A[0] != 0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var addToArrayForm = function (A, K) {
    let len = A.length;
    if (A.length < (K + '').length) {
        for (let i = 0; i < (K + '').length - len; i++) {
            A.unshift(0);
        }
    }
    //console.log(A)
    let lenA = A.length;
    let lenK = (K + '').length;
    let add = 0;//是否进位
    for (let i = lenA - 1; i >= 0; i--) {
        if (lenK >= 1) {
            let sum = A[i] + Number((K + '')[lenK - 1]) + add;
            if (sum >= 10) {
                A[i] = sum % 10;
                add = 1;
            } else {
                A[i] = sum;
                add = 0;
            }
            lenK--;
        } else if (add === 0) {
            return A;
        } else {
            let sum = A[i] + add;
            if (sum >= 10) {
                A[i] = sum % 10;
                add = 1;
            } else {
                A[i] = sum;
                return A;
            }
        }
    }
    add === 1 && A.unshift(1);
    return A;
};
// console.log(addToArrayForm([0], 10000))
// console.log(addToArrayForm([0], 23))
// console.log(addToArrayForm([1, 2, 0, 0], 34))
// console.log(addToArrayForm([2, 7, 4], 181))
// console.log(addToArrayForm([2, 1, 5], 806))
// console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1))
// console.log(addToArrayForm([3, 5, 8, 6, 9, 7, 8, 3, 8, 5, 4, 1, 6, 7, 4, 1, 0, 1, 7, 7, 1, 5, 3, 2, 9, 3, 4, 1, 0, 5, 8, 6, 9, 9, 4, 8, 7, 0, 2, 8, 2, 4, 7, 0, 4, 4, 3, 7, 2, 2], 142))
//#endregion
//#endregion

// 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。

// 环线上的公交车都可以按顺时针和逆时针的方向行驶。

// 返回乘客从出发点 start 到目的地 destination 之间的最短距离。

// 输入：distance = [1,2,3,4], start = 0, destination = 1
// 输出：1
// 解释：公交站 0 和 1 之间的距离是 1 或 9，最小值是 1。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/distance-between-bus-stops
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var distanceBetweenBusStops = function (distance, start, destination) {
    //顺时针的值等于总和减去逆时针的值
    let res = 0;
    let max = start > destination ? start : destination;
    let min = start > destination ? destination : start;
    //顺时针距离
    for (let i = min; i < max; i++) {
        res += distance[i];
    }
    let sum = distance.reduce((current, val, index) => (current + val), 0);
    return res = (sum - res) > res ? res : sum - res;

};
// console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1))
// console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2))
// console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3))
// console.log(distanceBetweenBusStops([1, 2, 3, 4], 1, 3))
// console.log(distanceBetweenBusStops([1, 2, 3, 4], 2, 3))
// // console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2))
//#endregion
//#endregion
// 给定两个字符串 s1 和 s2，请编写一个程序，确定其���一个字符串的字符重新排列后，能否变成另一个字符串。

// 示例 1：

// 输入: s1 = "abc", s2 = "bca"
// 输出: true 
// 示例 2：

// 输入: s1 = "abc", s2 = "bad"
// 输出: false
// 说明：

// 0 <= len(s1) <= 100
// 0 <= len(s2) <= 100
// 通过次数35,427提交次数54,111

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/check-permutation-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var CheckPermutation = function (s1, s2) {
    let s1Len = s1.length;
    let s2Len = s2.length;
    let s1Map = {};
    let s2Map = {};
    if (s1Len !== s2Len) {
        return false;
    }
    for (let i = 0; i < s1Len; i++) {
        if (!s1Map[s1[i]]) {
            s1Map[s1[i]] = 1;
        } else {
            s1Map[s1[i]] += 1;
        }
    }
    for (let i = 0; i < s2Len; i++) {
        if (!s2Map[s2[i]]) {
            s2Map[s2[i]] = 1;
        } else {
            s2Map[s2[i]] += 1;
        }
    }
    for (var key in s1Map) {
        if (s1Map[key] !== s2Map[key]) {
            return false;
        }
    }
    return true;
};
// console.log(CheckPermutation('abc', 'bca'));
// console.log(CheckPermutation('abc', 'bad'));
//#endregion
//#endregion
// 给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。

// 商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。

// 请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。

//  

// 示例 1：

// 输入：prices = [8,4,6,2,3]
// 输出：[4,2,4,2,3]
// 解释：
// 商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
// 商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
// 商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
// 商品 3 和 4 都没有折扣。
// 示例 2：

// 输入：prices = [1,2,3,4,5]
// 输出：[1,2,3,4,5]
// 解释：在这个例子中，所有商品都没有折扣。
// 示例 3：

// 输入：prices = [10,1,1,6]
// 输出：[9,0,1,6]
//  

// 提示：

// 1 <= prices.length <= 500
// 1 <= prices[i] <= 10^3

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/final-prices-with-a-special-discount-in-a-shop
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//#endregion
//#endregion
//#endregion
var finalPrices = function (prices) {
    let len = prices.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        let con = true;
        for (let j = i + 1; j < len; j++) {
            if (prices[i] >= prices[j]) {
                con = false;
                res.push(prices[i] - prices[j]);
                break;
            }
        }
        con && res.push(prices[i]);
    }
    return res;
};
//单调栈方法
//弹出哪一个，就交换哪一个的值
var finalPrices = function (prices) {
    let stack = [0];//单调递增栈
    let len = prices.length;
    for (let i = 1; i < len; i++) {
        while (stack.length >= 1 && prices[i] <= prices[stack[stack.length - 1]]) {
            prices[stack[stack.length - 1]] = prices[stack[stack.length - 1]] - prices[i];
            stack.pop();
        }
        stack.push(i);
        //入栈，出栈
    }
    return prices;
};
// console.log(finalPrices([8, 4, 6, 2, 3]));
// console.log(finalPrices([1, 2, 3, 4, 5]));
// console.log(finalPrices([1, 2, 3, 4, 2]));
// console.log(finalPrices([10, 1, 1, 6]));
// 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。

//  

// 示例 1：

// 输入：n = 5
// 输出：[-7,-1,1,3,4]
// 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
// 示例 2：

// 输入：n = 3
// 输出：[-1,0,1]
// 示例 3：

// 输入：n = 1
// 输出：[0]
//  

// 提示：

// 1 <= n <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var sumZero = function (n) {
    let res = [];
    if (n === 1) {
        return [0]
    } else if (n % 2 === 0) {//长度为偶数
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                res[i] = i + 1;
            } else {
                res[i] = -(i);
            }
        }
    } else {//长度为奇数
        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                res[i] = i;
            } else {
                res[i] = -(i + 1);
            }
        }
    }
    return res;
};
// console.log(sumZero(5), sumZero(3), sumZero(1))
// 给你一个整数 n 和一个整数数组 rounds 。有一条圆形赛道由 n 个扇区组成，扇区编号从 1 到 n 。现将在这条赛道上举办一场马拉松比赛，该马拉松全程由 m 个阶段组成。其中，第 i 个阶段将会从扇区 rounds[i - 1] 开始，到扇区 rounds[i] 结束。举例来说，第 1 阶段从 rounds[0] 开始，到 rounds[1] 结束。

// 请你以数组形式返回经过次数最多的那几个扇区，按扇区编号 升序 排列。

// 注意，赛道按扇区编号升序逆时针形成一个圆（请参见第一个示例）。

//  

// 示例 1：



// 输入：n = 4, rounds = [1,3,1,2]
// 输出：[1,2]
// 解释：本场马拉松比赛从扇区 1 开始。经过各个扇区的次序如下所示：
// 1 --> 2 --> 3（阶段 1 结束）--> 4 --> 1（阶段 2 结束）--> 2（阶段 3 结束，即本场马拉松结束）
// 其中，扇区 1 和 2 都经过了两次，它们是经过次数最多的两个扇区。扇区 3 和 4 都只经过了一次。
// 示例 2：

// 输入：n = 2, rounds = [2,1,2,1,2,1,2,1,2]
// 输出：[2]
// 示例 3：

// 输入：n = 7, rounds = [1,3,5,7]
// 输出：[1,2,3,4,5,6,7]
//  

// 提示：

// 2 <= n <= 100
// 1 <= m <= 100
// rounds.length == m + 1
// 1 <= rounds[i] <= n
// rounds[i] != rounds[i + 1] ，其中 0 <= i < m

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/most-visited-sector-in-a-circular-track
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//根据最后一个数
//如果等于rounds[0]，则返回rounds[0]
//如果大于rounds[0]，则返回rounds[0]到rounds[len]
//如果小于rounds[0]，则返回1至rounds[len]+rounds[0]到n
var mostVisited = function (n, rounds) {
    let len = rounds.length - 1;
    let res = [];
    if (rounds[len] === rounds[0]) {
        return [rounds[0]]
    } else if (rounds[len] > rounds[0]) {
        for (let i = rounds[0]; i <= rounds[len]; i++) {
            res.push(i);
        }
    } else {
        for (let i = 1; i <= rounds[len]; i++) {
            res.push(i);
        }

        for (let i = rounds[0]; i <= n; i++) {
            res.push(i);
        }
    }
    return res;
};
// console.log(mostVisited(4, [1, 3, 1, 2]), mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]), mostVisited(7, [1, 3, 5, 7]), mostVisited(3, [3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 3, 1]));
// //console.log(mostVisited(3, [3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 3, 1]))
// console.log(mostVisited(3, [2, 1, 2, 1, 3, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 3, 2, 3, 2, 1, 2, 3, 1, 3]))
// console.log(mostVisited(3, [2, 1, 2, 1, 3, 2, 3, 1, 2, 3, 1, 3, 1, 2, 3, 1, 3, 2, 3, 2, 1, 2, 3, 1, 3]))//[2,3]
// console.log(mostVisited(5, [3, 2]))//[1,2,3,4,5]
//#endregion
//#endregion
// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

// 你可以按任意顺序返回答案。

//  

// 示例 1：

// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：

// 输入：["cool","lock","cook"]
// 输出：["c","o"]
//  

// 提示：

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] 是小写字母

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-common-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var commonChars = function (A) {
    let len = A.length;
    if (len === 1) {
        return [...A[0]];
    }
    let map = A[0];
    for (let i = 1; i < len; i++) {
        let middle = [];
        for (let j = 0; j < map.length; j++) {
            if (A[i].indexOf(map[j]) !== -1) {
                middle.push(map[j]);
                A[i] = A[i].replace(map[j], '');//删除，防止重复遍历
            }
        }
        map = middle;
    }
    return map;
};
// console.log(commonChars(["bella"]))
// console.log(commonChars(["bella", "label", "roller"]));
// console.log(commonChars(["bella", "label",]));
// console.log(commonChars(["cool", "lock", "cook"]));
// console.log(commonChars(["daaccccd", "bacbcbcb"]));
// console.log(commonChars(["daaccccd", "adacbdda", "abddbaba", "bacbcbcb", "bdaaaddc", "cdadacba", "bacbdcda", "bacdaacd"]));

//#endregion
// 给定一个整数数组，判断是否存在重复元素。

// 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

//  

// 示例 1:

// 输入: [1,2,3,1]
// 输出: true
// 示例 2:

// 输入: [1,2,3,4]
// 输出: false
// 示例 3:

// 输入: [1,1,1,3,3,4,3,2,4,2]
// 输出: true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/contains-duplicate
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var containsDuplicate = function (nums) {
    let len = nums.length;
    let map = {};
    if (len === 1) {
        return false;
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) {
                return true;
            } else {
                map[nums[i]] = true;
            }
        }
    }
    return false;
};
// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
//#endregion
// 给你两个长度相同的整数数组 target 和 arr 。

// 每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。你可以执行此过程任意次。

// 如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。

//  

// 示例 1：

// 输入：target = [1,2,3,4], arr = [2,4,1,3]
// 输出：true
// 解释：你可以按照如下步骤使 arr 变成 target：
// 1- 翻转子数组 [2,4,1] ，arr 变成 [1,4,2,3]
// 2- 翻转子数组 [4,2] ，arr 变成 [1,2,4,3]
// 3- 翻转子数组 [4,3] ，arr 变成 [1,2,3,4]
// 上述方法并不是唯一的，还存在多种将 arr 变成 target 的方法。
// 示例 2：

// 输入：target = [7], arr = [7]
// 输出：true
// 解释：arr 不需要做任何翻转已经与 target 相等。
// 示例 3：

// 输入：target = [1,12], arr = [12,1]
// 输出：true
// 示例 4：

// 输入：target = [3,7,9], arr = [3,7,11]
// 输出：false
// 解释：arr 没有数字 9 ，所以无论如何也无法变成 target 。
// 示例 5：

// 输入：target = [1,1,1,1,1], arr = [1,1,1,1,1]
// 输出：true
//  

// 提示：

// target.length == arr.length
// 1 <= target.length <= 1000
// 1 <= target[i] <= 1000
// 1 <= arr[i] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/make-two-arrays-equal-by-reversing-sub-arrays
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
//#endregion
//任意一个数，都可以反转到对应的位置
//两个数组数字完全相同，则返回ture，否则返回false
var canBeEqual = function (target, arr) {
    for (let i = 0; i < target.length; i++) {
        if (arr.indexOf(target[i]) !== -1) {
            arr.splice(arr.indexOf(target[i]), 1);
        } else {
            return false;
        }
    }
    return true
};
// console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]))
// console.log(canBeEqual([1], [1]))
// console.log(canBeEqual([1, 12], [12, 1]))
// console.log(canBeEqual([3, 7, 9], [3, 7, 11]))
// console.log(canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]))

//#endregion
// 数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

// 每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。

// 请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。



// 示例 1：

// 输入：cost = [10, 15, 20]
// 输出：15
// 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
//  示例 2：

// 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// 输出：6
// 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。


// 提示：

// cost 的长度范围是 [2, 1000]。
// cost[i] 将会是一个整型数据，范围为 [0, 999] 。

// 最后一个数也要走
// 递归，出口，通用表达式
//走完最后一步的最优解有两种：
//1:minCost(i-1),2:minCost(i-2)+cost(i);
//通用表达式（任何一步的最小值通用表达式）
//math.min(minCost[i-1]+cost[i],minCost[i-2]+cost[i-1])
//minCost[i-2]=math.min(minCost[i-3]+cost[i-2],minCost[i-4]+cost[i-3])
//第0阶台阶：0
//第1阶台阶: min(cost[0], cost[1])
//起始阶的两种
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    let prev = 0, curr = 0;
    for (let i = 2; i <= n; i++) {
        let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
        prev = curr;
        curr = next;
    }
    return curr;
};
//#endregion
//#endregion
// 找出数组中重复的数字。


// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
//  

// 限制：

// 2 <= n <= 100000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var findRepeatNumber = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            return nums[i]
        }
    }
};
// console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
//#endregion
//#endregion
// 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
// 示例 1：

// 输入：nums = [12,345,2,6,7896]
// 输出：2
// 解释：
// 12 是 2 位数字（位数为偶数） 
// 345 是 3 位数字（位数为奇数）  
// 2 是 1 位数字（位数为奇数） 
// 6 是 1 位数字 位数为奇数） 
// 7896 是 4 位数字（位数为偶数）  
// 因此只有 12 和 7896 是位数为偶数的数字
// 示例 2：

// 输入：nums = [555,901,482,1771]
// 输出：1 
// 解释： 
// 只有 1771 是位数为偶数的数字。
//  

// 提示：

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var findNumbers = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res += (nums[i].toString().length % 2 === 0 ? 1 : 0)
    }
    return res;
};
// console.log(findNumbers([12, 345, 2, 6, 7896]), findNumbers([555, 901, 482, 1771]))
//#endregion
//#endregion
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

//  

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
//  

// 限制：

// 0 <= matrix.length <= 100
// 0 <= matrix[i].length <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 根据下标查找
// 按照脑中思路写代码
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }
    let matrixflat = matrix.flat(true);
    let startRow = 0;//开始的行
    let endRow = matrix.length - 1;//结束的行
    let startCol = 0;//开始的列
    let endCol = matrix[0].length - 1;//结束的列
    let isRow = true;//横向计数
    let isIncremental = true;//递增
    let res = [];
    while (res.length < matrixflat.length) {
        if (isRow) {
            if (isIncremental) {//上
                for (let i = startCol; i <= endCol; i++) {
                    res.push(matrix[startRow][i])
                }
                isRow = false;
                startRow += 1;
            } else {//下
                for (let i = endCol; i >= startCol; i--) {
                    res.push(matrix[endRow][i])
                }
                isRow = false;
                endRow -= 1;
            }
        } else {
            if (isIncremental) {//右
                for (let i = startRow; i <= endRow; i++) {
                    res.push(matrix[i][endCol]);
                }
                isRow = true;
                endCol -= 1;
                isIncremental = false;
            } else {//左
                for (let i = endRow; i >= startRow; i--) {
                    res.push(matrix[i][startCol]);
                }
                isRow = true;
                startCol += 1;
                isIncremental = true;
            }
        }
    }
    return res;
};
// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]), spiralOrder([[1, 2, 3]]));

//#endregion
//#endregion
//给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 输入: 5
// 输出:
// [
//      [1],0
//     [1,1],1
//    [1,2,1],2
//   [1,3,3,1],3
//  [1,4,6,4,1],4
// ]
var generate = function (numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            res = [[1]];
        } else {
            let arr = [];
            arr[0] = 1;//第一项为1
            arr[i] = 1;//最后一项为1
            for (let j = 1; j < i; j++) {
                arr[j] = res[i - 1][j - 1] + res[[i - 1]][j]
            }
            res.push(arr);
        }
    }
    return res;
};
// console.log(generate(0), generate(1), generate(2), generate(3), generate(6))
//#endregion
// 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。

// 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
// 输入：mat = [[1,2,3],
//             [4,5,6],
//             [7,8,9]]
// 输出：25
// 解释：对角线的和为：1 + 5 + 9 + 3 + 7 = 25
// 请注意，元素 mat[1][1] = 5 只会被计算一次。
// 示例  2：

// 输入：mat = [[1,1,1,1],
//             [1,1,1,1],
//             [1,1,1,1],
//             [1,1,1,1]]
// 输出：8
// 示例 3：

// 输入：mat = [[5]]
// 输出：5
//  

// 提示：

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/matrix-diagonal-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 正方形
var diagonalSum = function (mat) {
    let len = mat.length;
    let res = 0;
    if (len === 0) {
        return 0;
    } else if (len === 1) {
        return mat[0][0];
    } else {
        let start = 0;
        let end = len - 1;
        for (let i = 0; i < len; i++) {
            if (start !== end) {
                res += mat[i][start] + mat[i][end];
            } else {
                res += mat[i][start];
            }
            start++;
            end--;
        }
    }
    return res;
};
// console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]), diagonalSum([]), diagonalSum([[5]]))
// 
// 
// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

// 示例 1：

// 输入: s = "leetcode"
// 输出: false
// 示例 2：

// 输入: s = "abc"
// 输出: true
// 限制：

// 0 <= len(s) <= 100
// 如果你不使用额外的数据结构，会很加分。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/is-unique-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var isUnique = function (astr) {
    for (let i = 1; i < astr.length; i++) {
        if (astr.slice(0, i).includes(astr[i])) {
            return false;
        }
    }
    return true;
};
// console.log(isUnique('leetcode'), isUnique('abc'))
//#endregion
//#endregion
// 给你两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。

// 已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。

// 请返回在查询时间 queryTime 时正在做作业的学生人数。形式上，返回能够使 queryTime 处于区间[startTime[i], endTime[i]]（含）的学生人数。



// 示例 1：

// 输入：startTime = [1, 2, 3], endTime = [3, 2, 7], queryTime = 4
// 输出：1
// 解释：一共有 3 名学生。
// 第一名学生在时间 1 开始写作业，并于时间 3 完成作业，在时间 4 没有处于做作业的状态。
// 第二名学生在时间 2 开始写作业，并于时间 2 完成作业，在时间 4 没有处于做作业的状态。
// 第三名学生在时间 3 开始写作业，预计于时间 7 完成作业，这是是唯一一名在时间 4 时正在做作业的学生。
// 示例 2：

// 输入：startTime = [4], endTime = [4], queryTime = 4
// 输出：1
// 解释：在查询时间只有一名学生在做作业。
// 示例 3：

// 输入：startTime = [4], endTime = [4], queryTime = 5
// 输出：0
// 示例 4：

// 输入：startTime = [1, 1, 1, 1], endTime = [1, 3, 2, 4], queryTime = 7
// 输出：0
// 示例 5：

// 输入：startTime = [9, 8, 7, 6, 5, 4, 3, 2, 1], endTime = [10, 10, 10, 10, 10, 10, 10, 10, 10], queryTime = 5
// 输出：5


// 提示：

// startTime.length == endTime.length
// 1 <= startTime.length <= 100
// 1 <= startTime[i] <= endTime[i] <= 1000
// 1 <= queryTime <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-students-doing-homework-at-a-given-time
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 大于等于，小于等于
var busyStudent = function (startTime, endTime, queryTime) {
    let res = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            res += 1;
        }
    }
    return res;
};
// console.log(busyStudent([1, 2, 3], [3, 2, 7], 4), busyStudent([4], [4], 4), busyStudent([4], [4], 5), busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5))

// 在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。

// 给你一个整数数组 arr，请你从中找出并返回一个幸运数。

// 如果数组中存在多个幸运数，只需返回 最大 的那个。
// 如果数组中不含幸运数，则返回 - 1 。


// 示例 1：

// 输入：arr = [2, 2, 3, 4]
// 输出：2
// 解释：数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2 。
// 示例 2：

// 输入：arr = [1, 2, 2, 3, 3, 3]
// 输出：3
// 解释：1、2 以及 3 都是幸运数，只需要返回其中最大的 3 。
// 示例 3：

// 输入：arr = [2, 2, 2, 3, 3]
// 输出：-1
// 解释：数组中不存在幸运数。
// 示例 4：

// 输入：arr = [5]
// 输出：-1
// 示例 5：

// 输入：arr = [7, 7, 7, 7, 7, 7, 7]
// 输出：7


// 提示：

// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-lucky-integer-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 负数肯定不行
var findLucky = function (arr) {
    let map = {};
    let res = -1;
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] ? map[arr[i]] += 1 : map[arr[i]] = 1;
    }
    for (let key in map) {
        if (Number(key) === map[key] && Number(key) > res) {
            res = Number(key);
        }
    }
    return res;
};
// console.log(findLucky([2, 2, 3, 4]), findLucky([1, 2, 2, 3, 3, 3]), findLucky([2, 2, 2, 3, 3]), findLucky([5]), findLucky([7, 7, 7, 7, 7, 7, 7]))

//#endregion
// 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

// 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。



// 示例 1：

// 输入：candies = [2, 3, 5, 1, 3], extraCandies = 3
// 输出：[true, true, true, false, true]
// 解释：
// 孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
// 孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
// 孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
// 孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
// 孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
// 示例 2：

// 输入：candies = [4, 2, 1, 1, 2], extraCandies = 1
// 输出：[true, false, false, false, false]
// 解释：只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。
// 示例 3：

// 输入：candies = [12, 1, 12], extraCandies = 10
// 输出：[true, false, true]


// 提示：

// 2 <= candies.length <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 1 找出最大的数
// 2 加上糖果遍历，如果大于最大的数，则ture，否则，false
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    let res = [];
    for (let i = 0; i < candies.length; i++) {
        candies[i] + extraCandies >= max ? res.push(true) : res.push(false);
    }
    return res;
};
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3), kidsWithCandies([4, 2, 1, 1, 2], 1), kidsWithCandies([12, 1, 12], 10))

// 有 n 个(id, value) 对，其中 id 是 1 到 n 之间的一个整数，value 是一个字符串。不存在 id 相同的两个(id, value) 对。

// 设计一个流，以 任意 顺序获取 n 个(id, value) 对，并在多次调用时 按 id 递增的顺序 返回一些值。

// 实现 OrderedStream 类：

// OrderedStream(int n) 构造一个能接收 n 个值的流，并将当前指针 ptr 设为 1 。
// String[] insert(int id, String value) 向流中存储新的(id, value) 对。存储后：
// 如果流存储有 id = ptr 的(id, value) 对，则找出从 id = ptr 开始的 最长 id 连续递增序列 ，并 按顺序 返回与这些 id 关联的值的列表。然后，将 ptr 更新为最后那个  id + 1 。
// 否则，返回一个空列表。



// 示例：



// 输入
// ["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
// [[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
// 输出
// [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

// 解释
// OrderedStream os = new OrderedStream(5);
// os.insert(3, "ccccc"); // 插入 (3, "ccccc")，返回 []
// os.insert(1, "aaaaa"); // 插入 (1, "aaaaa")，返回 ["aaaaa"]
// os.insert(2, "bbbbb"); // 插入 (2, "bbbbb")，返回 ["bbbbb", "ccccc"]
// os.insert(5, "eeeee"); // 插入 (5, "eeeee")，返回 []
// os.insert(4, "ddddd"); // 插入 (4, "ddddd")，返回 ["ddddd", "eeeee"]


// 提示：

// 1 <= n <= 1000
// 1 <= id <= n
// value.length == 5
// value 仅由小写字母组成
// 每次调用 insert 都会使用一个唯一的 id
// 恰好调用 n 次 insert

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/design-an-ordered-stream
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var OrderedStream = function (n) {

};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {

};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */


// 给定一个整数数组，找出总和最大的连续数列，并返回总和。

// 示例：

// 输入：[-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出： 6
// 解释： 连续子数组[4, -1, 2, 1] 的和最大，为 6。
// 进阶：

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

// 通过次数24, 709提交次数41, 584

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/contiguous-sequence-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// + 负数 越来越小 (连续到总和为负数的时候，这个连续数列可以抛弃,不能以总和为负数的连续数列作为起点)
// nums全为负数或者0,返回最小的数字
var maxSubArray = function (nums) {
    if (Math.max(...nums) < 0) {
        return Math.max(...nums);
    }
    let maxArr = [];//最大连续数数组
    let maxSum = 0;//总和
    let startNum = 0;//连续数的起点
    let startArr = [];//连续数组
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + startNum < 0) {
            startArr = [];
            startNum = 0;
        } else {
            startArr.push(nums[i]);
            startNum += nums[i];
            //console.log(startNum, maxSum, startArr, maxArr,)
            if (startNum >= maxSum) {
                maxSum = startNum;
                maxArr = JSON.parse(JSON.stringify(startArr));
            }
        }
    }
    return maxSum;
};
//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), maxSubArray([100, -99]), maxSubArray([100, -99, 3, -5, 7]), maxSubArray([-2, -1, -5, -7, 0]), maxSubArray([-2, -1,]), maxSubArray([-1]))

// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。



// 示例 1：

// 输入：s = "aab"
// 输出：[["a", "a", "b"], ["aa", "b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]


// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-partitioning
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var partition = function (s) {

};

// 学校的自助午餐提供圆形和方形的三明治，分别用数字 0 和 1 表示。所有学生站在一个队列里，每个学生要么喜欢圆形的要么喜欢方形的。
// 餐厅里三明治的数量与学生的数量相同。所有三明治都放在一个 栈 里，每一轮：

// 如果队列最前面的学生 喜欢 栈顶的三明治，那么会 拿走它 并离开队列。
// 否则，这名学生会 放弃这个三明治 并回到队列的尾部。
// 这个过程会一直持续到队列里所有学生都不喜欢栈顶的三明治为止。

// 给你两个整数数组 students 和 sandwiches ，其中 sandwiches[i] 是栈里面第 i​​​​​​ 个三明治的类型（i = 0 是栈的顶部）， students[j] 是初始队列里第 j​​​​​​ 名学生对三明治的喜好（j = 0 是队列的最开始位置）。请你返回无法吃午餐的学生数量。



// 示例 1：

// 输入：students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1]
// 输出：0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-students-unable-to-eat-lunch
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 拿走，则students1减少1，sandwiches也减少1.所以students和sandwiches的数量始终相同
// 0和1的数量相同，则最后全部能吃到
var countStudents = function (students, sandwiches) {
    while (students.indexOf(sandwiches[0]) !== -1) {
        students.splice(students.indexOf(sandwiches[0]), 1);
        sandwiches.shift(0)
    }
    return students.length;
};
// console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]), countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));

// 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

// 幸运数是指矩阵中满足同时下列两个条件的元素：

// 在同一行的所有元素中最小
// 在同一列的所有元素中最大


// 示例 1：

// 输入：matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]]
// 输出：[15]
// 解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
// 示例 2：

// 输入：matrix = [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]
// 输出：[12]
// 解释：12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
// 示例 3：

// 输入：matrix = [[7, 8], [1, 2]]
// 输出：[7]


// 提示：

// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var luckyNumbers = function (matrix) {
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let minIndex = 0;
        for (let j = 1; j < matrix[i].length; j++) {//找出行最小值的下标
            if (matrix[i][j] < matrix[i][minIndex]) {
                minIndex = j;
            }
        }
        let con = true;
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][minIndex] > matrix[i][minIndex]) {
                con = false;
                break;
            }
        }
        if (con) {
            res.push(matrix[i][minIndex])
        }
    }
    return res;
};
//console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]), luckyNumbers([[7, 8], [1, 2]]))

// 给你两个整数数组 nums 和 index。你需要按照以下规则创建目标数组：

// 目标数组 target 最初为空。
// 按从左到右的顺序依次读取 nums[i] 和 index[i]，在 target 数组中的下标 index[i] 处插入值 nums[i]。
// 重复上一步，直到在 nums 和 index 中都没有要读取的元素。
// 请你返回目标数组。

// 题目保证数字插入位置总是存在。



// 示例 1：

// 输入：nums = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1]
// 输出：[0, 4, 1, 3, 2]
// 解释：
// nums       index     target
// 0            0[0]
// 1            1[0, 1]
// 2            2[0, 1, 2]
// 3            2[0, 1, 3, 2]
// 4            1[0, 4, 1, 3, 2]
// 示例 2：

// 输入：nums = [1, 2, 3, 4, 0], index = [0, 1, 2, 3, 0]
// 输出：[0, 1, 2, 3, 4]
// 解释：
// nums       index     target
// 1            0[1]
// 2            1[1, 2]
// 3            2[1, 2, 3]
// 4            3[1, 2, 3, 4]
// 0            0[0, 1, 2, 3, 4]
// 示例 3：

// 输入：nums = [1], index = [0]
// 输出：[1]


// 提示：

// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/create-target-array-in-the-given-order
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var createTargetArray = function (nums, index) {
    let res = [];
    for (let i = 0; i < index.length; i++) {
        res.splice(index[i], 0, nums[i])
    }
    return res;
};
// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]), createTargetArray([1, 2, 3, 4, 0], [100, 1, 2, 3, 0]))

// 面试题 10.01.合并排序的数组
// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

// 初始化 A 和 B 的元素数量分别为 m 和 n。

// 示例:

// 输入:
// A = [1, 2, 3, 0, 0, 0], m = 3
// B = [2, 5, 6], n = 3

// 输出: [1, 2, 2, 3, 5, 6]
// 说明:

// A.length == n + m

//已经排序 二分法
var merge = function (A, m, B, n) {
    if (A.length === n) {
        return B;
    }
    A.splice(m, A.length - n);
    let start = 0;
    let end = m - 1;//开始和结束是闭区间[];
    for (let i = 0; i < n; i++) {
        if (B[i] >= A[A.length - 1]) {
            A.push(...B.slice(i));
            return A;
        } else {
            while (start <= end) {
                var mid = (start + end) / 2 | 0;//开始的位置加上开始和结束为止差值的一半
                if (A[mid] > B[i]) {
                    end = mid - 1;//要有-1
                } else if (A[mid] < B[i]) {
                    start = mid + 1;//要有+1
                } else {
                    A.splice(mid, 0, B[i]);
                    start = mid;
                    break;
                }
            }
            if (A[mid] !== B[i]) {//找不到相等的时候
                A.splice(mid, 0, B[i]);
            }
        }
    }
    return A;
};
// console.log(merge([0], 0, [1], 1));
// console.log(merge([0, 0], 0, [1, 2], 2));
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), merge([1, 3, 5, 0, 0, 0], 3, [4, 5, 6], 3))

// 给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。

// 客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。



// 示例 1：

// 输入：accounts = [[1, 2, 3], [3, 2, 1]]
// 输出：6
// 解释：
// 第 1 位客户的资产总量 = 1 + 2 + 3 = 6
// 第 2 位客户的资产总量 = 3 + 2 + 1 = 6
// 两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。
// 示例 2：

// 输入：accounts = [[1, 5], [7, 3], [3, 5]]
// 输出：10
// 解释：
// 第 1 位客户的资产总量 = 6
// 第 2 位客户的资产总量 = 10
// 第 3 位客户的资产总量 = 8
// 第 2 位客户是最富有的，资产总量是 10
// 示例 3：

// 输入：accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]
// 输出：17

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/richest-customer-wealth
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var maximumWealth = function (accounts) {
    let len = accounts.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        let sum = accounts[i].reduce((current, value, index, array) => (current + value), 0)
        res = sum > res ? sum : res;
    }
    return res;
}
// console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]), maximumWealth([[1, 5], [7, 3], [3, 5]]), maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));

// 给你一个仅由字符 '0' 和 '1' 组成的字符串 s 。一步操作中，你可以将任一 '0' 变成 '1' ，或者将 '1' 变成 '0' 。

// 交替字符串 定义为：如果字符串中不存在相邻两个字符相等的情况，那么该字符串就是交替字符串。例如，字符串 "010" 是交替字符串，而字符串 "0100" 不是。

// 返回使 s 变成 交替字符串 所需的 最少 操作数。



// 示例 1：

// 输入：s = "0100"
// 输出：1
// 解释：如果将最后一个字符变为 '1' ，s 就变成 "0101" ，即符合交替字符串定义。
// 示例 2：

// 输入：s = "10"
// 输出：0
// 解释：s 已经是交替字符串。
// 示例 3：

// 输入：s = "1111"
// 输出：2
// 解释：需要 2 步操作得到 "0101" 或 "1010" 。


// 提示：

// 1 <= s.length <= 104
// s[i] 是 '0' 或 '1'

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-changes-to-make-alternating-binary-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//结果只有两种1开始或者0开始
var minOperations = function (s) {
    let sArr = [...s];
    let len = sArr.length;
    let resZero = 0;
    let resOne = 0;
    for (let i = 0; i < len; i++) {//0开始
        if (i % 2 === 0 && sArr[i] !== '0') {
            resZero += 1
        } else if (i % 2 === 1 && sArr[i] !== '1') {
            resZero += 1
        }
    }
    for (let i = 0; i < len; i++) {//1开始
        if (i % 2 === 0 && sArr[i] !== '1') {
            resOne += 1
        } else if (i % 2 === 1 && sArr[i] !== '0') {
            resOne += 1
        }
    }
    return resZero > resOne ? resOne : resZero;
};
// console.log(minOperations('0100'), minOperations('10'), minOperations('1111'), minOperations('10010100'));

// 给你两个整数 x 和 y ，表示你在一个笛卡尔坐标系下的(x, y) 处。同时，在同一个坐标系下给你一个数组 points ，其中 points[i] = [ai, bi] 表示在(ai, bi) 处有一个点。当一个点与你所在的位置有相同的 x 坐标或者相同的 y 坐标时，我们称这个点是 有效的 。

// 请返回距离你当前位置 曼哈顿距离 最近的 有效 点的下标（下标从 0 开始）。如果有多个最近的有效点，请返回下标 最小 的一个。如果没有有效点，请返回 - 1 。

// 两个点(x1, y1) 和(x2, y2) 之间的 曼哈顿距离 为 abs(x1 - x2) + abs(y1 - y2) 。



// 示例 1：

// 输入：x = 3, y = 4, points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]
// 输出：2
// 解释：所有点中，[3, 1]，[2, 4] 和[4, 4] 是有效点。有效点中，[2, 4] 和[4, 4] 距离你当前位置的曼哈顿距离最小，都为 1 。[2, 4] 的下标最小，所以返回 2 。
// 示例 2：

// 输入：x = 3, y = 4, points = [[3, 4]]
// 输出：0
// 提示：答案可以与你当前所在位置坐标相同。
// 示例 3：

// 输入：x = 3, y = 4, points = [[2, 3]]
// 输出：-1
// 解释：没有有效点。


// 提示：

// 1 <= points.length <= 104
// points[i].length == 2
// 1 <= x, y, ai, bi <= 104
// 通过次数3, 165提交次数4, 995

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var nearestValidPoint = function (x, y, points) {
//     let len = points.length;
//     let res = -1;
//     let minDistance = Infinity;
//     for (let i = 0; i < len; i++) {
//         if (points[i][0] === x || points[i][1] === y) {//有效点
//             let min = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);//曼哈顿距离
//             //console.log(min)
//             if (min < minDistance) {
//                 minDistance = min;
//                 res = i;
//             }
//         }
//     }
//     return res;
// };
// //console.log(nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]), nearestValidPoint(3, 4, [[3, 4]]), nearestValidPoint(3, 4, [[2, 3]]))

// /**
//  * Initialize your data structure here.
//  */
// var MyHashMap = function () {
//     this.map = [];
// };

// /**
//  * value will always be non-negative. 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function (key, value) {
//     let con = true;
//     for (let i = 0; i < this.map.length; i++) {
//         if (this.map[i][0] === key) {
//             this.map[i][1] = value;
//             con = false;
//             break
//         }
//     }
//     con && this.map.push([key, value]);
// };

// /**
//  * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function (key) {
//     for (let i = 0; i < this.map.length; i++) {
//         if (this.map[i][0] === key) {
//             return this.map[i][1];
//         }
//     }
//     return -1;
// };

// /**
//  * Removes the mapping of the specified value key if this map contains a mapping for the key 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function (key) {
//     for (let i = 0; i < this.map.length; i++) {
//         if (this.map[i][0] === key) {
//             this.map.splice(i, 1)
//         }
//     }
// };


// 给你一个数组 nums 。nums 的源数组中，所有元素与 nums 相同，但按非递减顺序排列。

// 如果 nums 能够由源数组轮转若干位置（包括 0 个位置）得到，则返回 true ；否则，返回 false 。

// 源数组中可能存在 重复项 。

// 注意：我们称数组 A 在轮转 x 个位置后得到长度相同的数组 B ，当它们满足 A[i] == B[(i + x) % A.length]，其中 % 为取余运算。



// 示例 1：

// 输入：nums = [3, 4, 5, 1, 2]
// 输出：true
// 解释：[1, 2, 3, 4, 5] 为有序的源数组。
// 可以轮转 x = 3 个位置，使新数组从值为 3 的元素开始：[3, 4, 5, 1, 2]。
// 示例 2：

// 输入：nums = [2, 1, 3, 4]
// 输出：false
// 解释：源数组无法经轮转得到 nums 。
// 示例 3：

// 输入：nums = [1, 2, 3]
// 输出：true
// 解释：[1, 2, 3] 为有序的源数组。
// 可以轮转 x = 0 个位置（即不轮转）得到 nums 。
// 示例 4：

// 输入：nums = [1, 1, 1]
// 输出：true
// 解释：[1, 1, 1] 为有序的源数组。
// 轮转任意个位置都可以得到 nums 。
// 示例 5：

// 输入：nums = [2, 1]
// 输出：true
// 解释：[1, 2] 为有序的源数组。
// 可以轮转 x = 5 个位置，使新数组从值为 2 的元素开始：[2, 1]。


// 提示：

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
// 通过次数7, 166提交次数9, 556

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/check-if-array-is-sorted-and-rotated
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//非递减，有相同的递增
var check = function (nums) {
    let len = nums.length;
    let numsOriginStr = JSON.stringify(JSON.parse(JSON.stringify(nums)).sort((a, b) => (a - b)));
    for (let i = len; i >= 0; i--) {
        let loopArr = nums.slice(i).concat(nums.slice(0, i));
        let loopStr = JSON.stringify(loopArr);
        if (loopStr === numsOriginStr) {
            return true;
        }
    }
    return false;
};
//console.log(check([3, 4, 5, 1, 2]))
// console.log(check([3, 4, 5, 1, 2]), check([2, 1, 3, 4]), check([1, 2, 3]), check([1, 1, 1]), check([2, 1]));
// console.log(check([6, 10, 6]))

// 数轴上放置了一些筹码，每个筹码的位置存在数组 chips 当中。

// 你可以对 任何筹码 执行下面两种操作之一（不限操作次数，0 次也可以）：

// 将第 i 个筹码向左或者右移动 2 个单位，代价为 0。
// 将第 i 个筹码向左或者右移动 1 个单位，代价为 1。
// 最开始的时候，同一位置上也可能放着两个或者更多的筹码。

// 返回将所有筹码移动到同一位置（任意位置）上所需要的最小代价。



// 示例 1：

// 输入：chips = [1, 2, 3]
// 输出：1
// 解释：第二个筹码移动到位置三的代价是 1，第一个筹码移动到位置三的代价是 0，总代价为 1。
// 示例 2：

// 输入：chips = [2, 2, 2, 3, 3]
// 输出：2
// 解释：第四和第五个筹码移动到位置二的代价都是 1，所以最小总代价为 2。


// 提示：

// 1 <= chips.length <= 100
// 1 <= chips[i] <= 10 ^ 9

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-cost-to-move-chips-to-the-same-position
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//1.任何偶数位移动到偶数位，代价为0
//2.任何奇数位移动到奇数位，代价为0
//3.所有偶数位移动到一起，代价为0
//4.所有奇数位一定到一起，代价为0
//5.最后偶数位和奇数位移动到一起的代价为1
//6.相当于求偶数和奇数个数少的数
var minCostToMoveChips = function (position) {
    let odd = 0;
    let even = 0;
    let len = position.length;
    for (let i = 0; i < len; i++) {
        if (position[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    return (odd > even ? even : odd);
};
// console.log(minCostToMoveChips([1, 2, 3]), minCostToMoveChips([2, 2, 2, 3, 3]))

// 给你一个整数数组 nums 。你可以选定任意的 正数 startValue 作为初始值。

// 你需要从左到右遍历 nums 数组，并将 startValue 依次累加上 nums 数组中的值。

// 请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 正数 作为 startValue 。



// 示例 1：

// 输入：nums = [-3, 2, -3, 4, 2]
// 输出：5
// 解释：如果你选择 startValue = 4，在第三次累加时，和小于 1 。
// 累加求和
// startValue = 4 | startValue = 5 | nums
//     (4 - 3) = 1 | (5 - 3) = 2 | -3
//         (1 + 2) = 3 | (2 + 2) = 4 | 2
//             (3 - 3) = 0 | (4 - 3) = 1 | -3
//                 (0 + 4) = 4 | (1 + 4) = 5 | 4
//                     (4 + 2) = 6 | (5 + 2) = 7 | 2
// 示例 2：

// 输入：nums = [1, 2]
// 输出：1
// 解释：最小的 startValue 需要是正数。
// 示例 3：

// 输入：nums = [1, -2, -3]
// 输出：5


// 提示：

// 1 <= nums.length <= 100
//     - 100 <= nums[i] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-value-to-get-positive-step-by-step-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var minStartValue = function (nums) {
    let min = 1;
    nums.reduce((current, value) => {
        current += value;
        if (current < 1) {
            min += Math.abs(current) + 1;
            current = 1;
        }
        return current;
    }, 1)
    return min;
};
// console.log(minStartValue([-3, 2, -3, 4, 2]), minStartValue([1, 2]), minStartValue([1, -2, -3]))

// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。



// 示例 1：


// 输入：n = 3
// 输出：[[1, 2, 3], [8, 9, 4], [7, 6, 5]]
// 示例 2：

// 输入：n = 1
// 输出：[[1]]


// 提示：

// 1 <= n <= 20

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/spiral-matrix-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//上右下左的顺序走
var generateMatrix = function (n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res[i] = [];
    }
    let topSide = 0;//上边墙
    let rightSide = n - 1;//右边墙
    let bottomSide = n - 1;//底部墙
    let leftSide = 0;//下边墙
    let startNum = 1;//开始的数字
    let toRight = true;//向右填充
    let toBottom = false;//向下填充
    let toLeft = false;//向左填充
    let toTop = false;//向上填充
    while (startNum <= n * n) {
        if (toRight) {
            for (let i = leftSide; i <= rightSide; i++) {
                res[topSide][i] = startNum;
                startNum++;
            }
            toRight = false;
            toBottom = true;
            topSide++;
        }
        if (toBottom) {
            for (let i = topSide; i <= bottomSide; i++) {
                res[i][rightSide] = startNum;
                startNum++;
            }
            toBottom = false;
            toLeft = true;
            rightSide--;
        }
        if (toLeft) {
            for (let i = rightSide; i >= leftSide; i--) {
                res[bottomSide][i] = startNum;
                startNum++;
            }
            toLeft = false;
            toTop = true;
            bottomSide--;
        }
        if (toTop) {
            for (let i = bottomSide; i >= topSide; i--) {
                res[i][leftSide] = startNum;
                startNum++;
            }
            toTop = false;
            toRight = true;
            leftSide++;
        }
    }
    return res;
};
// console.log(generateMatrix(3), generateMatrix(1))

// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 题目数据保证答案符合 32 位带符号整数范围。



// 示例 1：

// 输入：s = "rabbbit", t = "rabbit"
// 输出：3
// 解释：
// 如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
// (上箭头符号 ^ 表示选取的字母)
// rabbbit
//     ^^^^ ^^
//     rabbbit
//     ^^ ^^^^
//     rabbbit
//     ^^^ ^^^
//     示例 2：

// 输入：s = "babgbag", t = "bag"
// 输出：5
// 解释：
// 如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。
// (上箭头符号 ^ 表示选取的字母)
// babgbag
//     ^^ ^
//     babgbag
//     ^^    ^
//     babgbag
//     ^    ^^
//     babgbag
//     ^  ^^
//     babgbag
//     ^^^

//     来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/distinct-subsequences
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// var numDistinct = function (s, t) {
//     let tLen = t.length;
//     let sLen = s.length;
//     for (let i = 0; i < tLen; i++) {
//         for (let j = 0; j < sLen; j++) {
//             if (s[j] === t[i]) {
//                 break;
//             }
//         }
//     }
// };


// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
// 输入：head = [1, 2, 3, 4, 5], left = 2, right = 4
// 输出：[1, 4, 3, 2, 5]
// 示例 2：

// 输入：head = [5], left = 1, right = 1
// 输出：[5]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var reverseBetween = function (head, left, right) {
    let mid = (right - left) / 2 | 0;
    for (let i = 0; i < mid; i++) {
        [head[left + i - 1], head[right - i - 1]] = [head[right - i - 1], head[left + i - 1]]
    }
    return head
};
// console.log(reverseBetween([1, 2, 3, 4, 5], 2, 4), reverseBetween([5], 1, 1))

// 给定一个二进制数组， 计算其中最大连续 1 的个数。



// 示例：

// 输入：[1, 1, 0, 1, 1, 1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.


// 提示：

// 输入的数组只包含 0 和 1 。
// 输入数组的长度是正整数，且不超过 10, 000。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/max-consecutive-ones
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var findMaxConsecutiveOnes = function (nums) {
    let res = 0;
    let current = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 1) {
            current += 1;
        } else {
            res = (current > res ? current : res);
            current = 0;
        }
    }
    return current > res ? current : res;
};
// console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1]), findMaxConsecutiveOnes([1]), findMaxConsecutiveOnes([0]))
// 给你一个数字数组 arr 。

// 如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。

// 如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。



// 示例 1：

// 输入：arr = [3, 5, 1]
// 输出：true
// 解释：对数组重新排序得到[1, 3, 5] 或者[5, 3, 1]，任意相邻两项的差分别为 2 或 - 2 ，可以形成等差数列。
// 示例 2：

// 输入：arr = [1, 2, 4]
// 输出：false
// 解释：无法通过重新排序得到等差数列。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//等差数列，肯定是从小到大或者从大到小，排序，然后遍历差值
var canMakeArithmeticProgression = function (arr) {
    let len = arr.length;
    arr.sort((a, b) => (a - b));
    let num = arr[1] - arr[0];
    for (let i = 1; i < len - 1; i++) {
        if (arr[i + 1] - arr[i] !== num) {
            return false

        }
    }
    return true;
};
// console.log(canMakeArithmeticProgression([3, 5, 1]), canMakeArithmeticProgression([4, 2, 1]), canMakeArithmeticProgression([1]))

// 给你一个整数数组 nums 。

// 如果一组数字(i, j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

// 返回好数对的数目。



// 示例 1：

// 输入：nums = [1, 2, 3, 1, 1, 3]
// 输出：4
// 解释：有 4 组好数对，分别是(0, 3), (0, 4), (3, 4), (2, 5) ，下标从 0 开始
// 示例 2：

// 输入：nums = [1, 1, 1, 1]
// 输出：6
// 解释：数组中的每组数字都是好数对
// 示例 3：

// 输入：nums = [1, 2, 3]
// 输出：0


// 提示：

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-good-pairs
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var numIdenticalPairs = function (nums) {
    let len = nums.length;
    let res = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j]) {
                res += 1
            }
        }
    }
    return res;
};
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]), numIdenticalPairs([1, 1, 1, 1]), numIdenticalPairs([1, 2, 3]));

// 请你给一个停车场设计一个停车系统。停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。

// 请你实现 ParkingSystem 类：

// ParkingSystem(int big, int medium, int small) 初始化 ParkingSystem 类，三个参数分别对应每种停车位的数目。
// bool addCar(int carType) 检查是否有 carType 对应的停车位。 carType 有三种类型：大，中，小，分别用数字 1， 2 和 3 表示。一辆车只能停在  carType 对应尺寸的停车位中。如果没有空车位，请返回 false ，否则将该车停入车位并返回 true 。


// 示例 1：

// 输入：
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]

// 输出：
// [null, true, true, false, false]

// 解释：
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // 返回 true ，因为有 1 个空的大车位
// parkingSystem.addCar(2); // 返回 true ，因为有 1 个空的中车位
// parkingSystem.addCar(3); // 返回 false ，因为没有空的小车位
// parkingSystem.addCar(1); // 返回 false ，因为没有空的大车位，唯一一个大车位已经被占据了


// 提示：

// 0 <= big, medium, small <= 1000
// carType 取值为 1， 2 或 3
// 最多会调用 addCar 函数 1000 次

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/design-parking-system
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (carType === 1) {
        if (this.big === 0) {
            return false
        } else {
            this.big -= 1;
            return true;
        }
    } else if (carType === 2) {
        if (this.medium === 0) {
            return false
        } else {
            this.medium -= 1;
            return true;
        }
    } else {
        if (this.small === 0) {
            return false
        } else {
            this.small -= 1;
            return true;
        }
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// 给你一个整数 n 。请你先求出从 1 到 n 的每个整数 10 进制表示下的数位和（每一位上的数字相加），然后把数位和相等的数字放到同一个组中。

// 请你统计每个组中的数字数目，并返回数字数目并列最多的组有多少个。



// 示例 1：

// 输入：n = 13
// 输出：4
// 解释：总共有 9 个组，将 1 到 13 按数位求和后这些组分别是：
// [1, 10]，[2, 11]，[3, 12]，[4, 13]，[5]，[6]，[7]，[8]，[9]。总共有 4 个组拥有的数字并列最多。
// 示例 2：

// 输入：n = 2
// 输出：2
// 解释：总共有 2 个大小为 1 的组[1]，[2]。
// 示例 3：

// 输入：n = 15
// 输出：6
// 示例 4：

// 输入：n = 24
// 输出：5


// 提示：

// 1 <= n <= 10 ^ 4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/count-largest-group
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//map方法
var countLargestGroup = function (n) {
    let map = {};
    let res = 0;
    let start = 1;
    for (let i = 1; i <= n; i++) {
        let sum = [...i.toString()].reduce((current, value) => (current += Number(value)), 0);
        if (!map[sum]) {
            map[sum] = 1;
        } else {
            map[sum] += 1
        }
    }
    //console.log(map)
    for (let key in map) {
        console.log(map[key], start)
        if (map[key] > start) {
            res = 1;
            start = map[key];
        } else if (map[key] === start) {
            res += 1;
        }
    }
    return res;
};
//console.log(countLargestGroup(13))
//console.log(countLargestGroup(13), countLargestGroup(2), countLargestGroup(15), countLargestGroup(24))

// 根据 逆波兰表示法，求表达式的值。

// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。



// 说明：

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。


// 示例 1：

// 输入：tokens = ["2", "1", "+", "3", "*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 示例 2：

// 输入：tokens = ["4", "13", "5", "/", "+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
// 示例 3：

// 输入：tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// 输出：22
// 解释：
// 该算式转化为常见的中缀算术表达式为：
// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22


// 提示：

// 1 <= tokens.length <= 104
// tokens[i] 要么是一个算符（"+"、"-"、"*" 或 "/"），要么是一个在范围[-200, 200] 内的整数


// 逆波兰表达式：

// 逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。

// 平常使用的算式则是一种中缀表达式，如(1 + 2) * (3 + 4) 。
// 该算式的逆波兰表达式写法为((1 2 + )(3 4 + ) * ) 。
// 逆波兰表达式主要有以下两个优点：

// 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
// 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var evalRPN = function (tokens) {
    let len = tokens.length;
    let task = [];
    for (let i = 0; i < len; i++) {
        if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
            task.push(Number(tokens[i]))
        } else {
            let taskLen = task.length;
            switch (tokens[i]) {
                case '+':
                    task.splice(taskLen - 2, taskLen, task[taskLen - 2] + task[taskLen - 1]);
                    break;
                case '-':
                    task.splice(taskLen - 2, taskLen, task[taskLen - 2] - task[taskLen - 1]);
                    break;
                case '*':
                    task.splice(taskLen - 2, taskLen, task[taskLen - 2] * task[taskLen - 1]);
                    break;
                case '/':
                    task.splice(taskLen - 2, taskLen, (task[taskLen - 2] / task[taskLen - 1]) | 0);
                    break;
                default:
                    break;
            }
        }
        //console.log(task)
    }
    return task[0];
};
//console.log(evalRPN(["4", "13", "5", "/", "+"]), evalRPN(["2", "1", "+", "3", "*"]), evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

// 示例 1:

// 输入:
// [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ]
// 输出:
// [
//     [1, 0, 1],
//     [0, 0, 0],
//     [1, 0, 1]
// ]
// 示例 2:

// 输入:
// [
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5]
// ]
// 输出:
// [
//     [0, 0, 0, 0],
//     [0, 4, 5, 0],
//     [0, 3, 1, 0]
// ]
// 进阶:

// 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个常数空间的解决方案吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/set-matrix-zeroes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//记录0的下标
var setZeroes = function (matrix) {
    let subArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                subArr.push([i, j])
            }
        }
    }
    //console.log(subArr)
    for (let i = 0; i < subArr.length; i++) {
        matrix[subArr[i][0]].fill(0, 0, matrix[0].length);
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][subArr[i][1]] = 0;
        }
    }
    return matrix;
};
// console.log(setZeroes([[0, 1]]))
// console.log(setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ]), setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5]
// ]))


// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。



// 示例 1：

// 输入：nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出：6
// 解释：连续子数组[4, -1, 2, 1] 的和最大，为 6 。
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

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-subarray
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//如果前面的和是负数，则抛弃
//如果都是负数，则返回最小的数
var maxSubArray = function (nums) {
    let res = -100001;//取一个最小值
    nums.reduce((current, value) => {
        if (current < 0) {
            current = 0;
        }
        current += value;
        res = res < current ? current : res;
        return current;
    }, 0)
    return res;
};
//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), maxSubArray([1]), maxSubArray([0]), maxSubArray([-1]), maxSubArray([-100000]))

//递归
var fib = function (n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
//console.log(fib(1), fib(2), fib(6), fib(45));


// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。



// 提示：

// 请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
// 在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 - 3。


// 示例 1：

// 输入：00000000000000000000000000001011
// 输出：3
// 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
// 示例 2：

// 输入：00000000000000000000000010000000
// 输出：1
// 解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
// 示例 3：

// 输入：11111111111111111111111111111101
// 输出：31
// 解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。


// 提示：

// 输入必须是长度为 32 的 二进制串 。


// 进阶：

// 如果多次调用这个函数，你将如何优化你的算法？

// var hammingWeight = function (n) {
//     let res = 0;
//     let strN = [...n.toString()];
//     console.log(strN)
//     for (let i = 0; i < strN.length; i++) {
//         if (strN[i] === '1') {
//             res += 1
//         }
//     }
//     return res;
// };
// console.log(hammingWeight(00000000000000000000000000001011))

// 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25 %。

// 请你找到并返回这个整数



// 示例：

// 输入：arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
// 输出：6


// 提示：

// 1 <= arr.length <= 10 ^ 4
// 0 <= arr[i] <= 10 ^ 5
// 通过次数12, 574提交次数20, 604

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var findSpecialInteger = function (arr) {
    let len = arr.length;
    let start = arr[0];
    let num = 1;
    if (len < 4) {
        return arr[0]
    }
    for (let i = 1; i < len; i++) {
        if (arr[i] === start) {
            num += 1;;
            if (len * .25 < num) {
                return arr[i];
            }
        } else {
            num = 1;
            start = arr[i];
        }
    }
};
// console.log(findSpecialInteger([1, 2, 3, 3]),)

// 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。

// 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i]，不存在任何元素 arr2[j] 满足 | arr1[i] - arr2[j] | <= d 。



// 示例 1：

// 输入：arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8], d = 2
// 输出：2
// 解释：
// 对于 arr1[0] = 4 我们有：
// | 4 - 10|=6 > d=2
//     | 4 - 9|=5 > d=2
//         | 4 - 1|=3 > d=2
//             | 4 - 8|=4 > d=2
// 所以 arr1[0] = 4 符合距离要求

// 对于 arr1[1] = 5 我们有：
// | 5 - 10|=5 > d=2
//     | 5 - 9|=4 > d=2
//         | 5 - 1|=4 > d=2
//             | 5 - 8|=3 > d=2
// 所以 arr1[1] = 5 也符合距离要求

// 对于 arr1[2] = 8 我们有：
// | 8 - 10|=2 <= d=2
//     | 8 - 9|=1 <= d=2
//         | 8 - 1|=7 > d=2
//             | 8 - 8|=0 <= d=2
// 存在距离小于等于 2 的情况，不符合距离要求

// 故而只有 arr1[0] = 4 和 arr1[1] = 5 两个符合距离要求，距离值为 2
// 示例 2：

// 输入：arr1 = [1, 4, 2, 3], arr2 = [-4, -3, 6, 10, 20, 30], d = 3
// 输出：2
// 示例 3：

// 输入：arr1 = [2, 1, 100, 3], arr2 = [-5, -2, 10, -3, 7], d = 6
// 输出：1


// 提示：

// 1 <= arr1.length, arr2.length <= 500
//     - 10 ^ 3 <= arr1[i], arr2[j] <= 10 ^ 3
// 0 <= d <= 100
// 通过次数10, 856提交次数15, 416

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-the-distance-value-between-two-arrays
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var findTheDistanceValue = function (arr1, arr2, d) {
    let res = 0;
    for (let i = 0; i < arr1.length; i++) {
        let con = true;
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                con = false;
                break
            }
        }
        con && (res += 1);
    }
    return res;
};
// console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2))

// LeetCode 设计了一款新式键盘，正在测试其可用性。测试人员将会点击一系列键（总计 n 个），每次一个。

// 给你一个长度为 n 的字符串 keysPressed ，其中 keysPressed[i] 表示测试序列中第 i 个被按下的键。releaseTimes 是一个升序排列的列表，其中 releaseTimes[i] 表示松开第 i 个键的时间。字符串和数组的 下标都从 0 开始 。第 0 个键在时间为 0 时被按下，接下来每个键都 恰好 在前一个键松开时被按下。

// 测试人员想要找出按键 持续时间最长 的键。第 i 次按键的持续时间为 releaseTimes[i] - releaseTimes[i - 1]，第 0 次按键的持续时间为 releaseTimes[0]。

// 注意，测试期间，同一个键可以在不同时刻被多次按下，而每次的持续时间都可能不同。

// 请返回按键 持续时间最长 的键，如果有多个这样的键，则返回 按字母顺序排列最大 的那个键。



// 示例 1：

// 输入：releaseTimes = [9, 29, 49, 50], keysPressed = "cbcd"
// 输出："c"
// 解释：按键顺序和持续时间如下：
// 按下 'c' ，持续时间 9（时间 0 按下，时间 9 松开）
// 按下 'b' ，持续时间 29 - 9 = 20（松开上一个键的时间 9 按下，时间 29 松开）
// 按下 'c' ，持续时间 49 - 29 = 20（松开上一个键的时间 29 按下，时间 49 松开）
// 按下 'd' ，持续时间 50 - 49 = 1（松开上一个键的时间 49 按下，时间 50 松开）
// 按键持续时间最长的键是 'b' 和 'c'（第二次按下时），持续时间都是 20
// 'c' 按字母顺序排列比 'b' 大，所以答案是 'c'
// 示例 2：

// 输入：releaseTimes = [12, 23, 36, 46, 62], keysPressed = "spuda"
// 输出："a"
// 解释：按键顺序和持续时间如下：
// 按下 's' ，持续时间 12
// 按下 'p' ，持续时间 23 - 12 = 11
// 按下 'u' ，持续时间 36 - 23 = 13
// 按下 'd' ，持续时间 46 - 36 = 10
// 按下 'a' ，持续时间 62 - 46 = 16
// 按键持续时间最长的键是 'a' ，持续时间 16

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/slowest-key
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var slowestKey = function (releaseTimes, keysPressed) {
    let longTime = releaseTimes[0];
    let res = keysPressed[0];
    for (let i = 1; i < keysPressed.length; i++) {
        //console.log(releaseTimes[i] - releaseTimes[i - 1])
        if (releaseTimes[i] - releaseTimes[i - 1] > longTime) {
            res = keysPressed[i];
            longTime = releaseTimes[i] - releaseTimes[i - 1]
        } else if (releaseTimes[i] - releaseTimes[i - 1] === longTime && (keysPressed[i] > keysPressed[i - 1])) {
            res = keysPressed[i];
        }
    }
    return res
};
// console.log(slowestKey([9, 29, 49, 50], 'cbcd'), slowestKey([12, 23, 36, 46, 62], 'spuda'))

// 在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。

// 例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

// 分组可以用区间[start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为[3, 6]。

// 我们称所有包含大于或等于三个连续字符的分组为 较大分组 。

// 找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。



// 示例 1：

// 输入：s = "abbxxxxzzy"
// 输出：[[3, 6]]
// 解释："xxxx" 是一个起始于 3 且终止于 6 的较大分组。
// 示例 2：

// 输入：s = "abc"
// 输出：[]
// 解释："a", "b" 和 "c" 均不是符合要求的较大分组。
// 示例 3：

// 输入：s = "abcdddeeeeaabbbcd"
// 输出：[[3, 5], [6, 9], [12, 14]]
// 解释：较大分组为 "ddd", "eeee" 和 "bbb"
// 示例 4：

// 输入：s = "aba"
// 输出：[]

// 提示：

// 1 <= s.length <= 1000
// s 仅含小写英文字母

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/positions-of-large-groups
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var largeGroupPositions = function (s) {
    let len = s.length;
    let start = 0;
    let num = 1;
    let current = s[0];
    let res = [];
    for (let i = 1; i < len; i++) {
        if (s[i] === current) {
            num += 1;
        } else if (num >= 3) {
            res.push([start, i - 1]);
            current = s[i];
            num = 1;
            start = i;
        } else {
            current = s[i];
            num = 1;
            start = i;
        }
    }
    num >= 3 && res.push([start, len - 1]);
    return res;
};
var largeGroupPositions = function (s) {
    let len = s.length;
    let num = 1;
    let res = [];
    for (let i = 1; i < len; i++) {
        if (s[i] === s[i - 1]) {
            num += 1
        } else if (num >= 3) {
            res.push([i - num, i - 1]);
            num = 1;
        } else {
            num = 1;
        }
    }
    num >= 3 && res.push([len - num, len - 1]);
    return res;
};
//console.log(largeGroupPositions('abbxxxxzzy'), largeGroupPositions('abc'), largeGroupPositions('abcdddeeeeaabbbcd'), largeGroupPositions('aba'), largeGroupPositions('aaa'));

// 给你一个整数数组 arr ，数组中的每个整数 互不相同 。另有一个由整数数组构成的数组 pieces，其中的整数也 互不相同 。请你以 任意顺序 连接 pieces 中的数组以形成 arr 。但是，不允许 对每个数组 pieces[i] 中的整数重新排序。

// 如果可以连接 pieces 中的数组形成 arr ，返回 true ；否则，返回 false 。



// 示例 1：

// 输入：arr = [85], pieces = [[85]]
// 输出：true
// 示例 2：

// 输入：arr = [15, 88], pieces = [[88], [15]]
// 输出：true
// 解释：依次连接[15] 和[88]
// 示例 3：

// 输入：arr = [49, 18, 16], pieces = [[16, 18, 49]]
// 输出：false
// 解释：即便数字相符，也不能重新排列 pieces[0]
// 示例 4：

// 输入：arr = [91, 4, 64, 78], pieces = [[78], [4, 64], [91]]
// 输出：true
// 解释：依次连接[91]、[4, 64] 和[78]
// 示例 5：

// 输入：arr = [1, 3, 5, 7], pieces = [[2, 4, 6, 8]]
// 输出：false


// 提示：

// 1 <= pieces.length <= arr.length <= 100
// sum(pieces[i].length) == arr.length
// 1 <= pieces[i].length <= arr.length
// 1 <= arr[i], pieces[i][j] <= 100
// arr 中的整数 互不相同
// pieces 中的整数 互不相同（也就是说，如果将 pieces 扁平化成一维数组，数组中的所有整数互不相同）

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/check-array-formation-through-concatenation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var canFormArray = function (arr, pieces) {
    //找到pieces每个数字中起始的数字，记录该数组下标j
    //遍历arr，起始的数字有没有和arr[i]相同的，没有直接返回false
    //有的话，遍历pieces[j]，看是否和arr的顺序相同
    let lenP = pieces.length;
    let lenA = arr.length;
    let map = {};
    for (let i = 0; i < lenP; i++) {
        map[pieces[i][0]] = i;
    }
    for (let i = 0; i < lenA; i++) {
        if (map[arr[i]] === undefined) {//!map[arr[i]] 不行，0会出错
            return false;
        } else {
            for (var j = 0; j < pieces[map[arr[i]]].length; j++) {
                // /console.log(arr[i + j], pieces[map[arr[i]]][j])
                if (arr[i + j] !== pieces[map[arr[i]]][j]) {
                    return false;
                }
            }
            i += j - 1;//j执行之后会加1.所以这里需要减掉1
        }
    }
    return true;
};
// console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]))
// console.log(canFormArray([85], [[85]]), canFormArray([15, 88], [[88], [15]]), canFormArray([49, 18, 16], [[16, 18, 49]]), canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]), canFormArray([1, 3, 5, 7], [[2, 4, 6, 8]]))

// 给定一个范围在  1 ≤ a[i]≤ n(n = 数组大小) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在[1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗 ? 你可以假定返回的数组不算在额外空间内。

// 示例:

// 输入:
// [4, 3, 2, 7, 8, 2, 3, 1]
// [1,2,3,4,5,6,7,8]

// 输出:
// [5, 6]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var findDisappearedNumbers = function (nums) {
    let res = [];
    for (let i = 1; i <= nums.length; i++) {
        res.push(i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (res.indexOf(nums[i]) !== -1) {
            res.splice(res.indexOf(nums[i]), 1);
        }
    }
    return res;
};
// console.log(findDisappearedNumbers([1, 1]));

// 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：

// nums[0] = 0
// nums[1] = 1
// 当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
// 当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
// 返回生成数组 nums 中的 最大 值。



// 示例 1：

// 输入：n = 7
// 输出：3
// 解释：根据规则：
// nums[0] = 0
// nums[1] = 1
// nums[(1 * 2) = 2] = nums[1] = 1
// nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
// nums[(2 * 2) = 4] = nums[2] = 1
// nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
// nums[(3 * 2) = 6] = nums[3] = 2
// nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
// 因此，nums = [0, 1, 1, 2, 1, 3, 2, 3]，最大值 3
// 示例 2：

// 输入：n = 2
// 输出：1
// 解释：根据规则，nums[0]、nums[1] 和 nums[2] 之中的最大值是 1
// 示例 3：

// 输入：n = 3
// 输出：2
// 解释：根据规则，nums[0]、nums[1]、nums[2] 和 nums[3] 之中的最大值是 2

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/get-maximum-in-generated-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var getMaximumGenerated = function (n) {
    let res = 0;
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            res = 0;
            arr.push(0);
        } else if (i === 1) {
            res = 1;
            arr.push(1);
        } else if (i % 2 === 0) {//偶数位
            arr.push(arr[i / 2]);
            res = (arr[i / 2] > res ? arr[i / 2] : res);
        } else {
            arr.push(arr[i / 2 | 0] + arr[(i / 2 | 0) + 1]);
            res = (arr[i / 2 | 0] + arr[(i / 2 | 0) + 1] > res ? arr[i / 2 | 0] + arr[(i / 2 | 0) + 1] : res);
        }
    }
    //console.log(arr);
    return res
};
// console.log(getMaximumGenerated(7), getMaximumGenerated(2), getMaximumGenerated(3))

// 给你一个 m x n 的矩阵，最开始的时候，每个单元格中的值都是 0。

// 另有一个二维索引数组 indices，indices[i] = [ri, ci] 指向矩阵中的某个位置，其中 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。

// 对 indices[i] 所指向的每个位置，应同时执行下述增量操作：

// ri 行上的所有单元格，加 1 。
// ci 列上的所有单元格，加 1 。
// 给你 m、n 和 indices 。请你在执行完所有 indices 指定的增量操作后，返回矩阵中 奇数值单元格 的数目。



// 示例 1：



// 输入：m = 2, n = 3, indices = [[0, 1], [1, 1]]
// 输出：6
// 解释：最开始的矩阵是[[0, 0, 0], [0, 0, 0]]。
// 第一次增量操作后得到[[1, 2, 1], [0, 1, 0]]。
// 最后的矩阵是[[1, 3, 1], [1, 3, 1]]，里面有 6 个奇数。
// 示例 2：



// 输入：m = 2, n = 2, indices = [[1, 1], [0, 0]]
// 输出：0
// 解释：最后的矩阵是[[2, 2], [2, 2]]，里面没有奇数。


// 提示：

// 1 <= m, n <= 50
// 1 <= indices.length <= 100
// 0 <= ri < m
// 0 <= ci < n


// 进阶：你可以设计一个时间复杂度为 O(n + m + indices.length) 且仅用 O(n + m) 额外空间的算法来解决此问题吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var oddCells = function (m, n, indices) {//m = 2, n = 3, indices = [[0,1],[1,1]]
    let len = indices.length;
    let res = 0;
    let rowMap = new Map();
    let colMap = new Map();
    let rowOdd = 0;//执行操作之后，行数是奇数的数目
    let colOdd = 0;//执行操作之后，列数是奇数的数目
    for (let i = 0; i < len; i++) {
        //indices是一个二维数组
        if (rowMap.has(indices[i][0])) {//这一行数字+1
            rowMap.set(indices[i][0], rowMap.get(indices[i][0]) + 1);
        } else {
            rowMap.set(indices[i][0], 1);
        }
        if (colMap.has(indices[i][1])) {
            colMap.set(indices[i][1], colMap.get(indices[i][1]) + 1);
        } else {
            colMap.set(indices[i][1], 1);
        }
    }
    for (let val of rowMap.values()) {//遍历所有行
        if (val % 2 !== 0) {//这一行全为奇数
            res += n;
            rowOdd += 1;
        }
    }
    for (let val of colMap.values()) {//遍历所有列
        if (val % 2 !== 0) {//这一列全为奇数
            res += m;
            colOdd += 1;
        }
    }
    //console.log(res, rowEven, colEven)
    console.log(res, rowMap, rowOdd, colMap, colOdd)
    //奇数行和奇数列的交点被多加一次，需要减去
    res -= rowOdd * colOdd;
    //奇数行和奇数列的和也是偶数，也要减掉
    res -= rowOdd * colOdd;
    return res;
};
//console.log(oddCells(2, 3, [[0, 1], [1, 1]]))
//console.log(oddCells(2, 2, [[1, 1], [0, 0]]))

// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。



// 示例 1：

// 输入：digits = [1, 2, 3]
// 输出：[1, 2, 4]
// 解释：输入数组表示数字 123。
// 示例 2：

// 输入：digits = [4, 3, 2, 1]
// 输出：[4, 3, 2, 2]
// 解释：输入数组表示数字 4321。
// 示例 3：

// 输入：digits = [0]
// 输出：[1]


// 提示：

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/plus-one
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var plusOne = function (digits) {
    let len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        let add = 0;
        if (digits[i] + 1 + add < 10) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            if (i !== 0) {
                digits[i] = digits[i] + 1 - 10;
                add = 1;
            } else {
                digits[i] = digits[i] + 1 - 10;
                digits.unshift(1);
                return digits;
            }
        }
    }
};
// console.log(plusOne([1, 2, 3]), plusOne([4, 3, 2, 1]), plusOne([0]), plusOne([9, 9, 9, 9]))

// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。

// 丑数 就是只包含质因数 2、3 和 / 或 5 的正整数。



// 示例 1：

// 输入：n = 6
// 输出：true
// 解释：6 = 2 × 3
// 示例 2：

// 输入：n = 8
// 输出：true
// 解释：8 = 2 × 2 × 2
// 示例 3：

// 输入：n = 14
// 输出：false
// 解释：14 不是丑数，因为它包含了另外一个质因数 7 。
// 示例 4：

// 输入：n = 1
// 输出：true
// 解释：1 通常被视为丑数。


// 提示：

// -231 <= n <= 231 - 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/ugly-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var isUgly = function (n) {
    //n===1的时候除以2||3||5，余数不是0，则不是丑数；
    if (n <= 0) {
        return false
    }
    if (n === 1) {
        return true
    } else {
        while (n > 1) {
            if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) {
                return false;
            } else {
                if (n % 2 === 0) {
                    n = n / 2
                }
                if (n % 3 === 0) {
                    n = n / 3
                }
                if (n % 5 === 0) {
                    n = n / 5
                }
            }
        }
    }
    return true
};
// console.log(isUgly(6), isUgly(8), isUgly(14), isUgly(1), isUgly(121), isUgly(242))


// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。



// 示例 1：

// 输入：[7, 1, 5, 3, 6, 4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6 - 1 = 5 。
// 注意利润不能是 7 - 1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7, 6, 4, 3, 1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

var maxProfit = function (prices) {
    //寻找prices[j]-prices[i]>0且最大的数,且j>i，如果没有，则返回0
    let res = 0;
    let len = prices.length;
    let min = Infinity;//i之前最小的数（保证第一个数不能跳过）
    for (let i = 0; i < len - 1; i++) {
        if (prices[i] >= min) {//比前面最小的数大，则后面的数减去最小的数所得的结果肯定大于减去当前数，所以跳过;
            res = prices[i] - min > res ? prices[i] - min : res;//当前数减去最小数的结果
            continue;
        }
        //小于前面最小的数的话
        min = prices[i];
        for (let j = i + 1; j < len; j++) {
            if (prices[j] - prices[i] > res) {
                res = prices[j] - prices[i];
            }
        }
    }
    return res;
};
//console.log(maxProfit([7, 1, 5, 3, 6, 4]), maxProfit([7, 6, 4, 3, 1]), maxProfit([6, 2, 7, 3, 8, 9, 4]), maxProfit([1, 2, 4]), maxProfit([1, 4, 2]))

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。



// 示例 1:

// 输入: [7, 1, 5, 3, 6, 4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
// 示例 2:

// 输入: [1, 2, 3, 4, 5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
// 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
// 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
// 示例 3:

// 输入: [7, 6, 4, 3, 1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var maxProfit = function (prices) {
    let len = prices.length;
    let min = prices[0];
    let res = 0;
    for (let i = 1; i < len; i++) {
        if (prices[i] >= prices[i - 1]) {
            continue;
        } else {
            if (prices[i - 1] - min > 0) {
                res += prices[i - 1] - min;
            }
            min = prices[i];
        }
    }
    //console.log(res);
    return res += (prices[len - 1] - min > 0 ? prices[len - 1] - min : 0);
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]), maxProfit([1, 2, 3, 4, 5]), maxProfit([7, 6, 4, 3, 1]), maxProfit([7, 1, 2, 3, 2, 5, 3, 5, 2]))

// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。



// 示例 1：

// 输入：nums = [2, 3, 2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2：

// 输入：nums = [1, 2, 3, 1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
// 偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 3：

// 输入：nums = [0]
// 输出：0


// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/house-robber-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var rob = function (nums) {
    let res = 0;
    let len = nums.length;
    let start = 0;
    for (let i = 0; i < len; i++) {

    }
};

// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n / 2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。



// 示例 1：

// 输入：[3, 2, 3]
// 输出：3
// 示例 2：

// 输入：[2, 2, 1, 1, 1, 2, 2]
// 输出：2


// 进阶：

// 尝试设计时间复杂度为 O(n) 、空间复杂度为 O(1) 的算法解决此问题。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/majority-element
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//1.多数元素有且只有一个
var majorityElement = function (nums) {
    let len = nums.length;
    let map = new Map();
    if (len < 2) {
        return nums[0];
    }
    for (let i = 0; i < len; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let [key, value] of map) {
        if (value > len / 2) {
            return key;
        }
    }
};

// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。



// 示例 1：

// 输入：[3, 2, 1]
// 输出：1
// 解释：第三大的数是 1 。
// 示例 2：

// 输入：[1, 2]
// 输出：2
// 解释：第三大的数不存在, 所以返回最大的数 2 。
// 示例 3：

// 输入：[2, 2, 3, 1]
// 输出：1
// 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
// 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。


// 提示：

// 1 <= nums.length <= 104
//     - 231 <= nums[i] <= 231 - 1


// 进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/third-maximum-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


var thirdMax = function (nums) {
    let len = nums.length;
    if (len < 3) {
        return Math.max(...nums);
    } else {
        let thirdMaxArr = [];
        for (let i = 0; i < len; i++) {
            if (thirdMaxArr.length < 3 && !thirdMaxArr.includes(nums[i])) {
                thirdMaxArr.push(nums[i]);
                thirdMaxArr.sort((a, b) => (a - b));//排序
            } else if (nums[i] > thirdMaxArr[0] && !thirdMaxArr.includes(nums[i])) {
                thirdMaxArr[0] = nums[i];
                thirdMaxArr.sort((a, b) => (a - b));//排序
            }
        }
        console.log(thirdMaxArr)
        return thirdMaxArr.length > 2 ? thirdMaxArr[0] : thirdMaxArr[thirdMaxArr.length - 1];
    }
};


// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。



// 示例：

// 输入：[1, 12, -5, -6, 50, 3], k = 4
// 输出：12.75
// 解释：最大平均数(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


// 提示：

// 1 <= k <= n <= 30, 000。
// 所给数据范围[-10, 000，10, 000]。

var findMaxAverage = function (nums, k) {
    let len = nums.length;
    let res = 0;
    for (let i = 0; i < k; i++) {
        res += nums[i];
    }
    res = res / k;
    for (let i = 1; i <= len - k; i++) {
        let sum = 0;
        for (let j = i; j < k + i; j++) {
            sum += nums[j];
        }
        console.log(sum);
        res = res > sum / k ? res : sum / k;
    }
    return res;
};

var findMaxAverage = function (nums, k) {
    let len = nums.length;
    let res = 0;
    let replaceNum = 0;
    for (let i = 0; i < k; i++) {
        res += nums[i];
    }
    replaceNum = res - nums[0];
    console.log(replaceNum)
    for (let i = k; i < len; i++) {
        let currentNum = replaceNum + nums[i];
        res = currentNum > res ? currentNum : res;
        replaceNum = currentNum - nums[i - k + 1];
        console.log(replaceNum)
    }
    return res / k;
};
// console.log(findMaxAverage([5], 1))


// 包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度(向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。

// 示例 1:

// 输入:
// [[1, 1, 1],
// [1, 0, 1],
// [1, 1, 1]]
// 输出:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// 解释:
// 对于点(0, 0), (0, 2), (2, 0), (2, 2): 平均(3 / 4) = 平均(0.75) = 0
// 对于点(0, 1), (1, 0), (1, 2), (2, 1): 平均(5 / 6) = 平均(0.83333333) = 0
// 对于点(1, 1): 平均(8 / 9) = 平均(0.88888889) = 0
// 注意:

// 给定矩阵中的整数范围为[0, 255]。
// 矩阵的长和宽的范围均为[1, 150]。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/image-smoother
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var imageSmoother = function (M) {
    let len = M.length;
    let lenT = M[0].length;
    let res = [];
    //M[i][j]周围8个数为 M[i][j+1],M[i][j-1],M[i-1][j],M[i-1][j-1],M[i-1][j+1],M[i+1][j],M[i+1][j-1],M[i+1][j+1]
    for (let i = 0; i < len; i++) {
        res[i] = [];
        for (var j = 0; j < lenT; j++) {
            let num = 1;
            let sum = M[i][j];
            if (M[i] && M[i][j + 1] !== undefined) {
                num += 1;
                sum += M[i][j + 1];
                console.log([num, sum])
            }
            if (M[i] && M[i][j - 1] !== undefined) {
                num += 1;
                sum += M[i][j - 1];
                console.log([num, sum])
            }
            if (M[i - 1] && M[i - 1][j] !== undefined) {
                num += 1;
                sum += M[i - 1][j];
                console.log([num, sum])
            }
            if (M[i - 1] && M[i - 1][j - 1] !== undefined) {
                num += 1;
                sum += M[i - 1][j - 1];
                console.log([num, sum])
            }
            if (M[i - 1] && M[i - 1][j + 1] !== undefined) {
                num += 1;
                sum += M[i - 1][j + 1];
                console.log([num, sum])
            }
            if (M[i + 1] && M[i + 1][j] !== undefined) {
                num += 1;
                sum += M[i + 1][j];
                console.log([num, sum])
            }
            if (M[i + 1] && M[i + 1][j - 1] !== undefined) {
                num += 1;
                sum += M[i + 1][j - 1];
                console.log([num, sum])
            }
            if (M[i + 1] && M[i + 1][j + 1] !== undefined) {
                num += 1;
                sum += M[i + 1][j + 1];
                console.log([num, sum])
            }
            res[i][j] = sum / num | 0
        }
    }
    return res;
};
// imageSmoother([
//     [2, 3, 4],
//     [5, 6, 7],
//     [8, 9, 10],
//     [11, 12, 13],
//     [14, 15, 16]]
// )
// 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

// 我们是这样定义一个非递减数列的： 对于数组中任意的 i(0 <= i <= n - 2) ，总满足 nums[i] <= nums[i + 1]。



// 示例 1:

// 输入: nums = [4, 2, 3]
// 输出: true
// 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
// 示例 2:

// 输入: nums = [4, 2, 1]
// 输出: false
// 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。


// 提示：

// 1 <= n <= 10 ^ 4
//     - 10 ^ 5 <= nums[i] <= 10 ^ 5

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/non-decreasing-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 非递减，递增或者相等
// 遍历，i<i-1,则1：i-1变小，不行i变大
// 后续的比较，必须都大于i
var checkPossibility = function (nums) {
    let len = nums.length;
    let num = 0;
    for (let i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            num += 1;
            if (num > 1) {
                return false;
            }
            let a = nums[i - 1];
            nums[i - 1] = nums[i];//i-1取最大的值，非递增
            if (i !== 1 && (nums[i - 2] > nums[i - 1])) {
                nums[i] = a;
            }
        }
    }
    return true;
};

// 有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

// 现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。

// 示例 1:

// 输入:
// bits = [1, 0, 0]
// 输出: True
// 解释:
// 唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。
// 示例 2:

// 输入:
// bits = [1, 1, 1, 0]
// 输出: False
// 解释:
// 唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
// 注意:

// 1 <= len(bits) <= 1000.
// bits[i] 总是0 或 1.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/1-bit-and-2-bit-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 遍历。若i=0，则i时一比特，若i=1，则时二比特，要取后面一个数
var isOneBitCharacter = function (bits) {
    let len = bits.length;
    if (bits[len - 2] === 0) {
        return true;
    }
    for (let i = 0; i < len; i++) {
        var res = true;
        if (bits[i] === 1) {
            res = false;
            i += 1;
        }
    }
    return res;
};

// 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。

// 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。



// 示例 1：


// 输入：matrix = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
// 输出：true
// 解释：
// 在上述矩阵中, 其对角线为:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。
// 各条对角线上的所有元素均相同, 因此答案是 True 。
// 示例 2：


// 输入：matrix = [[1, 2], [2, 2]]
// 输出：false
// 解释：
// 对角线 "[1, 2]" 上的元素不同。


// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 20
// 0 <= matrix[i][j] <= 99


// 进阶：

// 如果矩阵存储在磁盘上，并且内存有限，以至于一次最多只能将矩阵的一行加载到内存中，该怎么办？
// 如果矩阵太大，以至于一次只能将不完整的一行加载到内存中，该怎么办？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/toeplitz-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var isToeplitzMatrix = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    if (n < 2 || m < 2) { return true };
    for (let i = 0; i < n; i++) {//列
        let k = 1;//第二行开始(行)
        let j = i + 1;//col起始等于i+1(列)
        while (k < m && j < n) {
            if (matrix[0][i] !== matrix[k][j]) {
                return false
            }
            k++;
            j++;
        }
    }
    for (let i = 1; i < m; i++) {//行
        let k = 1;//列
        let j = i + 1;//行
        while (k < n && j < m) {
            if (matrix[i][0] !== matrix[j][k]) {
                return false
            }
            k++;
            j++;
        }
    }
    return true;
};

// [[18], [66]]

// [
//     [1, 2, 3, 4],
//     [5, 1, 2, 3],
//     [9, 5, 1, 2],
//     [9, 9, 5, 1]
// ]
// [
//     [1, 1],
//     [1, 1],
//     [1, 1],
//     [1, 1],
//     [1, 1],
//     [1, 1],
//     [1, 1]

// ]
// isToeplitzMatrix(
//     [
//         [11, 74, 0, 93],
//         [40, 11, 74, 7]
//     ]
// )


// 如果数组是单调递增或单调递减的，那么它是单调的。

// 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i] > = A[j]，那么数组 A 是单调递减的。

// 当给定的数组 A 是单调数组时返回 true，否则返回 false。



// 示例 1：

// 输入：[1, 2, 2, 3]
// 输出：true
// 示例 2：

// 输入：[6, 5, 4, 4]
// 输出：true
// 示例 3：

// 输入：[1, 3, 2]
// 输出：false
// 示例 4：

// 输入：[1, 2, 4, 5]
// 输出：true
// 示例 5：

// 输入：[1, 1, 1]
// 输出：true


// 提示：

// 1 <= A.length <= 50000
//     - 100000 <= A[i] <= 100000
// 通过次数55, 397提交次数94, 314

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/monotonic-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var isMonotonic = function (A) {
    let len = A.length;
    let sub = 0;
    if (len < 2) {
        return true;
    }
    for (let i = 0; i < len - 1; i++) {
        if (sub === 0 && A[i + 1] - A[i] < 0) {
            sub = -1
        } else if (sub === 0 && A[i + 1] - A[i] > 0) {
            sub = 1;
        } else if (sub === -1 && A[i + 1] - A[i] > 0) {
            return false
        } else if (sub === 1 && A[i + 1] - A[i] < 0) {
            return false
        }
    }
    return true;
};

// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。



// 示例 1：

// 输入：[1, 2, 3, 4, 4, 3, 2, 1]
// 输出：true
// 解释：可行的分组是[1, 1]，[2, 2]，[3, 3]，[4, 4]
// 示例 2：

// 输入：[1, 1, 1, 2, 2, 2, 3, 3]
// 输出：false
// 解释：没有满足要求的分组。
// 示例 3：

// 输入：[1]
// 输出：false
// 解释：没有满足要求的分组。
// 示例 4：

// 输入：[1, 1]
// 输出：true
// 解释：可行的分组是[1, 1]
// 示例 5：

// 输入：[1, 1, 2, 2, 2, 2]
// 输出：true
// 解释：可行的分组是[1, 1]，[2, 2]，[2, 2]

// 提示：

// 1 <= deck.length <= 10000
// 0 <= deck[i] < 10000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var hasGroupsSizeX = function (deck) {
    let len = deck.length;
    let X;
    if (len < 2) {
        return false;
    }
    let map = new Map();
    for (let i = 0; i < len; i++) {
        if (map.has(deck[i])) {
            map.set(deck[i], map.get(deck[i]) + 1)
        } else {
            map.set(deck[i], 1)
        }
    }
    let arr = Array.from(map.values());//求这个数组的最大公约数
    let maxGcd = arr[0];//初始最大公约数
    //余数肯定比除数小
    //最大公约数，欧几里得算法（除数除以余数，最终余数是0的时候，除数就是最大公约数）
    for (let i = 1; i < arr.length; i++) {
        let a = maxGcd > arr[i] ? arr[i] : maxGcd;//除数
        let b = maxGcd > arr[i] ? maxGcd : arr[i];//被除数
        while (b % a !== 0) {
            let c = b % a;// 余数
            b = a;
            a = c;
        }
        if (a > 1) {
            maxGcd = a;//求得两个数的最大公约数，和下一个数继续求最大公约数
        } else {
            return false;
        }

    }
    return maxGcd > 1;
};
//console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]))

// 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。

// 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

// arr.length >= 3
// 在 0 < i < arr.length - 1 条件下，存在 i 使得：
// arr[0] < arr[1] < ...arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// 示例 1：

// 输入：arr = [2, 1]
// 输出：false
// 示例 2：

// 输入：arr = [3, 5, 5]
// 输出：false
// 示例 3：

// 输入：arr = [0, 3, 2, 1]
// 输出：true


// 提示：

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-mountain-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//0 < i < arr.length - 1
var validMountainArray = function (arr) {
    let len = arr.length;
    if (len < 3) {
        return false;
    }
    for (var i = 1; i < len; i++) {
        if (arr[i] === arr[i - 1]) {
            return false;
        }
        if (arr[i] < arr[i - 1]) {//转折点
            if (i === 1) {
                return false;
            } else {
                while (i < len) {
                    if (arr[i] >= arr[i - 1]) {
                        return false;
                    }
                    i++;
                }
                return true;
            }
        }
    }
    return false;
};
//console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

//双指针
var validMountainArray = function (arr) {
    let len = arr.length;
    let left = 0;
    let right = len - 1;
    while (left < len - 1 && arr[left] < arr[left + 1]) {
        left++;
    }
    while (right > 0 && arr[right] < arr[right - 1]) {
        right--;
    }
    console.log(left, right)
    return left === right && right !== 0 && left !== len - 1
}
// console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

// 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

// 形式上，如果可以找出索引 i + 1 < j 且满足 A[0] + A[1] + ... + A[i] == A[i + 1] + A[i + 2] + ... + A[j - 1] == A[j] + A[j - 1] + ... + A[A.length - 1] 就可以将数组三等分。



// 示例 1：

// 输入：[0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
// 输出：true
// 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// 示例 2：

// 输入：[0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]
// 输出：false
// 示例 3：

// 输入：[3, 3, 6, 5, -2, 2, 5, 1, -9, 4]
// 输出：true
// 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4


// 提示：

// 3 <= A.length <= 50000
//     - 10 ^ 4 <= A[i] <= 10 ^ 4
// 通过次数43, 641提交次数108, 925

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//3个
var canThreePartsEqualSum = function (arr) {
    let len = arr.length;
    if (len < 3) {
        return false;
    }
    let sum = arr.reduce((current, value, index) => {
        return current += value;
    }, 0)
    let average = sum / 3;
    if ((average | 0) !== average) {
        return false;
    }
    let num = 0;
    let index = 0;
    for (let i = 0; i < len; i++) {
        num += arr[i];
        if (index === 3) {
            let a = 0;
            while (i < len) {
                a += arr[i];
                i++;
            }
            console.log('a', a)
            return a === 0;
        } else {
            if (num === average) {
                index += 1;
                num = 0;
            }
        }
    }
    console.log('index', index)
    return index === 3;
};
// console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]))

// 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。

// 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。



// 示例 1：

// 输入：[0, 1, 1]
// 输出：[true, false, false]
// 解释：
// 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
// 示例 2：

// 输入：[1, 1, 1]
// 输出：[false, false, false]
// 示例 3：

// 输入：[0, 1, 1, 1, 1, 1]
// 输出：[true, false, false, false, true, false]
// 示例 4：

// 输入：[1, 1, 1, 0, 1]
// 输出：[false, false, false, false, false]


// 提示：

// 1 <= A.length <= 30000
// A[i] 为 0 或 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-prefix-divisible-by-5
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//（从最高有效位到最低有效位
var prefixesDivBy5 = function (nums) {
    let answer = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let sum = 0
        for (let j = 0; j <= i; j++) {
            sum += nums[j] * Math.pow(2, i - j) % 10;
        }
        console.log(sum)
        answer[i] = (sum % 5 === 0);
    }
    console.log(answer)
    return answer;
};
//prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1])


// 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

// 注意：请不要在超过该数组长度的位置写入元素。

// 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。



// 示例 1：

// 输入：[1, 0, 2, 3, 0, 4, 5, 0]
// 输出：null
// 解释：调用函数后，输入的数组将被修改为：[1, 0, 0, 2, 3, 0, 0, 4]
// 示例 2：

// 输入：[1, 2, 3]
// 输出：null
// 解释：调用函数后，输入的数组将被修改为：[1, 2, 3]


// 提示：

// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/duplicate-zeros
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var duplicateZeros = function (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            let right = len - 1;
            while (right > i + 1) {
                arr[right] = arr[right - 1];
                right--;
            }
            if (i < len - 1) {
                arr[i + 1] = 0;
            }
            i++;
        }
    }
    return arr;
};

// 给你一个整数数组 arr ，请你删除最小 5 % 的数字和最大 5 % 的数字后，剩余数字的平均值。

// 与 标准答案 误差在 10 - 5 的结果都被视为正确结果。



// 示例 1：

// 输入：arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]
// 输出：2.00000
// 解释：删除数组中最大和最小的元素后，所有元素都等于 2，所以平均值为 2 。
// 示例 2：

// 输入：arr = [6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]
// 输出：4.00000
// 示例 3：

// 输入：arr = [6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4]
// 输出：4.77778
// 示例 4：

// 输入：arr = [9, 7, 8, 7, 7, 8, 4, 4, 6, 8, 8, 7, 6, 8, 8, 9, 2, 6, 0, 0, 1, 10, 8, 6, 3, 3, 5, 1, 10, 9, 0, 7, 10, 0, 10, 4, 1, 10, 6, 9, 3, 6, 0, 0, 2, 7, 0, 6, 7, 2, 9, 7, 7, 3, 0, 1, 6, 1, 10, 3]
// 输出：5.27778
// 示例 5：

// 输入：arr = [4, 8, 4, 10, 0, 7, 1, 3, 7, 8, 8, 3, 4, 1, 6, 2, 1, 1, 8, 0, 9, 8, 0, 3, 9, 10, 3, 10, 1, 10, 7, 3, 2, 1, 4, 9, 10, 7, 6, 4, 0, 8, 5, 1, 2, 1, 6, 2, 5, 0, 7, 10, 9, 10, 3, 7, 10, 5, 8, 5, 7, 6, 7, 6, 10, 9, 5, 10, 5, 5, 7, 2, 10, 7, 7, 8, 2, 0, 1, 1]
// 输出：5.29167

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/mean-of-array-after-removing-some-elements
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var trimMean = function (arr) {
    let len = arr.length;
    let arrN = arr.sort((a, b) => (a - b)).slice(len * 0.05 | 0, len * 0.95 | 0);
    return arrN.reduce((current, val, key) => (current + val), 0) / arrN.length;
};



// 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

// 输入为三个整数：day、month 和 year，分别表示日、月、年。

// 您返回的结果必须是这几个值中的一个 { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" } 。



// 示例 1：

// 输入：day = 31, month = 8, year = 2019
// 输出："Saturday"
// 示例 2：

// 输入：day = 18, month = 7, year = 1999
// 输出："Sunday"
// 示例 3：

// 输入：day = 15, month = 8, year = 1993
// 输出："Sunday"


// 提示：

// 给出的日期一定是在 1971 到 2100 年之间的有效日期。

var dayOfTheWeek = function (day, month, year) {
    let num = new Date(year, month - 1, day).getDay();
    switch (num) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            break;
    }
};


// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。

// 请你统计并返回 grid 中 负数 的数目。



// 示例 1：

// 输入：grid = [
//     [4, 3, 2, -1], 
//     [3, 2, 1, -1],
//     [1, 1, 0, -2],
//     [-1, -1, -2, -3]
// ]
// 输出：8
// 解释：矩阵中共有 8 个负数。
// 示例 2：

// 输入：grid = [[3, 2], [1, 0]]
// 输出：0
// 示例 3：

// 输入：grid = [
// [1, -1],
// [-1, -1]
// ]
// 输出：3
// 示例 4：

// 输入：grid = [[-1]]
// 输出：1


// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
//     - 100 <= grid[i][j] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


var countNegatives = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 0) {
                res += 1;
            }
        }
    }
    return res;
};

// 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使(nums[i] - 1) * (nums[j] - 1) 取得最大值。

// 请你计算并返回该式的最大值。

//(a-1)*(b-1)=ab-a-b+1;

// 示例 1：

// 输入：nums = [3, 4, 5, 2]
// 输出：12
// 解释：如果选择下标 i = 1 和 j = 2（下标从 0 开始），则可以获得最大值，(nums[1] - 1) * (nums[2] - 1) = (4 - 1) * (5 - 1) = 3 * 4 = 12 。
// 示例 2：

// 输入：nums = [1, 5, 4, 5]
// 输出：16
// 解释：选择下标 i = 1 和 j = 3（下标从 0 开始），则可以获得最大值(5 - 1) * (5 - 1) = 16 。
// 示例 3：

// 输入：nums = [3, 7]
// 输出：12


// 提示：

// 2 <= nums.length <= 500
// 1 <= nums[i] <= 10 ^ 3

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//a和b为正的时候，值最大的时候，则乘积最大
//a和b为负的时候，值最大的时候，则乘积最大
//一正一负的时候，正数最小，负数最大，乘积最大

// 题目中都是正数
var maxProduct = function (nums) {
    let len = nums.length;
    if (len === 2) {
        return (nums[0] - 1) * (nums[1] - 1);
    }
    let res = [nums[0], nums[1]].sort((a, b) => a - b);
    for (let i = 2; i < len; i++) {
        if (nums[i] > res[0]) {
            res[0] = nums[i];
            res.sort((a, b) => a - b);
        }
    }
    return (res[0] - 1) * (res[1] - 1);
};


// 给你两个整数，n 和 start 。

// 数组 nums 定义为：nums[i] = start + 2 * i（下标从 0 开始）且 n == nums.length 。

// 请返回 nums 中所有元素按位异或（XOR）后得到的结果。



// 示例 1：

// 输入：n = 5, start = 0
// 输出：8
// 解释：数组 nums 为[0, 2, 4, 6, 8]，其中(0 ^ 2 ^ 4 ^ 6 ^ 8) = 8 。
// "^" 为按位异或 XOR 运算符。
// 示例 2：

// 输入：n = 4, start = 3
// 输出：8
// 解释：数组 nums 为[3, 5, 7, 9]，其中(3 ^ 5 ^ 7 ^ 9) = 8.
// 示例 3：

// 输入：n = 1, start = 7
// 输出：7
// 示例 4：

// 输入：n = 10, start = 5
// 输出：2

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/xor-operation-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//输出的数组为连续的奇数或者连续的偶数，即每个数字相差2、

var xorOperation = function (n, start) {
    let res = start + 2 * 0;
    for (let i = 1; i < n; i++) {
        res ^= (start + 2 * i);
    }
    return res;
};
// xorOperation(5, 0)
// 给你一个正整数数组 arr，请你找出一个长度为 m 且在数组中至少重复 k 次的模式。

// 模式 是由一个或多个值组成的子数组（连续的子序列），连续 重复多次但 不重叠 。 模式由其长度和重复次数定义。

// 如果数组中存在至少重复 k 次且长度为 m 的模式，则返回 true ，否则返回  false 。



// 示例 1：

// 输入：arr = [1, 2, 4, 4, 4, 4], m = 1, k = 3
// 输出：true
// 解释：模式(4) 的长度为 1 ，且连续重复 4 次。注意，模式可以重复 k 次或更多次，但不能少于 k 次。
// 示例 2：

// 输入：arr = [1, 2, 1, 2, 1, 1, 1, 3], m = 2, k = 2
// 输出：true
// 解释：模式(1, 2) 长度为 2 ，且连续重复 2 次。另一个符合题意的模式是(2, 1) ，同样重复 2 次。
// 示例 3：

// 输入：arr = [1, 2, 1, 2, 1, 3], m = 2, k = 3
// 输出：false
// 解释：模式(1, 2) 长度为 2 ，但是只连续重复 2 次。不存在长度为 2 且至少重复 3 次的模式。
// 示例 4：

// 输入：arr = [1, 2, 3, 1, 2], m = 2, k = 2
// 输出：false
// 解释：模式(1, 2) 出现 2 次但并不连续，所以不能算作连续重复 2 次。
// 示例 5：

// 输入：arr = [2, 2, 2, 2], m = 2, k = 3
// 输出：false
// 解释：长度为 2 的模式只有(2, 2) ，但是只连续重复 2 次。注意，不能计算重叠的重复次数。


// 提示：

// 2 <= arr.length <= 100
// 1 <= arr[i] <= 100
// 1 <= m <= 100
// 2 <= k <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var containsPattern = function (arr, m, k) {
    let len = arr.length;
    for (let i = 0; i < len - m * k + 1; i++) {
        let mol = arr.slice(i, i + m).toString();//模
        var num = 1;//模的数量
        for (let j = i + m; j < len - m + 1; j += m) {
            if (arr.slice(j, j + m).toString() === mol) {
                num += 1;
                if (num >= k) {
                    return true;
                }
            } else {
                break;
            }
        }
    }
    //console.log(num, k)
    return num >= k;
};
// console.log(containsPattern([2, 2, 2, 2], 2, 2))

// 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

// 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x



// 示例 1：

// 输入：n = 16
// 输出：true
// 示例 2：

// 输入：n = 5
// 输出：false
// 示例 3：

// 输入：n = 1
// 输出：true


// 提示：

// -231 <= n <= 231 - 1


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/power-of-four
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var isPowerOfFour = function (n) {
    if (n === 1) {
        return true;
    }
    if (n & 1 === 1) {
        return false;
    }
    let start = 4;
    let i = 1;
    while (Math.pow(start, i) <= n) {
        if (Math.pow(start, i) === n) {
            return true;
        }
        i += 1;
    }
    return false;
};

// 在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄，他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。
// 现在，给出提莫对艾希的攻击时间序列和提莫攻击的中毒持续时间，你需要输出艾希的中毒状态总时长。

// 你可以认为提莫在给定的时间点进行攻击，并立即使艾希处于中毒状态。



// 示例1:

// 输入: [1, 4], 2  [1, 4], 4  [1,2] 4  [1,2,3,] 4 [1,2,7] 4 [1,3,5,7,12] 4 [1,3] 2
// 输出: 4
// 原因: 第 1 秒初，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒末结束。
// 第 4 秒初，提莫再次攻击艾希，使得艾希获得另外 2 秒中毒时间。
// 所以最终输出 4 秒。
// 示例2:

// 输入: [1, 2], 2
// 输出: 3
// 原因: 第 1 秒初，提莫开始对艾希进行攻击并使其立即中毒。中毒状态会维持 2 秒钟，直到第 2 秒末结束。
// 但是第 2 秒初，提莫再次攻击了已经处于中毒状态的艾希。
// 由于中毒状态不可叠加，提莫在第 2 秒初的这次攻击会在第 3 秒末结束。
// 所以最终输出 3 。


// 提示：

// 你可以假定时间序列数组的总长度不超过 10000。
// 你可以假定提莫攻击时间序列中的数字和提莫攻击的中毒持续时间都是非负整数，并且不超过 10, 000, 000。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/teemo-attacking
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//重新射击的时候，毒的时间会从新从0开始
var findPoisonedDuration = function (timeSeries, duration) {
    let len = timeSeries.length;
    if (len === 1) {
        return duration;
    }
    let res = 0;
    for (let i = 1; i < len; i++) {
        if (timeSeries[i] - timeSeries[i - 1] <= duration) {
            res += timeSeries[i] - timeSeries[i - 1];
        } else {
            res += duration;
        }
    }
    res += duration;
    return res;
};

// 给你一个大小为 rows x cols 的矩阵 mat，其中 mat[i][j] 是 0 或 1，请返回 矩阵 mat 中特殊位置的数目 。

// 特殊位置 定义：如果 mat[i][j] == 1 并且第 i 行和第 j 列中的所有其他元素均为 0（行和列的下标均 从 0 开始 ），则位置(i, j) 被称为特殊位置。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/special-positions-in-a-binary-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：mat = [[1, 0, 0],
// [0, 0, 1],
// [1, 0, 0]]
// 输出：1
// 解释：(1, 2) 是一个特殊位置，因为 mat[1][2] == 1 且所处的行和列上所有其他元素都是 0

// rows == mat.length
// cols == mat[i].length
// 1 <= rows, cols <= 100
// mat[i][j] 是 0 或 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/special-positions-in-a-binary-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var numSpecial = function (mat) {
    let oneArr = [];
    let rows = mat.length;
    let cols = mat[0].length;
    let res = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1) {
                oneArr.push([i, j]);
            }
        }
    }
    for (let i = 0; i < oneArr.length - 1; i++) {
        for (let j = i + 1; j < oneArr.length; j++) {
            if (oneArr[i][0] === oneArr[j][0] || oneArr[i][1] === oneArr[j][1]) {
                oneArr[i][2] = true;
                oneArr[j][2] = true;
            }
        }
    }
    for (let i = 0; i < oneArr.length; i++) {
        if (!oneArr[i][2]) {
            res += 1;
        }
    }
    return res;
};

//1.用一个数组记录行的和与列的和
//2.当前项是1并且行的和是1，列的和是1，是特殊位置
var numSpecial = function (mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let rowArr = [];
    let colArr = [];
    let res = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1) {
                rowArr[i] === undefined ? rowArr[i] = 1 : rowArr[i] += 1;
                colArr[j] === undefined ? colArr[j] = 1 : colArr[j] += 1;
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1 && rowArr[i] === 1 && colArr[j] === 1) {
                res += 1;
            }
        }
    }
    return res;
}

// 给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。

// 请你返回排序后的数组。



// 示例 1：

// 输入：nums = [1, 1, 2, 2, 2, 3]
// 输出：[3, 1, 1, 2, 2, 2]
// 解释：'3' 频率为 1，'1' 频率为 2，'2' 频率为 3 。
// 示例 2：

// 输入：nums = [2, 3, 1, 3, 2]
// 输出：[1, 3, 3, 2, 2]
// 解释：'2' 和 '3' 频率都为 2 ，所以它们之间按照数值本身降序排序。
// 示例 3：

// 输入：nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
// 输出：[5, -1, 4, 4, -6, -6, 1, 1, 1]


// 提示：

// 1 <= nums.length <= 100
//     - 100 <= nums[i] <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-array-by-increasing-frequency
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var frequencySort = function (nums) {
    let len = nums.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1);
    }
    //let res = []
    let res = Array.from(map);
    console.log(res);
    // for (var [key, value] of map) {
    //     res.push([key, value]);
    // }
    for (let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[i][1] > res[j][1] || (res[i][1] === res[j][1] && res[i][0] < res[j][0])) {
                [res[i], res[j]] = [res[j], res[i]];
            }
        }
    }
    let arr = [];
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i][1]; j++) {
            arr.push(res[i][0])
        }
    }
    console.log(arr)
    return arr;
};
// frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2, 2, 1]
// 输出: 1
// 示例 2:

// 输入: [4, 1, 2, 1, 2]
// 输出: 4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/single-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//相同的数异或（XOR）运算结果是0，任何数和0抑或，等于原数
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};

// 统计所有小于非负整数 n 的质数的数量。

var countPrimes = function (n) {
    if (n === 0 || n === 1) {
        return 0;
    }
    let res = 1;//2是质数
    for (let i = 3; i < n; i++) {
        let con = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                con = false;
                break;
            }
        }
        con && res++;
    }
    return res;
};


var countPrimes = function (n) {//数量个数是n
    let res = 0;
    let conArr = new Array(n);//长度是n
    for (let i = 2; i < n; i++) {
        if (!conArr[i]) {
            res++;
            for (let j = i; j < n; j += i) {//去除i的倍数
                conArr[j] = true;
            }
        }
    }
    return res;
};

// 给定两个数组，编写一个函数来计算它们的交集。



// 示例 1：

// 输入：nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// 输出：[2, 2]
// 示例 2:

// 输入：nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// 输出：[4, 9]


// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
// 进阶：

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var intersect = function (nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let map1 = {};
    let res = [];
    for (let i = 0; i < len1; i++) {
        map1[nums1[i]] ? map1[nums1[i]] += 1 : map1[nums1[i]] = 1;
    }
    console.log(map1);
    for (let i = 0; i < len2; i++) {
        console.log(map1[nums2[i]])
        if (map1[nums2[i]] > 0) {
            res.push(nums2[i]);
            map1[nums2[i]]--;
        }
    }
    console.log(res)
    return res;

};
//intersect([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4])

// 给定一个长度为 n 的 非空 整数数组，每次操作将会使 n - 1 个元素增加 1。找出让数组所有元素相等的最小操作次数。



// 示例：

// 输入：
// [1, 2, 3]
// 输出：
// 3
// 解释：
// 只需要3次操作（注意每次操作会增加两个元素的值）：
// [1, 2, 3]  => [2, 3, 3]  => [3, 4, 3]  => [4, 4, 4]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//找出最小的数，然后用其他数减去最小的数的和即为结果
var minMoves = function (nums) {
    let min = Math.min(...nums);
    return nums.reduce((current, value, index) => (current += value - min), 0)
};
// console.log(minMoves([1, 5, 7, 100, 99]))

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。



// 示例 1：

// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]


// 提示：

// 0 <= nums.length <= 3000
//     - 105 <= nums[i] <= 105

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//break 终止当前循环，并执行之后的代码
//continue continue之后的代码不执行，并继续当前循环
var threeSum = function (nums) {
    let len = nums.length;
    let res = [];
    if (len < 3) {
        return []
    }
    nums.sort((a, b) => (a - b));
    // 双指针
    for (let i = 0; i < len; i++) {
        let left = i + 1;
        let right = len - 1;
        if (nums[i] === nums[i - 1]) {//相等，则跳过
            continue;
        }
        if (nums[i] > 0) {//当前数比0大的时候，直接返回
            //console.log(res)
            return res;
        }
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++;
            } else {//和等于0
                while (nums[right] === nums[right - 1] && left < right) {//右边的数和下一个数相同
                    right--;
                }
                while (nums[left] === nums[left + 1] && left < right) {//左边的数和下一个数相同
                    left++;
                }
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            }
        }
    }
    //console.log(res)
    return res;
};
//console.log(threeSum([-2, 0, 1, 1, 2]))//-4,-1,-1,0,1,2

// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。



// 示例 1：

// 输入：nums = [2, 0, 2, 1, 1, 0]
// 输出：[0, 0, 1, 1, 2, 2]
// 示例 2：

// 输入：nums = [2, 0, 1]
// 输出：[0, 1, 2]
// 示例 3：

// 输入：nums = [0]
// 输出：[0]
// 示例 4：

// 输入：nums = [1]
// 输出：[1]


// 提示：

// n == nums.length
// 1 <= n <= 300
// nums[i] 为 0、1 或 2


// 进阶：

// 你可以不使用代码库中的排序函数来解决这道题吗？
// 你能想出一个仅使用常数空间的一趟扫描算法吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-colors
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let len = nums.length;
    let sero = [];
    let one = [];
    let two = [];
    for (let i = 0; i < len; i++) {
        nums[i] === 0 ? sero.push(0) : nums[i] === 1 ? one.push(1) : two.push(2);
    }
    return [...sero, ...one, ...two]
};
//console.log(sortColors([2, 0, 2, 1, 1, 0])) [2,2,2,2,2,,2,2]
var sortColors = function (nums) {
    let len = nums.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        while (nums[left] === 0 && left < right) {
            left++;
        }
        while (nums[right] !== 0 && left < right) {
            right--;
        }
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    left = 0;
    right = len - 1;
    while (left < right) {
        while (nums[left] <= 1 && left < right) {
            left++;
        }
        while (nums[right] > 1 && left < right) {
            right--;
        }
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    console.log(nums)
    return nums;
};

var sortColors = (nums) => {
    var n0 = 0, n1 = 0;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        nums[i] = 2;
        if (num < 2) {
            nums[n1++] = 1;
        }
        if (num < 1) {
            nums[n0++] = 0;
        }
    }
    console.log(nums)
}
// sortColors([2, 0, 2, 1, 1, 0])



// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。



// 示例 1：

// 输入：intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]  [[1,5],[2,20],[8,10],[15,18]]
// 输出：[[1, 6], [8, 10], [15, 18]]
// 解释：区间[1, 3] 和[2, 6] 重叠, 将它们合并为[1, 6].
//     示例 2：

// 输入：intervals = [[1, 4], [4, 5]]
// 输出：[[1, 5]]
// 解释：区间[1, 4] 和[4, 5] 可被视为重叠区间。

var merge = function (intervals) {
    //二维数组排序，第一个数小的在前面
    let res = [];
    let len = intervals.length;
    let start = 0;
    if (len === 1) {
        return intervals;
    }
    //console.log(intervals.sort((a, b) => a[0] - b[0]))
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < len - 1; i++) {
        let max = intervals[i][1];
        while (i < len - 1 && intervals[i + 1][0] <= max) {//有交集
            max = Math.max(max, intervals[i + 1][1]);//取交集的最大值，和后面的继续比较
            i++;
        }
        res.push([intervals[start][0], max]);
        //console.log(res);
        start = i + 1;
    }
    // 判断最有一个数是否需要加上
    if (res[res.length - 1][1] < intervals[len - 1][0]) {
        res.push(intervals[len - 1]);
    }
    //console.log(res);
    return res;
};
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));