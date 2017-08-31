function sayHiLater() {
 
    var greeting = 'Hi!';
    
    setTimeout(function() {		// Taking advantage of First class function, passing it as an argument for the function
        						// Creating a functino on the fly, using function expression
        console.log(greeting);	// Goes up scope chain, and has a closure for the variable 'greeting'
        
    }, 3000);
    
}

// Still has access to 'greeting' seconds later, this is power of a closure
sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});


// Every proceeding callback function is called by the original tellMeWhenDone() function.. look for callback();
function tellMeWhenDone(callback) {
 
    var a = 1000; // some work
    var b = 2000; // some work
    
    callback(); // the 'callback', it runs the function I give it!
    
}

tellMeWhenDone(function() {
   
    console.log('I am done!');
    
});

tellMeWhenDone(function() {
   
    console.log('All done...');
    
});





