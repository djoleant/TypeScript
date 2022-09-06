//DEFINITION OF LINKED LIST in TS


class ListNode<T> {
     val: T;
     next: ListNode<T> | null;
     constructor(val?: number, next?: ListNode<T> | null) {
         this.val = (val===undefined ? 0 : val);
         this.next = (next===undefined ? null : next);
     }
}

class LinkedList<T> {
     head: ListNode<T> | null;
     
     append(data: T): void {
          if(!this.head) {
               this.head = new ListNode(data);
          } else {
               let current = this.head;
               while(current.next != null) {
                    current = current.next;
               }
               current.next = new ListNode(data);
          }
     }
     
     search(data: T): ListNode<T> | null {
          let current = this.head;
          while (current) {
               if (this.comparator(current.data, data)) {
                    return current;
               }
          current = current.next;
          }
     return null;
     }
}

