/** registry-parttern: is a design parttern that allows us to register objects and services within a central registry */

// 1. Create a registry
class Registry {
    constructor() {
        this._registry = {};
    }
    
    // 2. Register a service
    register(key, service) {
        if (this._registry[key]) {
            throw new Error(`The key ${key} already exists`);
        }
    
        this._registry[key] = service;
    }

    // 3. Remove a service
    remove(key) {
        if (!this._registry[key]) {
            throw new Error(`The key ${key} doesn't exist`);
        }
    
        delete this._registry[key];
    }
    
    // 4. Get a service
    get(key) {
        if (!this._registry[key]) {
            throw new Error(`The key ${key} doesn't exist`);
        }
    
        return this._registry[key];
    }

    // 5. Clear the registry
    clear() {
        this._registry = {};
    }

    // 6. Get the registry
    getRegistry() {
        return this._registry;
    }
}

// Export a singleton instance of the registry
const registry = new Registry();

// Usage
// 1. Register a service
// registry.register('api', 'http://myapi.com');
// registry.register('timeout', 3000);

// 2. Get a service
// console.log('api:=====', registry.get('api'));
// console.log('timeout:=====', registry.get('timeout'));

module.exports = registry;
