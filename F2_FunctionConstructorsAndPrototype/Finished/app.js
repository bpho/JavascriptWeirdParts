function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

// The 'prototype' property of all functions is where the prototype chain points for any objects created using that function as a constructor
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
}

// John points to Person.prototype as its prototype
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());




