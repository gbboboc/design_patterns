// Target Object: User
const user = {
	name: 'John Doe',
	age: 30
};

// Proxy to intercept get and set operations
const userProxy = new Proxy(user, {
	get(target, prop) {
			// Logging access to properties
			console.log(`Getting ${prop}`);
			return Reflect.get(target, prop);
	},
	set(target, prop, value) {
			// Validation for age property
			if (prop === 'age') {
					if (typeof value !== 'number' || value <= 0) {
							throw new Error('Age must be a valid number and greater than 0');
					}
			}

			// Validation for name property
			if (prop === 'name' && typeof value !== 'string') {
					throw new Error('Name must be a string');
			}

			console.log(`Setting ${prop} to ${value}`);
			return Reflect.set(target, prop, value);
	}
});

// Accessing the properties using the Proxy
console.log(userProxy.name);  // Triggers the get handler
userProxy.age = 35;           // Triggers the set handler and passes validation
console.log(userProxy.age);   // Triggers the get handler

// Attempt to set invalid values
try {
	userProxy.age = -5;        // This will throw an error due to validation
} catch (e) {
	console.error(e.message);
}

try {
	userProxy.name = 123;      // This will throw an error due to validation
} catch (e) {
	console.error(e.message);
}
