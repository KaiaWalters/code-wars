

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */


var containsNearbyDuplicate = function(nums, k) {
    let uniqueSet = new Set()

    for(let right = 0; right <= nums.length; right++) {
        nums[right - k] === nums[right] ?  uniqueSet.add("true") : uniqueSet.add("false")
    }

    let solution = uniqueSet.has("true") ? true : false
    return solution 
};


//Tests

let nums = []
let k = 0
let expectation = false
let actual = false 

var tests = function() {
    thereIsNoNearbyDup()
    thereIsANearbyDup() 
    // numsArrayIsLessThanK() 
}
var thereIsNoNearbyDup = function() {  
    nums = [1,2,5,4,6,7,9], k = 3
    expectation = false
    let actual = containsNearbyDuplicate(nums, k)
    if(expectation === actual ) {
        console.log("thereIsNoNearbyDup, Passed")
    }

}

var thereIsANearbyDup = function() { 
    nums = [1,2,5,4,6,7,9,6,4], k = 5
    expectation = true
    let actual = containsNearbyDuplicate(nums, k)
    console.log(actual)
    expectation === actual ?  console.log("thereIsANearbyDup, Passed") : console.log("thereIsANearbyDup, False")
}


tests()

//set can only contain k elements
// if there are no matches

// [1,3,4,2,4,5]

// 2





// var maximumSubarraySum = function (nums, k) {
    //     let uniqueSet = new Set(); 
//     let currentSum = 0;        
//     let maxSum = 0;            
//     let left = 0;      

//     for (let right = 0; right < nums.length; right++) {
       
//         while (uniqueSet.has(nums[right])) {
//             console.log("uniqueSet", uniqueSet)
//             console.log("right value",nums[right])
//             currentSum -= nums[left];
//             uniqueSet.delete(nums[left]);
//             left++;
//             console.log("left", left)
//         }

        
//         uniqueSet.add(nums[right]);
//         console.log("unique", uniqueSet)
//         currentSum += nums[right];

//         console.log("right", right)


       
//         if (uniqueSet.size === k) {
//             maxSum = Math.max(maxSum, currentSum);
//             console.log("max sum", maxSum)
//             currentSum -= nums[left];
//             uniqueSet.delete(nums[left]);
//             left++;
//         }
//     }

//     return maxSum;
// };


// maximumSubarraySum([1,5,4,2,9,9,9], 3)