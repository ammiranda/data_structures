var DblLinkedList = function() {   // Double Linked List constructor function
    this.head = null;              // Intializes head, tail, and length properties
    this.tail = null;
    this.length = 0;
    };
    
var Node = function(data) {        // Node constructor function that takes the node's data value as a passed in parameter
    this.data = data;              
    this.prev = null;              // Initializes node pointers to null
    this.next = null;
    };
    

    
DblLinkedList.prototype.prepend = function(data) {  // Method that adds a node with data of the passed in parameter
    var node = new Node(data);
    var temp = this.head;
    if(this.head===null){    // Checks if list is empty and if so appends node as the initial node
       this.head = node;
       this.tail = node;
       } else {             // If other nodes exist the new node will be prepended to the list
       node.next = this.head;
       this.head = node;
       node.next.prev = node;
    
    }
    };
    
DblLinkedList.prototype.append = function(data) {  // Method that adds new node to the end of the double linked list instance
    var node = new Node(data);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
}

DblLinkedList.prototype.pop_front = function(callback) {  // Method that removes the current head node and takes a callback as an arg
    var dataHead = this.head.data;
    this.head = this.head.next;
    this.head.prev = null;
    callback(dataHead);

}

DblLinkedList.prototype.pop_back = function(callback) {  // Method that removes the current tail node and takes a callback as an arg
  var dataTail = this.tail.data;
  this.tail = this.tail.prev;
  this.tail.next = null;
  callback(dataTail);
}


var print = function(data) {  // Function that tested callback functionality for both pop_front and pop_back
    console.log(data);
}

  var ll = new DblLinkedList();  // Created a new doubly linked list called ll
  ll.prepend('hello');
  ll.prepend('world');
  ll.append('bye');
  ll.pop_front(print);
  ll.pop_back(print);
  ll.append("meep");
  ll.prepend("ooh");
   
  console.log(ll.head);
