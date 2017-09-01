// Create a new execution for our framework
// All variables declared are safe, wrap the code and pass what we need access to
// Global variables and jQuery variable

(function(global, $){

	// When this function is invoked, basically a factory for creating Greetr objects so you don't need new() every time
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);		// Return new, using a function constructor to generate an object
	}
	//^^Very good practice

	// Only available in this lexical environment (IIFE), thanks to closures anything declared in this function will have access to these variables
	var supportedLangs = ['en', 'es'];

	// Keep the names the same as the supportLangs, so they can be referenced by 'en' or 'es'
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	}

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	}

	var logMessages = {
		en: 'Logged In',
		es: 'Inició sesión'
	}

	// Store methods you want to use for Greetr objects, add functionality to objects
	Greetr.prototype = {
		fullName : function() {
			return this.firstName + ' ' + this.lastName;
		},
		validate: function() {
			// Compare the langauge (this.language) when object was created with ones stored in supportedLangs
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid Language";
			}
			// Another way of doing it
			// if (!(supportedLangs.includes(this.language))) {
			// 	throw "Invalid language";
			// }
		},
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},
		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},
		// Pass whether or not you want the greeting formal and it invokes the corresponding method
		// Good technique as it encapsultes method functionality
		greet: function(formal) {
			var msg;

			// if undefined or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {		// If console exists and is opened on the browser, print it
				console.log(msg);
			}

			// 'this' refers to the calling object at execution time which makes the method CHAINABLE
			// Method already logs what it needs to, return this allows another method to execute after.
			return this;
		},
		// Manually make sure something is logged
		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;		// Chainable
		},
		// Changes a langauge on the fly
		setLang: function(lang) {
			this.language = lang;
			this.validate();	// Make sure the langauge is valid (within the array)

			return this;		// Chainable
		},

		HTMLGreeting: function(selector, formal) {
			// If jQuery alias does not exist, or jQuery itself
			if (!$) {
				throw 'jQuery not loaded';
			}
			if (!selector) {
				throw 'Missing jQuery selector';
			}

			var msg;
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			// Can use jQuery methods, add the greeting text to the place on the page using .html() --> retrieves contents of element
			$(selector).html(msg);

			return this;
		}
	};

	// Function constructor that builds objects
	Greetr.init = function(firstName, lastName, language) {
		// To be safe so you know where this points to later
		var self = this;
		self.firstName = firstName || '';		// Set some default values in case values aren't passed
		self.lastName = lastName || '';
		self.language = language || 'en';

		self.validate();	// checks if the language is valid when object is created
	}

	// Normally prototype functions for Greetr.init should be created within Greetr.init.prototype
	// But doing this points to the another prototype declared above, IT LOOKS BETTER
	Greetr.init.prototype = Greetr.prototype;

	// Attach to global object 'global' represents the global object
	// Set these to the Greetr function that creates a Greetr object every time you use the alias or Greetr
	global.Greetr = global.G$ = Greetr;		// Just like in jQuery, both jQuery and $() work

}(window, jQuery));		// window is passed in to represent the global object, jQuery is passed in for the $ alias (could use jQuery or $)