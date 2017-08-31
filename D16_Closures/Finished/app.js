function greet(whattosay) {

   return function(name) {
       console.log(whattosay + ' ' + name);	// Take advantage of the scope chain, use param
   }

}

var sayHi = greet('Hi');	// This 'Hi' parameter is kept in memory within the variable
sayHi('Tony');
