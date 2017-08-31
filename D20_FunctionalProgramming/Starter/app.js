// Create a function that takes a limiter parameter, without the usage of .bind()

// Code to work with
unction mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   // Give it an item of arr[i] that is processed by function 'fn', the callback function
        )
    };
    
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

// Great example of many levels of functional programming
var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));  // Allows you to preset a parameter, setting 'limiter'
console.log(arr4);
// checkPastLimit.bind(this,1), then becomes the fn parameter, so it needs to accept just one more parameter...item, which is the array 'arr'

// TODO: Create a function that takes just a limiter as a parameter
// Literally just another way to use BIND, not more efficient
var checkPastLimit2 = function(limiter) {
	return function(limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimit2(1));	// Checks the array element with a limiter of 1
console.log(arr5);