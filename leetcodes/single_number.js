var singleNumber = function(nums) {
    nums.sort()
    for(let i=0; i <= nums.length; i++) {
        if(nums[i] == nums[i+1]) {
                i +=1  
        }else {
            return nums[i]
        }
    }
};

singleNumber([4,1,2,1,2])