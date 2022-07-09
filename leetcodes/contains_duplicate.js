var containsDuplicate = function(nums) {
    let set = []
    let containsDuplicate = false
    nums.forEach(x => {
        if(set.includes(x)) {
            containsDuplicate = true
        }else {
            set.push(x)
        }
    })
    console.log(containsDuplicate)
    return containsDuplicate
}

containsDuplicate([1,2,3,4,5])