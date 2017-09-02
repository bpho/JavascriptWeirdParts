// var test = Greetr('Benny', 'Ho');
var test = G$('Benny', 'Ho');		// Both keywords work
test.setLang('es').greet().greet(true).log;		// Chainable result

// 1. When you click the button, it creates a new object using a function G$ 
// 2. Hide the UI
// 3. Set the language depending on what was chosen
// 4. Chain the method that adds greeting to place on page
// 5. Log to console
// $('#login').click(function() {

// 	var loginGrtr = G$('Benny', 'Ho');		// Randon login user

// 	// $('#logindiv').hide();		// Hides the login stuff, have to refresh everytime doe

// 	// Fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
// 	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

// });

// Doing the above using vanilla JS
function setText() {
	var loginGrtr = G$('Benny', 'Ho');
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
}

var loginEl = document.getElementById('login');
loginEl.addEventListener('click', setText, false);


