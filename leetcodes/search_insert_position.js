

// var searchInsert = function(nums, target) {
//     let start = 0 
//     let end = nums.length - 1
//     let middle = Math.floor(nums.length/2)
//     //syntax error 
//     if(target === nums[middle]) {
//         return middle
//     }else if (target > nums[middle]){
//         for(let i=middle; i < nums.length; i++){
//             if(target === nums[i]){
//                 return i 
//             }
//         }
//     }else if (target < nums[middle]){
//         for(let i = middle; i >nums.length/2; i--){
//             if(target === nums[i]){
//                 return i 
//             }
//         }
//     }
// };



var searchInsert = function(nums, target) {
    for(let idx = 0; idx < nums.length; idx++) {
        console.table({idx: idx, currentNumber: nums[idx], target: target})

        if(nums[idx] === target) {
            return idx
        }

        if(nums[idx] > target) {
            return idx
        }
    }

    
}

searchInsert([1,3,4,5,6], 3)