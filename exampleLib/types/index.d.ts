declare module 'exampleLib' {
	export class Person {
		/**
		 * Create a person object.
		 * @param name - The name of the person.
		 * @param age - The age of the person.
		 * @param email - The email address of the person.
		 */
		constructor(name: string, age: number, email: string);
		name: string;
		age: number;
		email: string;
		
		get id(): string;
		#private;
	}
	export class PersonNoPrivate {
		/**
		 * Create a person object.
		 * @param name - The name of the person.
		 * @param age - The age of the person.
		 * @param email - The email address of the person.
		 */
		constructor(name: string, age: number, email: string);
		name: string;
		age: number;
		email: string;
		id: string;
	}

	export {};
}

declare module 'exampleLib/format' {
	export function formatPerson(person: Person): string;
	export function formatPersonNoPrivate(person: PersonNoPrivate): string;
	class Person {
		/**
		 * Create a person object.
		 * @param name - The name of the person.
		 * @param age - The age of the person.
		 * @param email - The email address of the person.
		 */
		constructor(name: string, age: number, email: string);
		name: string;
		age: number;
		email: string;
		
		get id(): string;
		#private;
	}
	class PersonNoPrivate {
		/**
		 * Create a person object.
		 * @param name - The name of the person.
		 * @param age - The age of the person.
		 * @param email - The email address of the person.
		 */
		constructor(name: string, age: number, email: string);
		name: string;
		age: number;
		email: string;
		id: string;
	}

	export {};
}

//# sourceMappingURL=index.d.ts.map