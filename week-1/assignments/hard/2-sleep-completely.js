/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds) {
    // Busy-waiting loop
  }
}

// Usage: Halts the thread for 5 seconds
console.log("Start");
sleep(5000); // Halt for 5000 milliseconds (5 seconds)
console.log("End");
