// Example of using anonymous function expression. On the Fly
//The anonymous function is not being executed there in the parameter. ​
​//The item is a callback function
$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
});

// *****
// A popular pattern is to declare a named function and pass the name of that function to the parameter. 
// logStuff becomes the callback function once getInput is invoked needing a function parameter
// *****

​var allUserData = [];
​
​// generic logStuff function that prints to console​
​function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
​
    }
​
}
​
​// A function that takes two parameters, the last one a callback function​
// ​function getInput (options, callback) {
//     allUserData.push (options);
//     callback (options);
// ​
// }

// Make Sure Callback is a Function Before Executing It
// It is always wise to check that the callback function passed in the parameter is indeed a function before calling it. Also, it is good practice to make the callback function optional.
​function getInput(options, callback) {
    allUserData.push(options);
​
    // Make sure the callback is a function​
    if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable​
        callback(options);
    }
}


​// When we call the getInput function, we pass logStuff as a parameter.​
​// So logStuff will be the function that will called back (or executed) inside the getInput function​
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
​//  name: Rich​
​// speciality: JavaScript

