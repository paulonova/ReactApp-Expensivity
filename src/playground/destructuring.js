/** OBJECT DESTRUCTURING 
 * 
*/
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
//console.log(`${name} is ${age}`);

/**Renames the variable temp.. */
// const {city, temp: temperature} = person.location;
//console.log(`It is ${temperature} degrees in ${city}`);


const book={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'Penguin'
    }
};


const {name: publisherName = 'Self-Publisher'} = book.publisher;
//console.log(publisherName); //Penguin , Self-Publisher


/** ARRAY DESTRUCTURING 
 * 
*/

const address = ['Lagman Lekares vägg 55', 'Alby', 'Stockholm', '14558'];

const [street, city, state = 'Goteborg', zip ] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, small, medium, large] = item;
console.log(`A Medium ${itemName} costs ${medium}`);


