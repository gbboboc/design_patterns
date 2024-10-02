// counter.js

class Counter {
  constructor() {
    if (Counter.instance) {
      return Counter.instance;
    }

    this.counter = 0;
    Counter.instance = this;

    return this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

// DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
  const counter = new Counter();
  const counterValue = document.getElementById('counter-value');
  const incrementBtn = document.getElementById('increment-btn');
  const decrementBtn = document.getElementById('decrement-btn');

  // Display initial counter value
  counterValue.textContent = counter.getCount();

  // Increment button
  incrementBtn.addEventListener('click', () => {
    counter.increment();
    counterValue.textContent = counter.getCount();
  });

  // Decrement button
  decrementBtn.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.getCount();
  });
});
