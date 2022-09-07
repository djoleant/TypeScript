/*
  Created on Wed Sep 07 2022
  Djordje Antic
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Hash Table implementation                                               │
  └─────────────────────────────────────────────────────────────────────────┘
  
 */

class ListNode {
    public data: any = null;
    public next: ListNode;
    constructor(data: string, next: any){
        this.data = data
        this.next = next
    }
}

class HashTable {
    size: number
    data: ListNode[] = []
    constructor(size: number){
        this.size = size;
    }

    hash(value: string): number {
        let sum = value
                    .split("")
                    .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)
        
        let position = sum % this.size

        return position
    }

    insert(value: string): void {
        /* TODO: implement method */
    }

    search(value: string): string | null {
        /* TODO: implement method */
        return null
    }
}
