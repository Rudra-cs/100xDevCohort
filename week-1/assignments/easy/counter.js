// Create a counter in JavaScript
/* We have already covered this in the second lesson, 
but as an easy recap try to code a counter in Javascript 
It should go up as time goes by in intervals of 1 second.*/

// Answer: ----

let counter = 0;

function incTime() {
  counter++;
  console.log(`Counter:${counter}`);
}

const intervalId = setInterval(() => {
  incTime();
}, 1000);

// To stop the counter after a certain time, you can use setTimeout
setTimeout(() => {
  clearInterval(intervalId); // Stop the interval
  console.log("Counter stopped.");
}, 10000); // Stop the counter after 5 seconds (5000 milliseconds)
