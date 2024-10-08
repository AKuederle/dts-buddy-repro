import { Person, PersonNoPrivate } from 'exampleLib';
import { formatPerson, formatPersonNoPrivate } from 'exampleLib/format';


// This does not work, because the Person class has a private field.
// This triggers dts-buddy to include a `#private` field in the generated types.
const person = new Person('John Doe', 34, "2@be.de");
console.log(formatPerson(person));

// This works, because the PersonNoPrivate class does not have a private field.
const personNoPrivate = new PersonNoPrivate('John Doe', 34, "2@be.de");
console.log(formatPersonNoPrivate(personNoPrivate));