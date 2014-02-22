var BST = function(arr) {  // BST constructor function that takes array of data as input
	this.size = 0;		   // Initializes size attribute to zero
	this.height = 0;       // Initializes height attribute to zero	   
	arr.forEach(this.addNode.bind(this)); // Iterates through inputted array invoking the addNode method
};

var Node = function(data, left, right) { // Node constructor function
	this.data = data;					 // Passes in data value for created node
	this.left = left;					 // Adds left pointer
	this.right = right;					 // Adds right pointer
};

BST.prototype.addNode = function(data) { // Method to add nodes to instances of BST
	var node = new Node(data);
	var height = 1;
	if (this.root === undefined) {		 // Checks if node is root (first) node added to tree
			this.root = node;
			this.size++;
			this.height++;
			return;
		}
	var temp = this.root;				 // Sets var temp to the root of the current tree
	while (temp) {						 // Sets while loop conditions to run while temp is non-null
		if (node.data == temp.data) {    
			break;
		}
		else if (node.data > temp.data && temp.right == undefined) { 
			temp.right = node;
			this.size++;
			height++;
			break;
		}
		else if (node.data > temp.data && temp.right != undefined) {
			temp = temp.right;
		}
		else if (node.data < temp.data && temp.left == undefined) {
			temp.left = node;
			this.size++;
			height++;
			break;
		}
		else if (node.data < temp.data && temp.left != undefined) {
			temp = temp.left;
		}
		height++;
	}
	if (height > this.height) {           // Checks if height value matches up with height of tree object
		this.height = height;             // Sets height variable to value of this.height
		console.log(height);
		console.log(this.height);
	}
}

BST.prototype.get_size = function() {     // Method that returns the size attribute of the constructed BST
	return this.size;
}

BST.prototype.get_height = function() {	  // Method that returns the height attribute of the contructed BST
	return this.height;
}

BST.prototype.contains = function(data) { // Method that checks if BST contains a node with a certain data value
	var node = new Node(data);
	if (node.data == this.root.data) {
		return true;
	}
	var temp = this.root;
	while (node.data != temp.data) {
		if (node.data > temp.data && temp.right != undefined) {
			temp = temp.right;
		}
		else if (node.data > temp.data && temp.right == undefined) {
			return false;
		}
		else if (node.data < temp.data && temp.left !=undefined) {
			temp = temp.left;
		}
		else if (node.data < temp.data && temp.left == undefined) {
			return false;
		}
	}
	return true;
}

BST.prototype.remove = function(data) {  // Method that removes a node from the BST given its data value
	if (this.root === undefined){
		console.log("This Binary Search Tree does not exist!");
		return;
	}
	var temp = this.root;
	if (data == this.root.data) {
		this.root.data = this.root.right.data;
		this.root.left = temp.left.left;
		this.size--;
		return;
	}
	if (!this.contains(data)) {
		console.log("Cannot remove " + data + " becuase it is not in this binary tree.");
		return;
	};
	while (data != temp.data) {
		if (data > temp.data && temp.right != undefined){
			temp = temp.right;
		}
		else if (data < temp.data && temp.left != undefined){
			temp = temp.left;
		}
	}
	if (temp.left == null && temp.right == null) { // Checking to see if deleted node has no children
		return;
		if (temp.data > temp.root.data) { // Checks to see node to be deleted is to the right of its root node
			temp.right = null;
		}
		else {  // Checks to see node to be deleted is to the left of its root node
			temp.left = null;
		}
	}

}
var b = new BST([]);
var p = new BST([4,4,5,3,20,5,6,2,1,7]);
console.log(p);
/*console.log(p.get_size());
console.log(p.contains(4));
console.log(p.contains(21));
console.log(p.contains(1));*/
b.remove(3);
p.remove(7);
console.log(p.contains(7));
console.log(p);