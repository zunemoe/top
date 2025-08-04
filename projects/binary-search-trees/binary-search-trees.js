console.log("Binary Search Trees Module Loaded");
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    buildTree(array) {
        let uniqueValues = Array.from(new Set(array)).sort((a, b) => a - b);

        const buildSubTree = (values) => {
            if (values.length === 0) return null;
            const midIndex = Math.floor(values.length / 2);
            const node = new Node(values[midIndex]);
            node.left = buildSubTree(values.slice(0, midIndex));
            node.right = buildSubTree(values.slice(midIndex + 1));
            return node;
        }

        const mid = Math.floor(uniqueValues.length / 2);
        this.root = new Node(uniqueValues[mid]);
        this.root.left = buildSubTree(uniqueValues.slice(0, mid));
        this.root.right = buildSubTree(uniqueValues.slice(mid + 1));
        this.size = uniqueValues.length;

        return this.root;
    }

    insert(value) {
        const insertNode = (node, value) => {
            if (node === null) {
                this.size++;
                return new Node(value);
            }
            if (value < node.value) {
                node.left = insertNode(node.left, value);
            } else if (value > node.value) {
                node.right = insertNode(node.right, value);
            } else {
                // Value already exists, do not insert duplicates
                return node;
            }
            return node; // Return the modified node
        }

        this.root = insertNode(this.root, value);

        if (!this.isBalanced()) this.rebalance();

        return this.root;
    }

    delete(value) {
        // delete the leaf node
        // delete the node with one child
        // delete the node with two children
        const deleteNode = (node, value) => {
            if (node === null) return null;

            if (value < node.value) node.left = deleteNode(node.left, value);
            else if (value > node.value) node.right = deleteNode(node.right, value);
            else {
                this.size--;
                if (node.left === null && node.right === null) return null; // Leaf node
                else if (node.left === null) return node.right; // Node with only right child
                else if (node.right === null) return node.left; // Node with only left child
                else {
                    // Node with two children: find the in-order successor (smallest in the right subtree)
                    let successor = node.right;

                    while (successor.left !== null) successor = successor.left; 

                    node.value = successor.value; // Replace value with successor's value
                    node.right = deleteNode(node.right, successor.value); // Delete the successor

                    return node; // Return the modified node
                }                
            }
            return node; // Return the modified node
        }
        this.root = deleteNode(this.root, value);

        if (!this.isBalanced()) this.rebalance();

        return this.root;
    }

    find(value) {
        const findNode = (node, value) => {
            if (node === null) return null;
            if (value === node.value) return node;
            if (value < node.value) return findNode(node.left, value);
            return findNode(node.right, value);            
        }

        return findNode(this.root, value);
    }

    levelOrderForEach(callback) {
        if (this.root === null) return;

        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
            callback(current.value);
        }        
    }

    inOrderForEach(callback) {
        // left -> root -> right
        if (this.root === null) return;

        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            callback(node.value);
            traverse(node.right);
        }

        traverse(this.root);
    }

    preOrderForEach(callback) {
        // root -> left -> right
        if (this.root === null) return;

        const traverse = (node) => {
            if (node === null) return;
            callback(node.value);
            traverse(node.left);
            traverse(node.right);            
        }
        traverse(this.root);
    }

    postOrderForEach(callback) {
        // left -> right -> root
        if (this.root === null) return;

        const traverse = (node) => {
            if (node === null) return;
            traverse(node.left);
            traverse(node.right);
            callback(node.value);
        }

        traverse(this.root);
    }

    height(value) {
        const findHeight = (node) => {
            if (node === null) return -1; // Value not found
            return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
        }

        const node = this.find(value);
        if (node === null) return null; // Value not found
        return findHeight(node);
    }

    depth(value) {
        const findDepth = (node, value, depth) => {
            if (node === null) return -1; // Value not found
            if (node.value === value) return depth;
            if (value < node.value) return findDepth(node.left, value, depth + 1);
            return findDepth(node.right, value, depth + 1);
        }
        const depth = findDepth(this.root, value, 0);
        return depth === -1 ? null : depth;
    }

    isBalanced() {
        const checkBalance = (node) => {
            if (node === null) return 0; // Height of an empty subtree is 0
            const leftHeight = checkBalance(node.left);
            if (leftHeight === -1) return -1; // Left subtree is unbalanced
            const rightHeight = checkBalance(node.right);
            if (rightHeight === -1) return -1; // Right subtree is unbalanced
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1; // Current node is unbalanced
            }
            return Math.max(leftHeight, rightHeight) + 1; // Return height of the subtree
        }
        return checkBalance(this.root) !== -1; // If the result is -1, the tree is unbalanced
    }

    rebalance() {
        if (this.root === null) return;
        const values = [];
        this.inOrderForEach(value => values.push(value)); // Collect all values in sorted order
        this.root = this.buildTree(values); // Rebuild the tree with the sorted values
        this.size = values.length; // Update the size of the tree
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

let bst = new BinarySearchTree();
let array = [10, 3, 1, 4, 1, 5, 9];
bst.buildTree(array);
prettyPrint(bst.root);
bst.insert(8);
prettyPrint(bst.root);
bst.insert(6);
bst.insert(7);
bst.insert(11);
bst.insert(12);
prettyPrint(bst.root);
console.log("Height of 4:", bst.height(4));
console.log("Depth of 4:", bst.depth(4));
console.log("Is balanced:", bst.isBalanced());
bst.delete(3);
prettyPrint(bst.root);