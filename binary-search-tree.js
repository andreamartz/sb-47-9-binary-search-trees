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
    const node = new Node(val);

    // if the tree has no root
    if (!this.root) {
      this.root = node;
      return this;
    }

    // at this point, we know the tree already has a root
    // and we want to find the right place to insert it into the tree
    let current = this.root;

    // compare node.val to current value
    // choose left or right
       // base case is when the left/right node chosen is null: assign node to it
       // recursive case is when the left/right node is not null: call insertHelper again

    function insertHelper() {
      if (current.val === node.val) return this;

      if (node.val < current.val) {
        if (current.left === null) {
          current.left = node;
        } else {
          current = current.left;
          return insertHelper();
        }
      // node value is greater than current value
      } else {
        if (current.right === null) {
          current.right = node;
        } else {
          current = current.right;
          return insertHelper();
        }
      }   
    }

    insertHelper();

    // return the tree
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
   
  /** Strategy:
   * Use the ordered nature of the BST to find the value
   */

  find(val) {
    let current = this.root;

    // while the current node is not null
    while (current) {
      console.log("CURRENT: ", current);
      if (current.val === val) return current;

      // node value is less than current value
      if (val < current.val) {
        if (current.left === null) {
          return undefined; 
        } else {
          current = current.left;
        }
      // node value is greater than current value
      } else {
        if (current.right === null) {
          return undefined;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */
  
  /** Strategy:
   * Base case 1: current === val: return current node
   * Base case 2: next node is null (means the value was not found) - return undefined
   * Recursive case: the current iteration has ended and current is not null - call findRecursively again
   */
  findRecursively(val, current = this.root) {
    if (current.val === val) return current;
    
    if (val < current.val) {
      if (current.left === null) {
        return undefined;
      } else {
        current = current.left;
        return this.findRecursively(val, current);
      }
    } else {
      if (current.right === null) {
        return undefined;
      } else {
        current = current.right;
        return this.findRecursively(val, current);
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return null;

    let current = this.root;
    const visited = [];
    
    function traverseHelper(current) {
      visited.push(current.val);
      if (current.left) traverseHelper(current.left);
      if (current.right) traverseHelper(current.right);
    }
    traverseHelper(current);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return null;

    let current = this.root;
    const visited = [];
    
    function traverseHelper(current) {
      if (current.left) traverseHelper(current.left);
      visited.push(current.val);
      if (current.right) traverseHelper(current.right);
    }
    traverseHelper(current);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return null;

    let current = this.root;
    const visited = [];
    
    function traverseHelper(current) {
      if (current.left) traverseHelper(current.left);
      if (current.right) traverseHelper(current.right);
      visited.push(current.val);
    }
    traverseHelper(current);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return null;

    const toVisitQueue = [this.root];
    const visited = [];
    let current;

    while(toVisitQueue.length) {
      current = toVisitQueue.shift();
      visited.push(current.val);
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return visited;
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

const binarySearchTree = new BinarySearchTree(); 

/** insert(val) */
console.log("INSERT 15:", binarySearchTree.insert(15));
console.log("INSERT 20:", binarySearchTree.insert(20));
console.log("INSERT 10:", binarySearchTree.insert(10));
console.log("INSERT 12:", binarySearchTree.insert(12));
// console.log(binarySearchTree.root.val);  // 15
// console.log(binarySearchTree.root.right.val);  // 20
// console.log(binarySearchTree.root.left.right.val);  // 12


/** insertRecursively(val) */
// console.log("INSERTRECURSIVELY 15:", binarySearchTree.insertRecursively(15));
// console.log(binarySearchTree.root.val);  // 15
// console.log(binarySearchTree.root.left);  // null
// console.log(binarySearchTree.root.right);  // null
// console.log("INSERTRECURSIVELY 20:", binarySearchTree.insertRecursively(20));
// console.log("INSERTRECURSIVELY 10:", binarySearchTree.insertRecursively(10));
// console.log("INSERTRECURSIVELY 12:", binarySearchTree.insertRecursively(12));
// console.log(binarySearchTree.root.val);  // 15
// console.log(binarySearchTree.root.right.val);  // 20
// console.log(binarySearchTree.root.left.right.val);  // 12


/** find(val) */
// var foundNode1 = binarySearchTree.find(20);
// console.log("FOUNDNODE1.VALUE:", foundNode1.val); // 20
// console.log("FOUNDNODE1.LEFT: ", foundNode1.left); // null
// console.log("FOUNDNODE1.RIGHT: ", foundNode1.right); // null

// var binarySearchTree2 = new BinarySearchTree();
// var foundNode2 = binarySearchTree2.find(120);
// console.log("FOUNDNODE2: ", foundNode2); // undefined


/** findRecursively(val) */
// var foundNode1 = binarySearchTree.findRecursively(20);
// console.log("FOUNDNODE1.VALUE: ", foundNode1.val); // 20
// console.log("FOUNDNODE1.VALUE: ", foundNode1.left); // null
// console.log("FOUNDNODE1.VALUE: ", foundNode1.right); // null

// var foundNode2 = binarySearchTree.findRecursively(120);
// console.log("FOUNDNODE2.VALUE: ", foundNode2); // undefined

/** dfSPreOrder */
console.log("BST.INSERT(1): ",binarySearchTree.insert(1));
console.log("BST.INSERT(5): ",binarySearchTree.insert(5));
console.log("BST.INSERT(50): ",binarySearchTree.insert(50));
// console.log("BST.DFSPREORDER(): ",binarySearchTree.dfsPreOrder()); // [15, 10, 1, 5, 12, 20, 50]

/** dfsInOrder */
// console.log("BST.DFSINORDER: ", binarySearchTree.dfsInOrder()); // [1, 5, 10, 12, 15, 20, 50]

/** dfsPostOrder */
console.log("BST.DFSPOSTORDER: ", binarySearchTree.dfsPostOrder()); // [5, 1, 12, 10, 50, 20, 15]

module.exports = BinarySearchTree;
