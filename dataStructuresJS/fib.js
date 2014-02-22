function fib2(n){
	var a = [];
	for(var i = 0; i <= n; i++){
		if (n === 0){
			return 0;
		}
		var ans = (i - 1) + (i - 2);
	}
	return ans;
};

var fib = function(nth) {   // Recursive solution to calculating fibonacci sequence terms given the passed in index
	var recur = function(n) {
		if(n == 0) return 0;
		else if(n == 1) return 1;
		else return recur(n - 2) + recur(n - 1);
	};
	return recur(nth);
};


/*var fib = function(n) {
	if (n < 0){
		alert("n cannot be negative");
	}
	if (n == 0){
		return 0;
	}
	if (n == 1){
		return 1;
	}
	var firstNum = 0,
		secondNum = 1,
		fibNum = 0;
	for (var i = 2; i <= n; i++){
		fibNum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = fibNum;
	}
	return fibNum;
}*/

console.log(fib(0));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(1));
console.log(fib(2));
console.log(fib(100));