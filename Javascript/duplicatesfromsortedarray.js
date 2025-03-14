/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let record = new Map()
    let k = 0 
  
    for(i=0; i < nums.length; i++) {
      let current = nums[i]
  
      if(record.has(current)){
          record.set(current, record.get(current) + 1)
      }else {
          record.set(current, 1)
      }
  
      if(record.get(current) <= 2 ) {
          nums[k] = nums[i]
          k++
      }
    }
    return k 
  };