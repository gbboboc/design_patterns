// Vehicle base class
class Vehicle {
	constructor(type, wheels) {
			this.type = type;
			this.wheels = wheels;
	}

	getDetails() {
			return `Type: ${this.type}, Wheels: ${this.wheels}`;
	}
}

// Car subclass
class Car extends Vehicle {
	constructor() {
			super('Car', 4); // Calls parent class constructor with 'Car' and 4 wheels
	}
}

// Truck subclass
class Truck extends Vehicle {
	constructor() {
			super('Truck', 6); // Calls parent class constructor with 'Truck' and 6 wheels
	}
}

// Factory Class: VehicleFactory
class VehicleFactory {
	static createVehicle(type) {
			switch (type) {
					case 'car':
							return new Car();
					case 'truck':
							return new Truck();
					default:
							throw new Error('Unknown vehicle type');
			}
	}
}

// Handling button clicks to create vehicles
document.getElementById('createCar').addEventListener('click', () => {
	const vehicle = VehicleFactory.createVehicle('car');
	displayVehicle(vehicle);
});

document.getElementById('createTruck').addEventListener('click', () => {
	const vehicle = VehicleFactory.createVehicle('truck');
	displayVehicle(vehicle);
});

// Display the details of the created vehicle
function displayVehicle(vehicle) {
	const outputDiv = document.getElementById('output');
	outputDiv.innerHTML = vehicle.getDetails();
}
