class Solution {

    hasDuplicate(nums) {
        const noDuplicate = new Set(nums)
        return noDuplicate.size !== nums.length
    }
}
