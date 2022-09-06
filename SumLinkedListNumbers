/*
  Created on Tue Sep 06 2022
  Djordje Antic
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Sum Linked List Numbers                                                 │
  └─────────────────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ [2] -> [4] -> [3]                                                       │
  │ [5] -> [6] -> [4]                                                       │
  │ -----------------                                                       │
  │ [7] -> [0] -> [8]                                                       │
  │                                                                         │
  │ Partial sums are [7,0,8] and final                                      │
  │ sum are digits in reverse order (807)                                   │
  └─────────────────────────────────────────────────────────────────────────┘
 */


import LinkedList from "./LinkedList.ts"

function addTwoNumbers(l1: LinkedList<number>, l2: LinkedList<number>): LinkedList<number> | null {
    let sumList = new LinkedList<number>();
    if (l1?.getLengthOfLList(l1.head) != l2?.getLengthOfLList(l2.head)) return null;

    let i;
    sumList.head = l1.head?.val + l2.head?.val;
    let tempNext = sumList.head?.next;
    let l1Next = l1.head?.next;
    let l2Next = l2.head?.next;
    for(i = 0; i < l1.getLengthOfLList(l1.head); i++){
        tempNext?.val = l1Next.val + l2Next?.val;
        tempNext = tempNext?.next;
        l1Next = l1Next?.val;
        l2Next = l2Next?.val;
    }

    return sumList;

};

function getLengthOfLList(l1: ListNode<number>) {
    if(l1 === null) return 0;
    if(l1.next === null) return 1;

    let count = 1;
    while (l1.next !== null) {
        count++;
        l1.next=l1.next.next;
    }

    return count;
};

