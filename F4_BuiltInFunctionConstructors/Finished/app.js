// All strings will have access to this string prototype function
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;  
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;   
}

// Would need to instantiate number objects before invoking function
var a = new Number(3);
a.isPositive();		// Would return true

// Can't use 3.isPositive();