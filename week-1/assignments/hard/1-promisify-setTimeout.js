/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

const n = 5;

console.log(`Waiting for ${n} seconds...`);
wait(n)
  .then(() => {
    console.log("Finished Waiting for", n, "seconds");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
