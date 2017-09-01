// ES6 Approach, using classes instead of prototypes

(function(global, $){

	// Very good practice, invoke Greetr (which is assigned as global object and way to access the framework) that
	// actually creates an instance and provides you all the functions and properties 
	var Greetr = function(firstName, lastName, language) {
		return new GreetrInit(firstName, lastName, language);
	}

	var supportedLangs = ['en', 'es'];

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

	class GreetrInit {
		constructor(firstName, lastName, language) {
			this.firstName = firstName || '';
			this.lastName = lastName || '';
			this.language = language || 'en';
			this.validate();	// Checks if language is valid
		}

		fullName() {
			return this.firstName + ' ' + this.lastName;
		}

		validate() {
			if (!(supportedLangs.includes(this.language))) {
				throw "Invalid language";
			}
		}

		greeting() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		}

		formalGreeting() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		}

		greet(formal) {
			var msg;
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {		
				console.log(msg);
			}

			return this;
		}

		log() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;
		}

		setLang(lang) {
			this.language = lang;
			this.validate();	
			return this;		
		}

		HTMLGreeting(selector, formal) {
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

			$(selector).html(msg);
			return this;
		}
	}

	global.Greetr = global.G$ = Greetr;

}(window, jQuery));	