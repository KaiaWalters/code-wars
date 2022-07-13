// var singleNumber = function(nums) {
//     nums.sort()
//     for(let i=0; i <= nums.length; i++) {
//         if(nums[i] == nums[i+1]) {
//                 i +=1  
//         }else {
//             return nums[i]
//         }
//     }
// };

var singleNumber = function(nums) {
    let num = 0 
    for(let i=0; i <= nums.length; i++) {
        num ^= nums[i]
    }
    return num
}
singleNumber([4,1,2,1,2])