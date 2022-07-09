var intersect = function(nums1, nums2) {
    let intersection = []
    nums1.forEach((x, i) => {
        if(nums2.includes(x)){
            nums2.splice(nums2.indexOf(x), 1)
            intersection.push(x)
        } 
    })
    return intersection
};
// I did this so that I would not have to sort the algorithmn 
// N/A
//What if elements of nums2 are stored on disk,
// and the memory is limited such that you cannot load all elements into the memory at once?
