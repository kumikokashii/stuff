//https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //Two pointers. 1st for to be replaced. 2nd for finding next int.
    let currentInt = nums[0];
    let iToBeReplaced = 1;
    for (let j=1; j < nums.length; j++) {
        const value = nums[j];
        if (value !== currentInt) {
            nums[iToBeReplaced] = value;
            currentInt = value;
            iToBeReplaced += 1;
        } 
    }
    return iToBeReplaced;
};