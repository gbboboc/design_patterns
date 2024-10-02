import { sayMorning, sayAfternoon, sayEvening } from './greetings.js';

// Use the imported functions
const currentTime = new Date().getHours();
let greeting;

if (currentTime < 12) {
    greeting = sayMorning();
} else if (currentTime < 18) {
    greeting = sayAfternoon();
} else {
    greeting = sayEvening();
}

console.log(greeting);  // Outputs the appropriate greeting based on the time of day
