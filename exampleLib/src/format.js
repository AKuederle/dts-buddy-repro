
/**
 * Note: It does not matter, if this import is from `./person.js` or `./index.js`. Both result in the same type exports.
 * @param {import("./index.js").Person} person
 * @returns {string}
 */
export const formatPerson = (person) => {
    return `${person.name} is ${person.age} years old and can be reached at ${person.email}`;
}


/**
 * Formats a person's details into a readable string.
 *
 * @param {import("./index.js").PersonNoPrivate} person - The person object.
 * @returns {string} A formatted string containing the person's details.
 */
export const formatPersonNoPrivate = (person) => {
    return `${person.name} is ${person.age} years old and can be reached at ${person.email}`;
}