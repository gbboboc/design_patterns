// Subject (Publisher): NewsPublisher
class NewsPublisher {
	constructor() {
			this.subscribers = []; // List of observers
	}

	// Method to add a subscriber (observer)
	subscribe(subscriber) {
			this.subscribers.push(subscriber);
	}

	// Method to remove a subscriber (observer)
	unsubscribe(subscriber) {
			this.subscribers = this.subscribers.filter(obs => obs !== subscriber);
	}

	// Notify all subscribers of breaking news
	notify(news) {
			this.subscribers.forEach(subscriber => subscriber.update(news));
	}
}

// Observer: Subscriber
class Subscriber {
	constructor(name) {
			this.name = name;
	}

	// Update method, called when the publisher notifies of new data
	update(news) {
			const newsDiv = document.getElementById('news');
			const newsUpdate = document.createElement('div');
			newsUpdate.classList.add('subscriber');
			newsUpdate.innerText = `${this.name} received news: ${news}`;
			newsDiv.appendChild(newsUpdate);
	}
}

// Creating publisher and subscribers
const newsPublisher = new NewsPublisher();

const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');

// Subscribing observers to the publisher
newsPublisher.subscribe(subscriber1);
newsPublisher.subscribe(subscriber2);

// Handling button click to publish news
document.getElementById('publishNews').addEventListener('click', () => {
	const breakingNews = 'Breaking News: Observer Pattern Explained!';
	newsPublisher.notify(breakingNews);
});
