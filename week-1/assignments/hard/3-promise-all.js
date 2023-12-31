/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

function calculateTime() {
  const startTime = Date.now();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((results) => {
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000; // Convert to seconds
      console.log("All promises resolved in", duration, "seconds");
      console.log("Results:", results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the calculateTime function to initiate the process
calculateTime();
