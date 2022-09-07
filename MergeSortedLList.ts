/*
  Created on Wed Sep 07 2022
  Djordje Antic
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Merge sorted Linked List                                                │
  └─────────────────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────────────────┐
  │   Input1: [1] -> [2] -> [4]                                             │
  │   Input2: [1] -> [3] -> [4]                                             │
  │   Output: [1] -> [1] -> [2] -> [3] -> [4] -> [4]                        │
  └─────────────────────────────────────────────────────────────────────────┘
 */

class ListNode {
    public data: any = null;
    public next: ListNode;
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let temp = new ListNode()
    temp.next = null

    while(1) {
        if (list1.next === null) {
            temp.next = list2
            break
        }
        else if (list2.next === null){
            temp.next = list1
            break
        }

        if(list1.data <= list2.data) {
            temp.next = list1
        }
        else {
            temp.next = list2
        }

        temp.next = temp.next.next
    }
    
    return temp;
};
