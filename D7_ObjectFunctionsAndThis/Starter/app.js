var obj = {
	name: "Test Object",
	changeName: function(newName) {
		this.name  = "New name is " +newName;		// 'this' refers to the obj
		console.log(name);
		console.log(this);
	}
}

obj.changeName("Benito Test Ho");

console.log("c object information: ");
// Create ANOTHER function inside the method of the object
var c = {
	name: 'The c object',
	log: function() {
		this.name = 'Updated c object';
		console.log(this);

		var setname = function(newName) {
			this.name = newName;		// This internal function 'this' is pointing to the global object instead of 
		}								// The object it resides. This is an ERROR of javascript
		setname('Updated again! The c object');		// This will change the global object 'this'
		console.log(this);			// This will still stay 'Updated c object', invoking function didn't change it
		console.log('The updated text resides on the global object, must fix');
	}
}

c.log();


console.log("c2 object information: ");
// The var self = this; Done in the first line of the log function creates a variable that points
// To the 'this' reference for the c2 object
// As a result, the 'this' keyword originally used in the function setname, will now point to the c2 object
// Instead of the global object
var c2 = {
	name: 'The c object',
	log: function() {
		// This 'this' is currently pointed to the c2 object
		var self = this;		// Since 'this' is object, it'll set equal to by reference. 

		// Self used to differentiate different 'this' references, all 'self'(s) will refer to c2
		self.name = 'Updated c object';
		console.log(self);			

		var setname = function(newName) {
			self.name = newName;		// Could also technically use c2.name instead of self.name since they both point to object
		}								
		setname('Updated again! The c object');
		console.log(self);			// This will still stay 'Updated c object', invoking function didn't change it
	}
}

c2.log();