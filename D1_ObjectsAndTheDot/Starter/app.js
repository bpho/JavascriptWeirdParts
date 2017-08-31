var person = {
    firstname: 'Benny',
    lastname: 'Ho',
    address: {
            streetname: '4097 Ancestry Circle',
            city: 'Matthews',
            state: 'NC'
    }
};

function greet(person) {
    console.log("hello " + person.firstname + " " +  person.lastname);
}

greet(person);
console.log(person);
