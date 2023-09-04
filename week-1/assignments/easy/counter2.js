/*Without using setInterval, 
try to code a counter in Javascript. 
There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout) */

//Answer: -

let counter = 0;

function increaseCounter() {
  counter++;
  console.log(`Counter: ${counter}`);
  // Call increaseCounter again after a
  //    delay of 1000 milliseconds (1 second)
  setTimeout(increaseCounter, 1000);
}

// Start the counter by calling increaseCounter for the first time
increaseCounter();
