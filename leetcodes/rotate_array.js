var rotate = function(nums, k) {
    k = k % nums.length
    
    for(let i = 1; i <= k; i++) {
        let lastNumber = nums.pop()
        nums.unshift(lastNumber)
    }
    return nums
}