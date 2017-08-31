// Prototyping, inheritance using Object.create
console.log("Object.create() and factory functions");
var Animal = {
	type: 'Animal',
	name: 'Animal'
}

var Reptile = {
	blood: 'Cold-blooded',
	getDetails: function() { 
		return 'This ' +this.type + ' ' +this.name + ' is ' + this.blood;
	}
}

// Sets Reptile as a subclass of Animal (as the prototype), inherits all properties from Animal
Reptile.prototype = Object.create(Animal);
// Creates snake object which points/prototypes to Reptile
// var snake = Object.create(Reptile);

// Or use a factory
function createReptile() {
	return Object.create(Reptile);
}
var snake = createReptile();
snake.type = 'Reptile';		// Set properties on the fly
snake.name = 'Snake';
console.log("1: " +snake.type);
console.log("1: " +snake.blood);
console.log("1: " +snake.name);
console.log("1: " +snake.getDetails());
console.log("-----------------------");

// -----------------------------------------------------------------------------//
// Prototyping, using function constructors
console.log("function constructors and new() keyword");
function Animal_Two(type, name) {
	this.type = type;
	this.name = name;
}

// All property binding is down within constructor
function Reptile_Two() {
	this.blood = 'Cold-blooded';
} 


// Inherits all Animal_Two properties
Reptile_Two.prototype = new Animal_Two('Reptile', 'Snake');

// Must be called after the prototyping/inheritance is done, or inerhitance will not recognize it
Reptile_Two.prototype.getDetails = function() {
	return 'This ' +this.type + ' ' +this.name + ' is ' + this.blood;
}

var snake_two = new Reptile_Two();
console.log("2: " +snake_two.type);
console.log("2: " +snake_two.blood);
console.log("2: " +snake_two.name);
console.log("2: " +snake_two.getDetails());
console.log("-----------------------");

// -----------------------------------------------------------------------------//
//Using Classes
console.log("ES6, and classes");
class Animal_Three {
	constructor(type, name) {
		this.type = type;
		this.name = name;
	}
}

// Extends keyword itself does the inheriting
class Reptile_Three extends Animal_Three {
	constructor(type, name, blood) {
		super(type, name);
		this.blood = blood;
	}

	getDetails() {
		return 'This ' +this.type + ' ' +this.name + ' is ' + this.blood;
	}
}
var snake_three = new Reptile_Three('Reptile', 'Snake', 'Cold-blooded');
console.log("3: " +snake_three.type);
console.log("3: " +snake_three.blood);
console.log("3: " +snake_three.name);
console.log("3: " +snake_three.getDetails());
