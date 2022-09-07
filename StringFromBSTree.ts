/*
  Created on Wed Sep 07 2022
  Djordje Antic
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Construct string from binary tree                                       │
  └─────────────────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────────────────┐
  │         [1]                                                             │
  │         / \                                                             │
  │       [2] [3]                                                           │
  │      /   \                                                              │
  │     [4] [5]                                                             │
  │ Output: 1(2(4)(5))(3)                                                   │
  └─────────────────────────────────────────────────────────────────────────┘
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }


    public generateString(this): string {
        if (this == null)
            return "";
        if (this.left == null && this.right == null)
            return this.val + "";
        if (this.right == null)
            return this.val + "(" + this.generateString(this.left) + ")";
        return this.val + "(" + this.generateString(this.left) + ")(" + this.generateString(this.right) + ")";
    }
}


