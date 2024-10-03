// Receiver: Light
class Light {
	turnOn() {
			return 'Light is turned on';
	}

	turnOff() {
			return 'Light is turned off';
	}
}

// Receiver: Fan
class Fan {
	turnOn() {
			return 'Fan is turned on';
	}

	turnOff() {
			return 'Fan is turned off';
	}
}

// Command Interface
class Command {
	execute() {
			throw new Error("Execute method must be implemented");
	}
}

// Concrete Commands
class TurnOnLightCommand extends Command {
	constructor(light) {
			super();
			this.light = light;
	}

	execute() {
			return this.light.turnOn();
	}
}

class TurnOffLightCommand extends Command {
	constructor(light) {
			super();
			this.light = light;
	}

	execute() {
			return this.light.turnOff();
	}
}

class TurnOnFanCommand extends Command {
	constructor(fan) {
			super();
			this.fan = fan;
	}

	execute() {
			return this.fan.turnOn();
	}
}

class TurnOffFanCommand extends Command {
	constructor(fan) {
			super();
			this.fan = fan;
	}

	execute() {
			return this.fan.turnOff();
	}
}

// Invoker: RemoteControl
class RemoteControl {
	setCommand(command) {
			this.command = command;
	}

	pressButton() {
			return this.command.execute();
	}
}

// Client Code
const light = new Light();
const fan = new Fan();
const remoteControl = new RemoteControl();

document.getElementById('turnOnLight').addEventListener('click', () => {
	const command = new TurnOnLightCommand(light);
	remoteControl.setCommand(command);
	updateStatus(remoteControl.pressButton());
});

document.getElementById('turnOffLight').addEventListener('click', () => {
	const command = new TurnOffLightCommand(light);
	remoteControl.setCommand(command);
	updateStatus(remoteControl.pressButton());
});

document.getElementById('turnOnFan').addEventListener('click', () => {
	const command = new TurnOnFanCommand(fan);
	remoteControl.setCommand(command);
	updateStatus(remoteControl.pressButton());
});

document.getElementById('turnOffFan').addEventListener('click', () => {
	const command = new TurnOffFanCommand(fan);
	remoteControl.setCommand(command);
	updateStatus(remoteControl.pressButton());
});

// Helper to update status on the page
function updateStatus(message) {
	const statusDiv = document.getElementById('status');
	const p = document.createElement('p');
	p.innerText = message;
	statusDiv.appendChild(p);
}
