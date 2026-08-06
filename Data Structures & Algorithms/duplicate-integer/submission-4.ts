class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numbers = new Set(nums);
        const hasRepeatedNumber: boolean = nums.length !== numbers.size;
        return hasRepeatedNumber
    }
}
