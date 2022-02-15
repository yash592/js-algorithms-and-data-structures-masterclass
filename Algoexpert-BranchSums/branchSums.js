// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    // Write your code here.
    const result = []

    function traverse(root, runningSum) {

        const sum = runningSum + root.value
        if (root.left) traverse(root.left, sum);
        if (!root.left && !root.right) result.push(sum);
        if (root.right) traverse(root.right, sum);
    }
    traverse(root, 0);
    return result

}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;