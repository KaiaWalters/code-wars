


// //Sliding Window


// var minSubArrayLen = function(target, nums) {
//     //create two pointers   
//     //traverse the entire array using sliding window while value of subarray is less than target 
//     //track the length of the subarray to be returned when target is reached
//     nums.sort().reverse()

//     let minimalLength = 0 
//     let sum = 0
//     let left = 0

//     for(right = 0; right <= nums.length; right ++) {
//         //left pointer, right pointer
//         // add numbers to the sum until we reach the target 
        
//         if(sum < target) {
//             sum += nums[right]
//             minimalLength++  
//         } else if (sum > target) {
//             sum -= nums[left]
//             minimalLength-- 
            
//         } else if(sum === target) {
//             return minimalLength
//         }

//         console.log("sum",sum, "length",minimalLength)

//         left++
//     }

// };


var minSubArrayLen = function(target, nums) {
    let left = 0; // Left pointer
    let sum = 0; // Current sum of the subarray
    let minimalLength = Infinity; // Track the minimum length of subarray

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; // Expand the window by adding the right element

        // Shrink the window while the sum is greater than or equal to the target
        while (sum >= target) {
            minimalLength = Math.min(minimalLength, right - left + 1); // Update minimal length // ? 
            5 
            sum -= nums[left]; // Shrink the window from the left
            left++; // Move the left pointer
        }
        console.log("minimalLength", minimalLength, "right", right, "left", left)
    }

    

    // If no subarray meets the condition, return 0
    return minimalLength === Infinity ? 0 : minimalLength;
};

// Test case
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
