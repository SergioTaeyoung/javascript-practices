var s1 = "hello";
//에러: not a function
//s1.myFunction();

String.prototype.myFunction = function(){
	console.log('mystring:' + this);
}

var s2 = "hello2";
s2.myFunction();
