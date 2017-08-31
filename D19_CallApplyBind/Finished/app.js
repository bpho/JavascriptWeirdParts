var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

// Two ways to bind to person object
// #1 
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}

var logPersonName = logName.bind(person);
logPersonName('en'); 

// #2
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}.bind(person);
logName('en');  // Notice how the original function can be called whereas, the one before needed the logPersonName since
            // it's the copy of the original function, but binded to 'person'
// -------------------------------------------------------- // 

logName.call(person, 'en', 'es');       // First parameter decides what the 'this' variable should be, every proceeding are just arguments for function
logName.apply(person, ['en', 'es']);    // Does the exact same thing as .call(), except it wants an array of parameters

// Creating a function on the fly, and invoking it immediately using apply
(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

// Real application of .apply()
// Invoking the function from the person object, but inside of using the 'this' keyword to refer to 'person', apply
// redirects the 'this' to the firstname and lastname of 'person2'
console.log(person.getFullName.apply(person2));     // Can use .call() as well

// function currying
function multiply(a, b) {
    return a*b;   
}

// This is what the multiply.bind(this, 2); is essentially creating
// function multipleByTwo(b) {
//     var a = 2;
//     return a*b;
// }

// What does giving bind() parameters do? Since it's not invoking the function
// It sets permament values for the function parameters, when the copy of it is made and stored in a variable
// The first parameter doesn't matter since you're not changing execution context of 'this', the second one '2',
// permamently assigns a to 2.
var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));      // 4 ends up as the second parameter

// This is what the multiply.bind(this, 3); is essentially creating
// function multipleByThree(b) {
//     var a = 3;
//     return a*b;
// }

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));    

var multipleByTwoAndTwo = multiply.bind(this, 2, 2); // Means 2 and 2 will always be the values for a and b
multipleByTwoAndTwo(3); // This will be an additional argument, not used, doesn't matter what this is

var multipleBy = multiply.bind(this); // Means no values are set, as if bind() was never used
multipleBy(5, 5); // --> Output 25
