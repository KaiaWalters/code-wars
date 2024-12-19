


// var rob = function(nums) {
    
//     //sum the even indexed elements and the odd indexed elements 
//     // compare the two values
//     //return the sum of the highest group 
//     let even = 0
//     let odd = 0
//     nums.forEach((el, index) => {
//         if(index % 2 == 0){
//             even += el
//         }else {
//             odd += el
//         }
//     })
    
//     return odd > even ? odd : even  
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var rob = function(nums) {
    
//     //sum the even indexed elements and the odd indexed elements 
//     // compare the two values
//     //return the sum of the highest group 
    
    
//     //find the element in the array with the highest value, 
//     //find the second element in the array with the highest value, 
//     //verify that the second highest does not have an index greater than the previous high value 
//     //sum them 
//     // repeat 

//     let sum = Math.max(...nums)
//     let greatest = Math.max(...nums)
//     let start = nums.indexOf(sum)
    
//     while(nums){
//         nums.forEach((el, index) => {
//             if(index != start && index != index - 1 && index != start + 1) {
//                 if( el >= sum) {
//                     sum += el
//                     greatest = el
//                 } else {
//                     nums[index] = 0
//                 }
//             }
//         })
//     }
    
//     return sum
// };



var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]

    // Keep track of the max money we can make with x amount of houses available
    // dp[0] = max amount if we only have the first house to rob
    // dp[1] = max amount if we only have the first 2 houses to rob
    let potentialHauls = [nums[0], Math.max(nums[0], nums[1])];
    //what is this strategy called? We are holding on to a list of the largest sums we have come across in the array so far 
    //then comparing the sums to later sums that we are able to make whil going through
    //the array.
    for (let i = 2; i < nums.length; i++) {
        // Compare current max with the previous max
        // Check if the money from the current house + max of 2 houses away is greater than the current max
        // the new max that is being tested,   current max
        potentialHauls[i] = Math.max(potentialHauls[i-2] + nums[i], potentialHauls[i-1]);

        //because we are unable to rob the adjacent house we compare the max amount of 
        //money that we can get from the sum of the current house and the house 2 places over 
        //to the sum of the house right next to it that we can not rob
        //which ever is higher, we will go with 
    }
    return potentialHauls[nums.length - 1];
};

rob([2,7,9,3,1])

//I did code today, I worked on the rn-starter project. Give me my green square!