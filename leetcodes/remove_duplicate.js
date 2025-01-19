function removeDuplicates(arr , n) {
    let queue = []
    for(i=0; i <= n; i++) {
         if(queue.includes(arr[i])){
            arr.splice(i,1)
            console.log(queue)
         } else {
            queue.push(arr[i]) 
         }
    }
}


removeDuplicates([1,1,2,3,5,8,8,7], 10)