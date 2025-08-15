// https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// this solution uses a stack to store the first half of the linked list and then compares it with the second half
var isPalindrome = function(head) {
    let length = 0;

    let tail = head
    while(tail){
        length++
        tail = tail.next
    }
    let stack = []
    let counter = 0
    while(head){
        counter++
        if(counter>length/2){
            if(stack[stack.length-1] == head.val){
                console.log(stack[stack.length-1])
                stack.pop()
            }
        } else {
            stack.push(head.val)
        }
        head = head.next
    }
    return stack.length==0
};