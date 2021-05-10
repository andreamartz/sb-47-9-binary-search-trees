class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  /** Strategy:
   * if the tree has no root:
   *   - create a root from the first value inserted
   * if the tree has a root:
   *   - create a new node to hold the value being inserted
   *   - initialize the variable `current` to hold the root node
   *   - Iterate as long as `current` is not null:
   *     - compare the value on the new node with current.val to determine which side it belongs on
   *       - if current.val === node.val, return the tree
   *       - reassign current to be the next child node in the correct direction
   *   - Done iterating now, so `current` should be null. Assign `current` to be the new Node.
   *   - Return the tree.
   * 
   * THe assignment does not say what to do when the value already exists in the tree. I assume that in that case, the value should not be inserted and instead the tree should just be returned unchanged.
   */
  insert(val) {
    const node = new Node(val);

    // if the tree has no root
    if (!this.root) {
      this.root = node;
      return this;
    }

    // at this point, we know the tree already has a root
    // and we want to find the right place to insert it into the tree
    let current = this.root;

    // while the current node is not null
    while (current) {
      if (current.val === node.val) return this;

      // node value is less than current value
      if (node.val < current.val) {
        if (current.left === null) {
          current.left = node;
          return this; 
        } else {
          current = current.left;
        }
      // node value is greater than current value
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
