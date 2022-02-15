function findClosestValueInBst(tree, target) {
    // Write your code here.
    let current = tree;
    let closest = tree.value;
    while (current != null) {
        if (current.value === target) return current.value;
        if (Math.abs(target - closest) > Math.abs(target - current.value)) {
            closest = current.value;
        }
        if (target > current.value) {
            current = current.right;
        } else {
            current = current.left;
        }
    }
    return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}