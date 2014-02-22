var Stack = function(){  // Stack constructor function
	this.tail = null;
};

Stack.prototype.push = function(data) {  // Method that appends a node to the end of the stack
	if (this.tail === null) {
		this.tail = {data: data, prev: null};
	}
	else {
		this.tail = {data: data, prev: this.tail};
	}

};

Stack.prototype.pop = function(callback) {  // Method that removes the tail node and accepts a callback as an argument
	var temp = this.tail;
	if (this.tail == null){
		callback("Underflow");
	}
	else {
		this.tail = this.tail.prev;
		callback(null, temp.data);
	}


}

var print = function(err, value) {   // Callback method passed into the pop function
	if (err == "Underflow"){
		console.log("Underflow");
	}
	else {
		console.log(value);
	}
}

var s = new Stack();
s.push(4);
s.push(2);
console.log(s);

s.pop(print);
s.pop(print);
s.pop(print);
console.log(s);