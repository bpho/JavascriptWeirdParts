// Functions were NOT invoked, just CREATED
function buildFunctions() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {       // i is a free variable
        // You're pretty much making functions that all do the same thing, i is not unique
        arr.push(
            function() {        // Function is created here, not invoked, so console.log doesn't run until it's invoked later
                console.log(i);   // Creating function object and placing it in it's code proeprty
            }
        )
        
    }
    
    return arr;
}

var fs = buildFunctions();      // Call function to return an array, but then POPPED off the stack, but variables in memory stay intact

// You may think the output is 0, 1, 2 but these invocations hold the values of the variables used in buildFunctions() and keeps 
// it in memeory. So next time to access variable i, it'll return where it left off (Last value was 3)
// EX: Similar to the parameter of the outer function keeping its value
fs[0]();    // Invoke each function in the array, should output --> 3 
fs[1]();    // Output: 3
fs[2]();    // Output: 3
// i was 3 in memory!
(function() {
    console.log(i);
}); // --> this is what each one looks like, i exists in memory, takes it from when buildFunctions() was on the execution stack.


// What if we did want the output to be 0, 1, 2?
// Using 'let' introduced in ES6
function buildFunctions1_5() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        let j = i;      // j is scoped to this code block, within the {} of the for loop
        // j is sub-segmented, separately scoped variable
        arr.push(
            function() {
                console.log(j);
            })
    }
    return arr;
} 
var fs1_5 = buildFunctions1_5();
fs1_5[0]();
fs1_5[1]();
fs1_5[2]();
// --> Outputs 0, 1, 2

// Without using 'let', ES5 method
// Need a separate execution context, for EACH of the functions getting pushed into array
// Only way to get a new execution context is to create a new function
function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        // Push the RESULT of the EXECUTING function, and executing the function returns us ANOTHER function
        arr.push(
            (function(j) {      // This is an IIFE, peep the paranthesis, *invoked* every time the loop iterates creating a new execution context
                return function() {     // This part is still only CREATED and stored into the array
                    console.log(j);   
                }
            }(i));      // **Passing i, every time the loop runs, the function is EXECUTED (IIFE) instead of just created like earlier
        )
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();