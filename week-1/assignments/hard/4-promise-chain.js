/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("One-second Promise resolved");
    }, 1000); // Resolves after 1 second
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Two-second Promise resolved");
    }, 2000); // Resolves after 2 seconds
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Three-second Promise resolved");
    }, 3000); // Resolves after 3 seconds
  });
}

async function calculateTime() {
  const startTime = Date.now();
  await waitOneSecond();
  await waitTwoSecond();
  await waitThreeSecond();
  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000; // Convert to seconds
  console.log("Sequentially resolved in", duration, "seconds");
}

// Call the calculateTime function to initiate the process
calculateTime();
