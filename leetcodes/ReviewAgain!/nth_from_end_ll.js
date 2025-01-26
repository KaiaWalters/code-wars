
// Solution in 30 min 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    return traverse(head, head, n )
};


var traverse = (current, head, n) => {
    let temp = current 
            if(temp.val === n) {
                if(temp.val === head.val) {
                    current = temp.next
                    return head
                 }else {
                    current = temp.prev
                    current.next = temp.next
                    return head
                }
            } else {
                current = temp.next
                traverse(current, n)  
            }  
}

// AI solution 

var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle edge cases (e.g., removing the first node)
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    // Move `fast` pointer `n + 1` steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers until `fast` reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from the end
    slow.next = slow.next.next;

    // Return the head of the modified list
    return dummy.next;
};
