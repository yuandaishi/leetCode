/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let sameNumLen = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            sameNumLen += 1
        } else {
            if (sameNumLen > 2) {
                nums.splice(i - sameNumLen + 2, sameNumLen - 2);
                i = i - (sameNumLen - 2);
            }
            sameNumLen = 1;
        }
    }
    if (sameNumLen > 2) {
        nums.splice(2 - sameNumLen);
    }
    console.log(nums)
    return nums.length;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
// removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
// removeDuplicates([1, 1, 1, 1, 1, 1, 1]);
removeDuplicates([1, 1, 1]);