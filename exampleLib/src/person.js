export class Person {
    /**
     * @type {string}
     */
    #id;

    /**
     * Create a person object.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     * @param {string} email - The email address of the person.
     */ 
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.#id = Math.random().toString(36).substring(7);
    }

    /**
     * @returns {string}
     */
    get id() {
        return this.#id;
    }
}


export class PersonNoPrivate {
    /**
     * Create a person object.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     * @param {string} email - The email address of the person.
     */ 
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.id = Math.random().toString(36).substring(7);
    }
}

