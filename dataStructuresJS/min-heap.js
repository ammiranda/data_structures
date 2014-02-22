var MinHeap = function() {
	this.heap = [];  // Initializes heap to be an empty array
}

MinHeap.prototype.insert = function(data) {
	if (this.heap.length === 0) {  // Checks to see if heap is empty and then adds first term to index one
		this.heap[1] = data;
	}
	else {
		this.heap.push(data);  // Adds data value into heap
		parentIndex = this.heap.indexOf(data);  // Sets parentIndex to the index of the entered data
		while (data < this.heap[Math.floor(parentIndex / 2)]) {  // While loop to iterating to ensure data is sorted
			this.heap[parentIndex] = this.heap[Math.floor(parentIndex / 2)];  // Sets parent node to then become the child
			this.heap[Math.floor(parentIndex / 2)] = data; // Assigns the inserted data to be in the parent position
			parentIndex = this.heap.indexOf(data); // Updates parentIndex to be at the index of the current parent
		}
	}
};

MinHeap.prototype.peak = function() {
	return this.heap[1]; // Returns initial value of heap at function invocation
}

MinHeap.prototype.popMin = function() {
	var min = this.heap[1];  // Stores the lowest term in the heap at function invocation
	this.heap[1] = this.heap.pop(); // Replaces root node with last leaf in heap
	for (var parentIndex = 1; parentIndex < this.heap.length - 1; parentIndex++) { // Iterates throughout heap to check to swap out of place nodes
		if (this.heap[parentIndex] > this.heap[2 * parentIndex]) { // Checks if left child is smaller than parent node
			var temp = this.heap[2 * parentIndex];
			this.heap[2 * parentIndex] = this.heap[parentIndex];
			this.heap[parentIndex] = temp;
		}
		if (this.heap[parentIndex] > this.heap[2 * parentIndex + 1]) { // Checks if right child is smaller than parent node
			var temp = this.heap[2 * parentIndex + 1];
			this.heap[2 * parentIndex + 1] = this.heap[parentIndex];  // Sets child node to parent node value
			this.heap[parentIndex] = temp;  // Sets parent node to former child value essentially swapping them
		}
	}
	return min; // Outputs the minimum value removed from the heap
}

var b = new MinHeap();
b.insert(3);     // Test of initial insert functionality
b.insert(2);
b.insert(1);
b.insert(50);
b.insert(0);
console.log(b.heap);

b.popMin();
console.log(b);

var d = new MinHeap();  // Test 2 to confirm popMin is working
d.insert(40);
d.insert(3);
d.insert(1);
d.insert(4);
d.insert(5);
d.popMin();
console.log(d);

var p = new MinHeap();
p.insert(100);
p.insert(34);
p.insert(2);
p.insert(45);
p.insert(3);
console.log(p);
p.popMin();
console.log(p);