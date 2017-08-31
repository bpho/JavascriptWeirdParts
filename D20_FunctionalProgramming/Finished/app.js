function mapForEach(arr, fn) {
    
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


var arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2); // Returns array with values multiplied by 2


var arr3 = mapForEach(arr1, function(item) {
   return item > 2; 
});
console.log(arr3);  // Returns an array of all boolean

// Great example of many levels of functional programming
var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));  // Allows you to preset a parameter, setting 'limiter'
console.log("arr4: " +arr4);
// checkPastLimit.bind(this,1), then becomes the fn parameter, so it needs to accept just one more parameter...item, which is the array 'arr'
// This example doesn't allow checkPastLimit(1), since it's expecting 2 parameters, however BIND is perfect in this example to only pass 1 variable first
// Before determining the second one in the function above

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {    // Creating an object
        return item > limiter;   
    }.bind(this, limiter); // .bind() presets the limiter used in the return function to the 'limiter' from outer function
};

// Doesn't matter what the binded 'limiter' variable name is, as long as it matches the outer function. This below is valid
var checkPastLimitSimplified2 = function(limiter2) {
    return function(limiter, item) {    // Creating an object
        return item > limiter;   
    }.bind(this, limiter2); // .bind() presets the limiter used in the return function to the 'limiter' from outer function
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));    // Already binded so it looks like it's passing a regular function
console.log(arr5);

// The above is a closure, but creates the function on the fly
// Formal way of declaring a closure
function limit(limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}
var checkWithLimiter = limit(0);    // The 2 gets binded to the first parameter of the inner function
var arr6 = mapForEach(arr1, checkWithLimiter);  // Function invoked doesn't need to pass anymore parameters, since limiter was preset
console.log(arr6);  // Output --> true, true, true





























