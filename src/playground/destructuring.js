
const person={
    // name: 'Andrew',
    age: 27,
    location: {
        city: 'Filadelfia',
        temp: 92
    }
};

/**Set name a default value */
const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}`);

/**Renames the variable temp.. */
const {city, temp: temperature} = person.location;
console.log(`It is ${temperature} degrees in ${city}`);


const book={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'Penguin'
    }
};


const {name: publisherName = 'Self-Publisher'} = book.publisher;
console.log(publisherName); //Penguin , Self-Publisher
