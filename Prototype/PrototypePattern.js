// Base class: Car
class Car {
	constructor(make, model, color) {
			this.make = make;
			this.model = model;
			this.color = color;
	}

	// Method to describe the car
	describe() {
			return `${this.color} ${this.make} ${this.model}`;
	}

	// Prototype method for cloning
	clone() {
			return Object.create(this);
	}
}

// Client code
const originalCar = new Car('Tesla', 'Model S', 'Red');
console.log('Original Car:', originalCar.describe());

// Clone the original car using the prototype pattern
const clonedCar = originalCar.clone();
clonedCar.color = 'Blue'; // Modify the color of the cloned car
console.log('Cloned Car:', clonedCar.describe());

