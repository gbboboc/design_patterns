// Mediator: ChatRoomMediator
class ChatRoomMediator {
	constructor() {
			this.users = [];
	}

	// Register a user with the mediator
	registerUser(user) {
			this.users.push(user);
			user.setMediator(this); // Set this mediator as the user's communication channel
	}

	// Broadcast a message to all users (except the sender)
	broadcastMessage(sender, message) {
			this.users.forEach(user => {
					if (user !== sender) {
							user.receiveMessage(message);
					}
			});
	}
}

// User class
class User {
	constructor(name) {
			this.name = name;
			this.mediator = null;
	}

	// Set the mediator for the user
	setMediator(mediator) {
			this.mediator = mediator;
	}

	// Send a message through the mediator
	sendMessage(message) {
			console.log(`${this.name} sends: ${message}`);
			if (this.mediator) {
					this.mediator.broadcastMessage(this, message);
			}
	}

	// Receive a message from the mediator
	receiveMessage(message) {
			const chatDiv = document.getElementById('chat');
			const messageDiv = document.createElement('div');
			messageDiv.classList.add('message');
			messageDiv.innerText = `${this.name} received: ${message}`;
			chatDiv.appendChild(messageDiv);
	}
}

// Creating mediator and users
const chatRoom = new ChatRoomMediator();
const user1 = new User('User 1');
const user2 = new User('User 2');

// Register users with the chat room mediator
chatRoom.registerUser(user1);
chatRoom.registerUser(user2);

// Handling button clicks to send messages
document.getElementById('sendMessageUser1').addEventListener('click', () => {
	user1.sendMessage('Hello from User 1!');
});

document.getElementById('sendMessageUser2').addEventListener('click', () => {
	user2.sendMessage('Hello from User 2!');
});
