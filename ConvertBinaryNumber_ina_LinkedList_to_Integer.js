/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let deciNumber = 0;
  while (head != null) {
    deciNumber = (deciNumber << 1) | head.val;
    head = head.next;
  }
  return deciNumber;
};

// var getDecimalValue = function(head) {
// 	let deciNumber = 0;
// 	while (head != null) {
// 		deciNumber = deciNumber * 2 + head.val;
// 		head = head.next;
// 	}
// 	return deciNumber;
// };
