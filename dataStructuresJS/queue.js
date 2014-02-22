var Queue = function() {  // Constructor function for queue data structure
	[].forEach.call(arguments, this.enqueue.bind(this)); 
};

var Node = function(data, prev) {  // Constructor function for nodes of the queue
	this.data = data;
	this.prev = prev;
}

Queue.prototype.enqueue = function(data) {  // Method that prepends a node to the start of the queue
	var node = new Node(data);
	if (!this.head) this.head = this.tail = node;
	else {
		node.next = this.head;
		this.head = node;
		node.next.prev = node;
	}
};

var q = new Queue();
q.enqueue(4);
q.enqueue(3);
console.log(q);

Queue.prototype.dequeue = function(callback) {  // Method that removes the last node in the queue, and accepts a callback as an arguement
	var temp = this.tail;
	if (this.head == null && this.tail == null) {
		callback("Empty");
	}
	else {
		if (!this.tail.prev) {
			this.tail = this.head = null;
		}
		else {
			this.tail = this.tail.prev;
		}
		callback(null, temp.data);
	}
}

var print = function(err, value) {  // Callback function that is passed into the dequeue method which outputs value of node removed
	if (err == "Empty"){
		console.log("Empty");
	}
	else {
		console.log(value);
	}
};

Queue.prototype.size = function() {  // Method to find the current number of nodes in the queue at invocation
	var temp = this.head;
	var i = 1;
	if (this.head == null) {
		return 0;
	}
	else {
		while (temp.next != null) {
			temp = temp.next;
			i++;
		}
		return i;
	}
}

q.dequeue(print);
q.dequeue(print);
q.dequeue(print);
console.log(q);
q.enqueue(49);
q.enqueue(3);
console.log(q);
console.log(q.size());