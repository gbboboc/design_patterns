// Flyweight Class: Circle
class Circle {
	constructor(color) {
			this.color = color; // Intrinsic state (shared)
	}

	draw(x, y) {
			const circle = document.createElement('div');
			circle.classList.add('circle');
			circle.style.backgroundColor = this.color; // Use intrinsic state
			circle.style.left = `${x}px`;
			circle.style.top = `${y}px`;

			document.body.appendChild(circle);
	}
}

// Flyweight Factory: ShapeFactory
class ShapeFactory {
	constructor() {
			this.circleMap = {}; // Stores shared flyweights
	}

	getCircle(color) {
			if (!this.circleMap[color]) {
					console.log(`Creating new circle of color: ${color}`);
					this.circleMap[color] = new Circle(color); // Create new flyweight if not present
			} else {
					console.log(`Reusing existing circle of color: ${color}`);
			}
			return this.circleMap[color]; // Return the shared flyweight
	}
}

// Client Code: Creating and using circles
const shapeFactory = new ShapeFactory();
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Handling button click to add circles
document.getElementById('addCircle').addEventListener('click', () => {
	const color = colors[Math.floor(Math.random() * colors.length)];
	const x = Math.random() * window.innerWidth;
	const y = Math.random() * window.innerHeight;

	const circle = shapeFactory.getCircle(color);
	circle.draw(x, y); // Draw the circle at random coordinates
});
