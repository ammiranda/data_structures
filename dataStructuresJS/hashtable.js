var HashTable = function(size, hashFn) {  // Hash table constructor function that takes size and the hashing function as args
	var _hash = this._hash = new Array(size);
	this._elementsInserted = 0;
	hashFn = hashFn || function(key, size) {
		return key % size;
	};
	this._hashFn = function(key) {
		return hashFn(key, _hash.length);
	}

}

HashTable.prototype.insert = function(key, value) {
	var index = this._hashFn(key);
	if (!this._hash[index]) {
		this._hash[index] = [];
	}

	var chain = this._hash[index];
	for(var i = 0; i < chain.length; i++) {
		if(chain[i].key == key) {
			chain[i].value = value;
			return;
		}
	}

	chain.push({key: key, value: value});
	this._elementsInserted++;
};

HashTable.prototype.has = function(key) {
	var index = this._hashFn(key);
	if(!this._hash[index]) {
		return false;
	}

	var chain = this._hash[index];
	for (var i = 0; i < chain.length; i++) {
		if (chain[i].key == key) {
			return true;
		}
	}
	console.log("for loop hit");
	return false;
};

HashTable.prototype.percentFull = function() {
	var used = 0;
	for (var i = 0; i < this._hash.length; i++) {
		if (this._hash[i]) {
			used++;
		}
	}
	return (used / this._hash.length) * 100 + '%'; // Display output as a percentage
};

HashTable.prototype.collisionFactor = function() {
	return this._elementsInserted / this._hash.length;
};


var p = new HashTable(4);
p.insert(3, 5);
p.insert(3, 3);
p.insert(3, 4);
console.log(p.percentFull());
console.log(p);
console.log(p.length);
console.log(p.collisionFactor());
console.log(p.has(4));
console.log(p.has(30));