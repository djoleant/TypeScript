/*
  Created on Tue Sep 06 2022
  Djordje Antic
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Reverse Linked List                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────────────────┐
  │   [a] -> [b] -> [c] -> [d]                                              │
  │   [d] -> [c] -> [b] -> [a]                                              │
  └─────────────────────────────────────────────────────────────────────────┘
 */



class LinkedListNode {
    public data: any = null;
    public next: LinkedListNode;
}

class LinkedList {
    public head: LinkedListNode;
    static head: any;

    public static fromArray(items: any[]): LinkedList {
        const LList = new LinkedList();

        LinkedList.head = items.reduceRight((acc, item) => {
            const LLNode = new LinkedListNode();
            LLNode.data = item;
            LLNode.next = acc;

            return LLNode;
        }, null);

        return LList;
    }


    public static reverse(list: LinkedList): LinkedList {
        const newLList = new LinkedList();
        let last: LinkedListNode = new LinkedListNode();
        let curr: LinkedListNode = list.head;

        while (curr !== null) {
            const newNode = new LinkedListNode();

            newNode.data = curr.data;
            newNode.next = last;

            last = newNode;
            curr = curr.next;
        }

        newLList.head = last;

        return newLList;
    }


}
