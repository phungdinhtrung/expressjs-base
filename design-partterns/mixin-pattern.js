/**
 * Mixin Pattern is a pattern that takes multiple objects and combines them into one object so that they can be used together.
 */

// 1. Create a mixin
const mixin = {
    sayHello() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};

// 2. Create a class
class Person {
    constructor(name) {
        this.name = name;
    }
}

// 3. Mixin
Object.assign(Person.prototype, mixin);

// 4. Create an instance
const person = new Person('John');

// 5. Use the methods from the mixin
person.sayHello();
person.sayBye();
