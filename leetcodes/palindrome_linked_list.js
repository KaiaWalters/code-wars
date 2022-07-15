//palidrom improve the last check so that you do not have to reverse it and compre it 
//instead you compare the first one to the last one and so on 
let head = {val: 1, next: {val: 2, next: { val: 3, next: {val: 2, next: {val: 1, next: null}}}}}

var isPalindrome = function(head) {
    let current = head 
    let arr = []
    while(current) {
        arr.push(current.val)
        current = current.next
    }

    for(i = 0;  i < Math.floor(arr.length/2); i++) { 
        let j = arr.length - i - 1
       
        if(arr[i] != arr[j]) {
            return false
        }
    }
    return true

};


isPalindrome(head)







   //traverse the first node in the linked list 
    //identify the last node in the linked list 
    //identify the middle of the linked list 
    //assign each node to be head and tail variable 
    //traverse from head to mid of linked list 
    //traverse from tail to inked list 
    //compare each node along the way 
    //if one is not there this is not a palindrome 
    //if yes palindrome