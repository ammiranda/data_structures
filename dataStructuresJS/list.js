var LinkedList = function(){  // Linked list constructor function
	this.head = null;         // Initialized head to null
};

LinkedList.prototype.insert = function(value){  // Method to add a node to the list with the passed in value
	if(this.head === null){
		this.head = {data: value, next: null};
	} else {
		var temp = this.head;
		while(temp.next !== null){
			temp = temp.next;
		}
		temp.next = {data: value, next: null};
	}	
};


var ll = new LinkedList();  // Created an instance of the Linked List called ll

ll.insert("hello");
ll.insert("class");
ll.insert("world");

LinkedList.prototype.remove = function(index){  // Method to remove node given its index position as the passed in arg
	if (index === 0){
		if(this.head.next === null){
			this.head = null;
		} else {
			this.head = this.head.next;
		}
	}
	var temp = this.head;						
	for(var i = index; i > 1; i--){				// Traverses linked list until it arrives at the node just before the node desired for deletion
		temp = temp.next;
	}
	temp.next = temp.next.next;                 // Assignment that causes the deleted node to be bypassed in the list
}

console.log(ll.head);

LinkedList.prototype.print = function() {       // Method that recursively logs the current linked list to the console
	if (this.head === null) {
		console.log('[]');
	} else {
		console.log('[' + recur(this.head));
	}

	function recur(node) {
		if (node.next === null) {
			return '"' + node.data + '"]';
		} else {
			return '"' + node.data + '", ' + recur(node.next);
		}
	}
}

LinkedList.prototype.write = function() {     // Method that iteratively logs the current linked list to the console
	if (this.head === null) {
		console.log('[]');
	} else {
		var temp = this.head;
		var string = '[';
		while(temp.next !== null) {
			string += '"' + temp.data + '", ';
			temp = temp.next; // Moves temp variable up the list to the next term
		};
		string += '"' + temp.data + '"]';
		console.log(string);

		}
	}

ll.write();

var b = new LinkedList();

b.write();  // Checking of edge case of write method