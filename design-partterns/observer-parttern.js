// description: observer-parttern is a parttern that define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
class Observer {
    constructor() {
        this.observers = [];
    }

    add(fn) {
        this.observers.push(fn);
    }

    remove(fn) {
        this.observers = this.observers.filter(obs => obs !== fn);
    }

    notify(...args) {
        this.observers.forEach(fn => fn(...args));
    }
}

// const observer = new Observer()

// const function1 = (args) => console.log(`function1 ${args}`)    
// const function2 = (args) => console.log(`function2 ${args}`)

// observer.add(function1)
// observer.add(function2)

// observer.notify("Hello world")

module.exports = Observer;