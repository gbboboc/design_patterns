// Mixin for driving abilities
const CanDrive = {
	canDrive: true,
	drive() {
			return this.canDrive ? `${this.name} can drive!` : `${this.name} cannot drive!`;
	}
};

// Basic Person class
class Person {
	constructor(name, age) {
			this.name = name;
			this.age = age;
	}

	getDetails() {
			return `Name: ${this.name}, Age: ${this.age}`;
	}
}

// Function to apply a mixin to a class
function applyMixin(targetClass, mixin) {
	Object.assign(targetClass.prototype, mixin);
}

// Apply the CanDrive mixin to the Person class
applyMixin(Person, CanDrive);

// Creating a new person instance
const person1 = new Person('John Doe', 30);

// Handling button click to show person details
document.getElementById('showPersonDetails').addEventListener('click', () => {
	const personDiv = document.getElementById('person');
	personDiv.innerHTML = `${person1.getDetails()}<br>${person1.drive()}`;
});
