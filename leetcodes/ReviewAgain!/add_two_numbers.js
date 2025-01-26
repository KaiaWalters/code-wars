// first try 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   
    let pointerOne = new ListNode(0, l1)
    let pointerTwo = new ListNode(0, l2)

    let listSum = addUpList(l2) + addUpList(l1)

    listSum = listSum.toString().split("")

    let current = null

    listSum.forEach((char) => {
       let node = new ListNode(parseInt(char))
        if(current  == null) {
            current = node
        } else {
            current.next = node
            current = solution.next
        } 
    })

    console.log(solution)



    return solution

};


var addUpList = (pointer) => {
    let count = 0 
    let sum = 0 

    while(pointer != null) {
        let temp = pointer.val * Math.pow(10, count)
        pointer = pointer.next
        sum+=temp
        count += 1 
    }

    return sum 
}


// online solution 

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    // Traverse both linked lists
    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        // Add new node with the sum's digit
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to the next nodes
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};


