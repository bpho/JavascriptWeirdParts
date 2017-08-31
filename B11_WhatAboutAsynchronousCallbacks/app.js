// The order of the console.logs would be:
// finished function --> finished execution --> click event(s)
// Due to the event queue clearing only after the execution
// stack has been cleared (or functions have been completed)
// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

