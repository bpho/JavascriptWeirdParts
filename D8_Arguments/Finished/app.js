function greet(firstname, lastname, language) {
 
    // Set default parameter
    language = language || 'en';    // If language parameter not defined when invoked, set as 'en'
    
    if (arguments.length === 0) {       // If no arguments were given when function was invoked
        console.log('Missing parameters!');
        console.log('-------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('-------------');
    
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments (SPREAD PARAMETER)


// In later javascript versions, parameter values can be set within the parenthesis
// These will be default values, if not provided any
// Spread will allow 'other' and 'params' to be held in an array called other
function greet2(firstname = 'Benny', lastname = 'Ho', language = 'en', ...other) {
}

greet2('Ben', 'H', 'en', 'other', 'params');