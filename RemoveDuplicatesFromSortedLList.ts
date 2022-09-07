/*
  Created on Wed Sep 07 2022
  Djordje Antic
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Remove duplicates from sorted Linked List                               │
  └─────────────────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────────────────┐
  │   Input: [1] -> [1] -> [2] -> [3] -> [3]                                │
  │   Output: [1] -> [2] -> [3]                                             │
  └─────────────────────────────────────────────────────────────────────────┘
 */

class ListNode {
    public data: any = null;
    public next: ListNode;
}

function removeDuplicates(list: ListNode | null) {

    let current = new ListNode()
    current = list

    if(current === null) return

    while (current.next !== null) {
        if(current.data == current.next.data){
            current.next = current.next.next
        }

        else current = current.next
    }
    
    return
};
